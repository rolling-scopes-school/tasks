const birdsDataEn = [
  [
    {
      id: 1,
      name: "Raven",
      species: "Corvus corax",
      description:
        "Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.",
      image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3",
    },
    {
      id: 2,
      name: "Shadoof",
      species: "Grus grus",
      description:
        "The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».",
      image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3",
    },
    {
      id: 3,
      name: "Swallow",
      species: "Delichon urbicum",
      description:
        "Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.",
      image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3",
    },
    {
      id: 4,
      name: "Nightjar",
      species: "Caprimulgus europaeus",
      description:
        "Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.",
      image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3",
    },
    {
      id: 5,
      name: "Cuckoo",
      species: "Cuculus canorus",
      description:
        "The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.",
      image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3",
    },
    {
      id: 6,
      name: "Tit",
      species: "Parus major",
      description:
        "More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.",
      image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Sparrow",
      species: "Passer domesticus",
      description:
        "Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.",
      image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
    },
    {
      id: 2,
      name: "Rook",
      species: "Corvus frugilegus",
      description:
        "Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.",
      image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3",
    },
    {
      id: 3,
      name: "Jackdaw",
      species: "Coloeus monedula",
      description:
        "The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird's love for shiny and bright things.",
      image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3",
    },
    {
      id: 4,
      name: "Songthrush",
      species: "Turdus philomelos",
      description:
        "Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.",
      image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3",
    },
    {
      id: 5,
      name: "Magpie",
      species: "Pica pica",
      description:
        "Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.",
      image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3",
    },
    {
      id: 6,
      name: "Jay",
      species: "Garrulus glandarius",
      description:
        "When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.",
      image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Finch",
      species: "Fringilla coelebs",
      description:
        "There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.",
      image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3",
    },
    {
      id: 2,
      name: "Crossbill",
      species: "Loxia curvirostra",
      description:
        "Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.",
      image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3",
    },
    {
      id: 3,
      name: "Turtledove",
      species: "Streptopelia turtur",
      description:
        "Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.",
      image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3",
    },
    {
      id: 4,
      name: "Woodpecker",
      species: "Dendrocopos major",
      description:
        "The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird's beak. In good weather, the shot can be heard within a radius of 1.5 km.",
      image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3",
    },
    {
      id: 5,
      name: "Hoopoe",
      species: "Upupa epops",
      description:
        "Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.",
      image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3",
    },
    {
      id: 6,
      name: "Swift",
      species: "Apus apus",
      description:
        "Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.",
      image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Lark",
      species: "Alauda arvensis",
      description:
        "Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.",
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3",
    },
    {
      id: 2,
      name: "Nightingale",
      species: "Luscinia luscinia",
      description:
        "Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.",
      image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3",
    },
    {
      id: 3,
      name: "Starling",
      species: "Sturnus vulgaris",
      description:
        "Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.",
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3",
    },
    {
      id: 4,
      name: "Oriole",
      species: "Oriolus oriolus",
      description:
        "The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.",
      image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3",
    },
    {
      id: 5,
      name: "Waxwing",
      species: "Bombycilla garrulus",
      description:
        "The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.",
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3",
    },
    {
      id: 6,
      name: "Goldfinch",
      species: "Carduelis carduelis",
      description:
        "Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.",
      image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Eagle",
      species: "Aquila nipalensis",
      description:
        "In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters",
      image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3",
    },
    {
      id: 2,
      name: "Kite",
      species: "Milvus migrans",
      description:
        "Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.",
      image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3",
    },
    {
      id: 3,
      name: "Harrier",
      species: "Circus cyaneus",
      description:
        "Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.",
      image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3",
    },
    {
      id: 4,
      name: "Falcon",
      species: "Falco peregrinus",
      description:
        "The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.",
      image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3",
    },
    {
      id: 5,
      name: "Hawk",
      species: "Accipiter gentilis",
      description:
        "All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.",
      image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3",
    },
    {
      id: 6,
      name: "Eagle owl",
      species: "Bubo bubo",
      description:
        "The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.",
      image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Albatross",
      species: "Diomedea exulans",
      description:
        "Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.",
      image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3",
    },
    {
      id: 2,
      name: "Gannet",
      species: "Sula nebouxii",
      description:
        "A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.",
      image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3",
    },
    {
      id: 3,
      name: "Petrel",
      species: "Puffinus griseus",
      description:
        "The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.",
      image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3",
    },
    {
      id: 4,
      name: "Pelican",
      species: "Pelecanus",
      description:
        "Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.",
      image: "https://i.ibb.co/mqqxpKB/89644134.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3",
    },
    {
      id: 5,
      name: "Penguin",
      species: "Aptenodytes forsteri",
      description:
        "The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",
      image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3",
    },
    {
      id: 6,
      name: "Seagull",
      species: "Larus argentatus",
      description:
        "Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.",
      image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3",
    },
  ],
];

export default birdsDataEn;
