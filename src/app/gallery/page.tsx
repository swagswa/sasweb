'use client';

import { useState, useEffect } from 'react';
import MobileMenu from '../components/MobileMenu';
import GalleryCard from '../components/GalleryCard';
import Link from 'next/link';

const artworks = [
  {
    title: "Люпины. Сныть. Букет",
    artist: "Алексей Фирсов",
    size: "150×200",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-003.jpg"
  },
  {
    title: "Цветение Черёмухи",
    artist: "Алексей Фирсов",
    size: "150х200",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-004.jpg"
  },
  ...Array.from({ length: 18 }, (_, i) => {
    const titles = [
      "Осенний букет на окне",
      "Разнотравье. Букет",
      "Камыш",
      "Абстракция",
      "Ирисы",
      "Цветение красной яблони",
      "Дракон охраняющий сакуру",
      "Отражение",
      "9 мая",
      "Дерево счастья",
      "Колесо Фортуны",
      "Персиковый рай",
      "Волшебный лес",
      "Цветение на Остоженке",
      "Золотой рассвет",
      "Салатовое солнце",
      "Вестник весны",
      "Триптих.Березы"
    ];
    
    const artists = i < 5 ? "Алексей Фирсов" : "Надежда Елкина";
    
    const sizes = [
      "120х100",
      "150x120",
      "200х150",
      "150х200",
      "200х150",
      "200х150",
      "120х120",
      "190х63 (каждая картина)",
      "140х80",
      "170х170",
      "100х100",
      "120х100",
      "170х170",
      "120х100",
      "120х100",
      "120х120",
      "120х120",
      "120х150 (каждая картина)"
    ];

    let description = "";
    if (titles[i] === "Отражение") {
      description = "Диптих «Отражение» — это работа о двойственности и взаимосвязи противоположностей. \n\nДве картины символизирют женское (слева) и мужское (справа). Эти два начала разделены, но в то же время очень похожи и дополняют друг друга. Парные работы напоминают зрителю, что мужчина и женщина — это половинки одного целого, которые достигают гармонии именно вместе. Это естественный закон природы, который позволяет ей развиваться и жить вечно, постоянно перерождаясь в новых и новых поколениях. \n\nВ то же время каждый холст разделён на две горизонтальные части: это лесной пейзаж и его отражение в воде. Такая композиция становится тонкой метафорой тела и души человека. Пейзаж — это внешнее и осязаемое, то, что мы видим непосредственно. Отражение же неуловимо, его нельзя потрогать, и можно лишь любоваться его глубокой красотой. Также и душу человека невозможно увидеть, но можно ощущать её характер и бесконечно вглядываться в её неисчерпаемые глубины. \n\nВ работе есть ещё один двойственный секрет: под ультрафиолетовым излучением флюоресцентные краски меняют цвет, за счёт чего получается необычный, магический эффект, подобный смене дня и ночи. Это природный дуализм, который является залогом вечной гармонии.";
    } else if (titles[i] === "9 мая") {
      description = "Картина была написана в память о Победе в Великой Отечественной войне, поэтому она выполнена в монохромной, практически черно-белой гамме. Ветки цветущей вишни припорошил снег, солнце видно сквозь туман — это напоминает оседающий на предметы пепел пожаров и режущий глаза дым от снарядов. Метель также становится метафорой истории: со временем многое стирается, становится все сложнее различить прошлое, а воспоминания исчезают под новыми и новыми слоями событий. Укрыты снегом и посвященные Победе надписи на картине, и написанный красным вином подготовительный рисунок, который отсылает к пролитой на войне крови.\n\nХудожница призывает зрителей внимательней относиться к истории и не забывать подвиги наших дедов. Ветви дерева переплетаются в виде очков, которые должны помочь зрителю увидеть правду даже спустя долгие годы. А проплывающая в небе рыба становится символом вечной минуты молчания в честь погибших.";
    } else if (titles[i] === "Вестник весны") {
      description = "Как мы узнаем, что наконец пришла весна? Небо становится выше, пригревает солнце и, конечно же, громче поют птицы! Именно птицы — вестники весеннего обновления. Своими звонкими песнями они возвещают о том, что на смену морозам приходят тёплые дни, снег скоро растает, и природа пробудится ото сна.\n\nВ картине объединяются главные символы весны — солнце и птица. Они вместе призывают тепло и воспевают рождение новой жизни. Среди просыпающихся деревьев скрыт ещё один символ — красная лошадка, которая в нетерпении бьёт копытом. Она присоединяется к радостному ликованию природы и жаждет скакать в светлое будущее.\n\nЭто предвкушение нового сезона и скорого счастья наполняет всю картину за счёт солнечных тёплых мазков, которые ложатся на холст также легко, как звучат соловьиные трели.";
    } else if (titles[i] === "Салатовое солнце") {
      description = "Глядя на картину «Салатовое солнце», зритель оказывается на солнечной лесной опушке, где царит ощущение безопасности и умиротворения. Пейзаж наполнен магией весны и магией утра: это время, свободное от забот и тревог, время, когда хочется любить и делиться добром. Яркий пейзаж дает зрителю возможность действительно отдохнуть от волнений и зарядиться энергией для новых свершений. Вместе с весенней природой мы пробуждаемся ото сна и чувствуем неисчерпаемое вдохновение.\n\nЯркие оттенки зелёного ассоциируются с молодостью, свежестью и бодростью. Они подчёркивают, что все в природе растёт, цветёт и развивается. А человеку надо лишь жить в унисон с окружающим миром.";
    } else if (titles[i] === "Дерево счастья") {
      description = "На первый взгляд, на полотне изображено роскошное дерево цветущей Магнолии. Оно светится жизненной силой и природной красотой.\nНо если присмотреться внимательнее, то на поверхности выступят интересные детали. Художница искусно скрывает тайный сюжет при помощи обьема и текстуры.\n\nШероховатая кора дерева рассказывает зрителю об истории этого растения. В буйстве красок и ярко-выраженных мазках читается и трудности, и радости былых дней. Ствол дерева олицетворяет душу, которая тянется вверх, к Мироздателю. Его окружают цветущие бутоны. Присмотревшшшись, можно заметить, что лепестки формируют фигуры ангелов. Они не только не преграждают путь стволу, но и поддерживают, направляют его, одаривая его по дороге щедрыми дарами. Само их присутствие там - доказательство удивительных достижений этой Души, которая очистилась, нашла свой путь и теперь несется по нему в Поднебесье.";
    } else if (titles[i] === "Дракон охраняющий сакуру") {
      description = "Полотно переносит зрителя в Японию, в самый сезон цветения сакуры.\nВ Азии это растение символизирует переменчивость бытия, яркость, но быстротечность человеческой жизни. Все благодаря своему удивительно красивому, но короткому сезону цветения. На этой картине художница умело остановила время, чтобы растянуть удовольствие от наблюдения за этим чудом природы.\n\nБлагодаря искусной работе с объемом и текстурой, лепестки на полотне оживают. Каждый цветок - уникален, он имеет свой характер и историю. Совместно же лепестки образуют доброжелательное лицо Дракона. Он восхищается цветением и приглашает вас к совместному любованию этим таинством, пока лепестки не начали опадать.\n\nКартина написана в смешанной технике с использованием акрила, сусального золота и структурной пасты.";
    } else if (titles[i] === "Волшебный лес") {
      description = "Этот сюжет - аллегория состоянию человеческой Души. Загадочный и непредсказуемый, как натуральное течение жизни, он интригует и завораживает зрителя. Не зря говорят, что «чужая душа - потемки». Только углубившшшись в чащу, изучив все тропинки и цветущие сады, можно попытаться раскрыть хоть толику секретов, которые хранит этот лес и узнать о нем, а может быть и о самом себе, что-то новое.\n\nЭта картина призвана возбудить в зрителе любознательность, натуральное желание к исследованию, изучению окружающего мира и людей, вечному поиску самих себя. Что за тайны хранит изображенная здесь Душа? Задержитесь ненадолго перед этим полотном, отдайтесь желанию заглянуть глубже. Раскройте его секреты, и, может быть, поведайте лесу свои.\n\nКартина написана в смешанной технике с использованием акрила, масла, сусального золота и структурной пасты.";
    } else if (titles[i] === "Цветение на Остоженке") {
      description = "Картина «Цветение на Остоженке» приглашает зрителя на одну из самых красивых улиц Москвы в период весеннего пробуждения. Художница запечатлела тот волшебный момент, когда природа расцветает даже в каменном сердце мегаполиса, напоминая о вечном круговороте жизни.\n\nЯркие краски цветущих деревьев контрастируют с историческими фасадами зданий, создавая удивительную гармонию между творением человека и природы. Каждый мазок наполнен энергией весны — той особой силой, которая пробуждает всё живое и дарит надежду на новые начинания.\n\nЭта работа — не просто городской пейзаж, а поэтическое высказывание о красоте мимолётных мгновений. Цветение длится недолго, но его красота остаётся в памяти и на полотне художницы, напоминая нам о том, что нужно ценить каждый момент жизни и находить прекрасное даже в привычном городском окружении.";
    } else if (titles[i] === "Золотой рассвет") {
      description = "«Золотой рассвет» — это гимн новому дню, воспевающий тот магический момент, когда ночь уступает место утру. Художница мастерски передаёт игру света, когда первые лучи солнца окрашивают мир в золотистые тона, наполняя его теплом и надеждой.\n\nВ этой работе особенно чувствуется влияние импрессионизма — стремление запечатлеть не столько сам пейзаж, сколько впечатление от него, мимолётное состояние природы. Золотые оттенки создают ощущение благоговения перед чудом рождения нового дня, а мягкие переходы цвета передают тишину и умиротворение раннего утра.\n\nКартина напоминает зрителю о циклической природе времени, о том, что каждый рассвет — это новая возможность, новая страница жизни. Она приглашает остановиться в суете будней и насладиться красотой простых вещей, которые мы часто не замечаем в повседневной спешке.";
    } else if (titles[i] === "Персиковый рай") {
      description = "Картина «Персиковый рай» переносит зрителя в благоухающий сад, где время словно остановилось. Сочные персиковые деревья, усыпанные нежными цветами и спелыми плодами, создают атмосферу изобилия и безмятежности.\n\nХудожница использует теплую цветовую гамму, чтобы передать ощущение летнего зноя и сладкого аромата созревших персиков. Каждый мазок наполнен чувственностью и жизненной силой, а текстура краски создает почти осязаемое впечатление — кажется, что можно протянуть руку и сорвать сочный плод прямо с холста.\n\nЭтот персиковый сад становится метафорой райского места, где человек находится в полной гармонии с природой и самим собой. Картина пробуждает воспоминания о беззаботном детстве, о лете, проведенном в саду, о простых радостях жизни, которые мы часто забываем в повседневной суете.";
    } else if (titles[i] === "Колесо Фортуны") {
      description = "«Колесо Фортуны» — это философское размышление о непостоянстве судьбы и вечном движении жизни. Древний символ, известный многим культурам, предстает на полотне как воплощение цикличности бытия, где взлеты сменяются падениями, а за темной полосой всегда следует светлая.\n\nДинамичная композиция и насыщенные цвета передают ощущение постоянного движения — колесо никогда не останавливается, как и сама жизнь. В центре колеса — точка неподвижности, символизирующая внутренний стержень человека, который остается неизменным, несмотря на все превратности судьбы.\n\nЭта работа приглашает зрителя к размышлению о собственной жизни, о тех взлетах и падениях, которые формируют наш путь. Она напоминает о том, что в любой ситуации важно сохранять внутреннее равновесие и помнить: то, что сегодня кажется неудачей, завтра может обернуться благом. Ведь колесо Фортуны продолжает свое вечное движение.";
    } else if (titles[i] === "Триптих.Березы") {
      description = "Триптих «Березы» — это поэтическое посвящение символу русской природы, воплощению чистоты и света. Три полотна, объединенные общей темой, раскрывают разные состояния и настроения березовой рощи, создавая многогранный образ родной природы.\n\nБелоснежные стволы берез, словно свечи, устремляются вверх, к небу, символизируя связь земного и небесного. Трепетная листва, играющая на ветру, передает ощущение легкости и свободы. Художница мастерски использует игру света и тени, чтобы показать, как меняется облик берез в разное время дня и в разные сезоны.\n\nЭтот триптих — не просто изображение деревьев, а глубокое размышление о русской душе, о связи человека с родной землей. Березы в народной культуре всегда были символом России, ее красоты и стойкости. Картина пробуждает в зрителе чувство принадлежности к своим корням, к своей истории, напоминая о том, что, как и эти деревья, мы черпаем силу из родной земли.";
    } else if (titles[i] === "Цветение красной яблони") {
      description = "«Цветение красной яблони» — это праздник весны, запечатлённый на холсте. Художница с особой чуткостью передаёт тот волшебный момент, когда дерево облачается в пышный наряд из нежно-розовых цветов, словно невеста перед венчанием.\n\nКраски на полотне звучат как музыка — яркие, но гармоничные. Каждый цветок прописан с любовью и вниманием к деталям, но при этом картина не теряет целостности впечатления. Розовые и красные оттенки цветов контрастируют с глубокой зеленью молодой листвы, создавая ощущение полноты жизни и буйства природных сил.\n\nЭта работа — не просто изображение цветущего дерева, а метафора обновления и возрождения. Яблоня в народной культуре всегда символизировала плодородие, женское начало, продолжение рода. Глядя на эту картину, зритель невольно проникается оптимизмом и верой в будущее, ведь за прекрасным цветением непременно последуют плоды — как награда за терпение и труд.";
    }

    return {
      title: titles[i],
      artist: artists,
      size: sizes[i],
      description: description || "",
      imagePath: i + 3 === 11 
        ? "/images/DSCF8379_24Mp-min.jpg" 
        : `/images/SAS. Новая.pdf-image-${(i + 5).toString().padStart(3, '0')}.jpg`
    };
  }),
  {
    title: "Позитано",
    artist: "Надежда Елкина",
    size: "50x50",
    description: "Холст акрил, смешанная техника",
    imagePath: "/images/photo_2025-03-19_20-09-14.jpg"
  },
  {
    title: "Март. Цветы",
    artist: "Надежда Елкина",
    size: "80x80",
    description: "Холст масло",
    imagePath: "/images/photo_2025-03-19_20-10-35.jpg"
  },
  {
    title: "Октябрь. Тверь. 2025",
    artist: "Надежда Елкина",
    size: "60x80",
    description: "Холст, масло",
    imagePath: "/images/photo_2025-03-19_22-53-46.jpg"
  },
  {
    title: "Камелии",
    artist: "Надежда Елкина",
    size: "60x60",
    description: "Холст, масло, конструктивизм",
    imagePath: "/images/photo_2025-03-19_22-55-16.jpg"
  },
  {
    title: "Камелия",
    artist: "Надежда Елкина",
    size: "60x60",
    description: "Холст, масло, конструктивизм",
    imagePath: "/images/photo_2025-03-19_22-56-13.jpg"
  },
  {
    title: "Защитник",
    artist: "Надежда Елкина",
    size: "120x100",
    description: "Холст, масло. 2024",
    imagePath: "/images/photo_2025-03-19_22-56-41.jpg"
  },
  {
    title: "Нежность. Садовые камелии",
    artist: "Надежда Елкина",
    size: "60x60",
    description: "Холст, масло, смешанная техника",
    imagePath: "/images/photo_2025-03-19_22-57-12.jpg"
  },
  {
    title: "Девушка из вертикальной реальности",
    artist: "Надежда Елкина",
    size: "",
    description: "Картина «Девушка из вертикальной реальности» приглашает зрителя в мир, где привычные законы пространства перестают действовать. Вертикальная реальность — это метафора иного измерения, где человек обретает новые возможности и свободу от земного притяжения.\n\nДевушка на картине словно парит между мирами, находясь одновременно и здесь, и где-то за пределами нашего понимания. Её образ — воплощение внутренней силы и грации, которые позволяют преодолевать любые ограничения. Вертикальные линии и динамичные мазки создают ощущение движения вверх, к новым высотам сознания и духовности.\n\nЭта работа напоминает нам о том, что реальность многогранна, и помимо привычного горизонтального мира существуют и другие измерения, доступные тем, кто готов выйти за рамки обыденного восприятия. Картина приглашает зрителя подняться над повседневностью и взглянуть на мир с новой, неожиданной перспективы.",
    imagePath: "/images/DSCF8784_24Mp-min.jpg"
  },
  {
    title: "Работа 25",
    artist: "SAS Gallery Collection",
    size: "",
    description: "",
    imagePath: "/images/DSCF8820_100Mp.jpg"
  },
  {
    title: "Всплеск",
    artist: "Надежда Елкина",
    size: "",
    description: "«Всплеск» — это мгновение, застывшее во времени. Картина передает тот неуловимый момент, когда капля воды соприкасается с поверхностью и рождается маленькое чудо — всплеск, разбрасывающий вокруг себя миниатюрные капли-брызги, каждая из которых отражает целый мир.\n\nХудожница мастерски использует цвет и текстуру, чтобы передать динамику движения и хрупкую красоту этого мимолётного явления. В работе чувствуется влияние импрессионизма — стремление запечатлеть не столько сам объект, сколько впечатление от него, игру света на водной поверхности, мерцание капель.\n\nЭтот всплеск становится метафорой жизненных событий — иногда даже маленькое действие может вызвать целую цепочку последствий, расходящихся кругами. Картина напоминает о том, как важно замечать красоту в обыденных явлениях и ценить каждое мгновение, ведь оно уникально и неповторимо.",
    imagePath: "/images/DSCF8917_24Mp-min.jpg"
  },
  {
    title: "Танец невест",
    artist: "Надежда Елкина",
    size: "",
    description: "В картине «Танец невест» художница обращается к древним архетипам и ритуалам, связанным с женским началом и переходными моментами жизни. Невесты, кружащиеся в танце, символизируют переход от одного состояния к другому, от девичества к женственности, от одиночества к союзу.\n\nБелые силуэты фигур словно растворяются в пространстве картины, создавая ощущение легкости и воздушности. Их движения плавные и гармоничные, они подчиняются какому-то внутреннему ритму, известному только им. Этот танец — не просто физическое действие, а священный ритуал, объединяющий прошлое и будущее, традицию и новизну.\n\nНаблюдая за этим танцем, зритель словно становится свидетелем таинства, приоткрывающего завесу между мирами. Картина напоминает о циклической природе жизни, о вечном обновлении и преемственности поколений, где каждая женщина является звеном в бесконечной цепи, соединяющей предков и потомков.",
    imagePath: "/images/DSCF8998_100Mp.jpg"
  },
  {
    title: "Капель",
    artist: "Надежда Елкина",
    size: "120x100",
    description: "Холст, масло",
    imagePath: "/images/DSCF0593_24Mp-min.jpg"
  },
  {
    title: "Луна в кубе",
    artist: "Надежда Елкина",
    size: "120x100",
    description: "Холст, масло",
    imagePath: "/images/DSCF2885_24Mp-min.jpg"
  },
  {
    title: "До луны",
    artist: "Надежда Елкина",
    size: "120x100",
    description: "Холст, масло",
    imagePath: "/images/DSCF2917_24Mp-min.jpg"
  }
];

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Функция для предзагрузки изображений
    const preloadImages = async () => {
      try {
        // Получаем все URL изображений
        const imageUrls = artworks.map(artwork => artwork.imagePath);
        
        // Счетчик загруженных изображений
        let loadedCount = 0;
        
        // Загружаем изображения последовательно
        for (const url of imageUrls) {
          try {
            // Создаем объект изображения для предзагрузки
            await new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => {
                loadedCount++;
                console.log(`Загружено ${loadedCount} из ${imageUrls.length} изображений`);
                resolve(url);
              };
              img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${url}`);
                loadedCount++;
                resolve(url); // Все равно считаем загруженным, чтобы не блокировать остальные
              };
              img.src = url;
            });
          } catch (error) {
            console.error('Ошибка загрузки изображения:', url, error);
          }
        }
        
        console.log('Все изображения загружены');
        setImagesLoaded(true);
      } catch (error) {
        console.error('Ошибка предзагрузки изображений:', error);
        setImagesLoaded(true); // Все равно показываем галерею даже при ошибке
      }
    };

    preloadImages();

    // Добавляем обработчик для Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => {
          console.log('ServiceWorker успешно зарегистрирован');
        }).catch(err => {
          console.log('Ошибка регистрации ServiceWorker: ', err);
        });
      });
    }
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-800">Загрузка галереи...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-[1000]">
        <Link href="/">
          <img src="/images/IMG_3471.svg" alt="Logo" className="w-24 h-24 md:w-32 md:h-32" style={{position: 'fixed'}} />
        </Link>
      </div>
      {/* Header с кнопкой меню */}
      <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 50 }}>
        <button
          className="w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="w-6 h-0.5 bg-gray-800 mb-1.5"></span>
          <span className="w-6 h-0.5 bg-gray-800 mb-1.5"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Кнопка домой */}
      <div style={{ position: 'fixed', left: '16px', bottom: '16px', zIndex: 52 }}>
        <Link href="/">
          <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </Link>
      </div>

      {/* Мобильное меню */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Основной контент */}
      <div className="bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center pt-8">
            <h1 className="text-4xl font-normal">Галерея</h1>
            <div className="w-24 h-0.5 bg-black mx-auto mt-4 mb-12"></div>
          </div>
          
          <div className="space-y-32">
            {artworks.map((artwork, index) => (
              <GalleryCard
                key={index}
                title={artwork.title}
                artist={artwork.artist}
                year={artwork.size}
                description={artwork.description}
                image={artwork.imagePath}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-32 border-t border-gray-200 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-light mb-8">SAS Art Fashion Gallery</h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Мы стремимся создавать пространство, где искусство и мода 
                сливаются воедино, рассказывая уникальные истории через 
                визуальные образы наших талантливых художников.
              </p>
              <div className="flex justify-center space-x-8 mb-12">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">VKontakte</a>
              </div>
              <div className="text-sm text-gray-500">
                2024 SAS Art Fashion Gallery. Все права защищены.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
