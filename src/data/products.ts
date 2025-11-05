import { LucideIcon, Monitor, Server, Printer, Smartphone, HardDrive, Wifi } from "lucide-react";

export type CategoryKey =
  | "computers"
  | "infrastructure"
  | "peripherals"
  | "storage"
  | "network"
  | "applications avec licences et antivirus";

export type Product = {
  id: string;
  name: string;
  price: number; // FCFA
  stock: "En stock" | "Sur commande" | "Rupture";
  category: CategoryKey;
  subcategory: string;
  image: string;
  tags?: string[];
  brand?: string;
  desc?: string;
  details?: string[];
};

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
  icon: LucideIcon;
  colorClass: string; // text-*
  subcategories: string[];
};

export const CATEGORIES: CategoryMeta[] = [
  {
    key: "computers",
    label: "Ordinateurs & Laptops",
    icon: Monitor,
    colorClass: "text-blue-600",
    subcategories: [
      "Ordinateurs de bureau",
      "Laptops",
      "Mini PC",
    ],
  },
  {
    key: "infrastructure",
    label: "Serveurs & Infra",
    icon: Server,
    colorClass: "text-green-600",
    subcategories: ["Routeurs", "Switches", "Serveurs tour", "Serveurs rack"],
  },
  {
    key: "peripherals",
    label: "Périphériques",
    icon: Printer,
    colorClass: "text-purple-600",
    subcategories: ["Imprimantes", "Unité centrale", "Écrans", "Projecteurs", "Accessoires", "onduleurs", "BOITE D'ALIMENTATION PC", "Régulateurs", ],
  },
  {
    key: "storage",
    label: "Stockage & Mémoire",
    icon: HardDrive,
    colorClass: "text-orange-600",
    subcategories: ["SSD", "Disques externes", "RAM", "NAS","Cartes graphiques", "Clé USB","Adaptateur" ],
  },
  {
    key: "network",
    label: "Réseaux & Sécurité",
    icon: Wifi,
    colorClass: "text-teal-600",
    subcategories: ["Wi‑Fi", "Firewalls", "Caméras IP", "UPS","Sécurite"],
  },
  {
    key: "applications avec licences et antivirus",
    label: "Application avec licences et antivirus",
    icon: Smartphone,
    colorClass: "text-red-600",
    subcategories: ["Windows 10 pro", "Windows 11 pro", "Office 19 actif"],
  },
];

export const PRODUCTS: Product[] = [
  // Computers - 8 produits
 
  {
    id: "p-2",
    name: "Ordinateur Acer CORE I5.4GO.250GO.19",
    price: 50000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Acer",
    details: ["D'occasion","NOIR", "Acer","250 GO SATA OU SSD 128 GO", "4GO", "3.20ghz"],
    tags: ["bureau","occasion","acer","desktop"],
    image: "./IMG/CORE I5.4GO.250GO.19/1.jpg",
    desc: " Dell 3190\n"+
    "Ordinateurs complets avec écran 19\" en HP LENOVO DELL ET ACER" +
        "\n"+ "Mémoire Ram 4giga\n"+ "Core i5 3.20 ghz, 4 go de mémoire Ram extensible à 8go\n"
        + "disque dur 250 go sata ou 128 go ssd extensible à 500go sata ou 256 go ssd\n"+
        "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n"+
        "Machines puissantes idéales pour transfert d'argent, multidevises et tous travaux de bureau et d'internet.\n"+
        "Tout nos produits sont garantis. A PARTIR DU PRIX INDIQUE"
  },
  {
    id: "p-4",
    name: "CORE I7 4 à 7ème génération .8GO.500GO.19à 24 pouces",
    price: 80000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Acer",
    tags: ["desktop", "bureau"],
    image: "./IMG/CORE I7 4 à 7ème génération .8GO.500GO.19à 24 pouces/1.jpg",
    desc: "Ordinateur complet avec écran 19 à 24 pouces disponibles en Acer ,HP, Lenovo et Dell selon le stock\n"+
        "Core i7 de la 4 -ème à la 7ème génération.\n"+
    "Mémoire RAM 8 disponible aussi avec 16 go\n"+
        "Disponibles au en 20.22 et 24 pouces disponibles aussi en option\n"+
        "A PARTIR DU PRIX INDIQUE",
    details: ["D'occasion","NOIR","Acer","500GO SATA OU SSD 256 GO","8GO","CORE I7"]
  },
  {
    id: "p-6",
    name: "Laptop DELL.3340.3350.Core I3.8go.500 go13 .3 TACTILE",
    price: 85000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "bureau", "tactile"],
    image: "./IMG/DELL.3340.3350.Core I3.8go.500 go13 .3 TACTILE/1.jpg",
    details:["Réconditionné","NOIR, GRISE, BLEU","Dell","500GO","8GO","Core i5"],
    desc: "DELL Latitude 3340 ET 3350 Core i3\n"+ "Intel Core i3 (4 ème et 5ème Génération )\n"+
        "DISQUE DUR: 500 Go\n"+
    "MEMOIRE Ram: 8 Go\n"+ "Port HDMI / Bluetooth / Wifi / Webcam / Lecteur SD, Écran 13.3\" Tactile"
  },
  {
    id: "p-8",
    name: "DELL LATITUDE 5502 Core I7 11 ème 15.6 pouces +pavé",
    price: 325000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["all-in-one", "écran", "bureau", "portable", "Laptops"],
    image: "./IMG/DELL LATITUDE 5502 Core I7 11 ème 15.6 pouces +pavé/1.jpg",
    details:["Réconditionné","GRISE","Dell","512 ssd","16GO","CORE I7 11ème génération"],
    desc:"DELL 5502 CORE I7 11 eme .Ecran 15.6 pouces\n"+ "Intel® Core™ i7-1185G7 de 11e génération (12 Mo de mémoire cache, 4 cœurs, 8 threads, de 3 GHz à 4,80 GHz, 17,5 W)\n" +
"Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n" +
"16 Go de mémoire DDR4 extensible à 32 GO\n" +
"Écran FHD 15 pouces, 1 920 x 1 080, 60 Hz, antireflet, non tactile, 45 % NTSC, 250 cd/m², grand angle de vue\n"+
"Disque SSD M.2 PCIe de 512 Go\n"+
"Clavier avec pavé numerique\n"+
"Communication sans fil Wi-Fi AX + Bluetooth\n"+
        "1 Port RJ45, 1 Port USB 3.2, 1 Port USB 3.2 PowerShare, 2 Port Thunderbolt™ 4 avec Power Delivery et DisplayPort (USB-C™), 1 HDMI 2.0, 1 Prise jack universelle pour casque, Windows 10 Professionnel 64 bits et tous les logiciels\n"+
"Tous nos produits sont garantis \n"+
"A PARTIR DU PRIX INDIQUE"
  },
  {
    id: "p-10",
    name: "DELL X360 TACTILE 11.6\"",
    price: 80000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["dell", "écran tactile", "portable"],
    image: "./IMG/DELL X360 TACTILE 11.6/1.jpg",
    details:["reconditionné","NOIR","Dell","128 SSD","8GO","INTEL PENTIUM"],

    desc:"Ordinateur Portable DELL LATITUDE 3189\n"+ "Ram: 8GO, DISQUE DUR: 128 GO extensible à 256GO\n" +
"ÉCRAN 11.6 POUCES TACTILE X360\n" +
"Disponible aussi en 8GO 256 SSD pour un petit supplément."
  }, 
  {
    id: "p-12",
    name: "Gamer Dell et HP",
    price: 200000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["portable", "desktop"],
    image: "./IMG/Gamer Dell et HP/1.jpg",
    details:["reconditionné","GRISE","Dell","756 GO","16GO"," Intel XEON E5420 ou 5430"],
    desc:"Dell Precision ou HP Z400 et 420\n" +
"(RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n" +
"Processeur : Intel XEON E5420 ou 5430 Fréquence : 2.66Ghz.\n"+
"Mémoire Ram 16go : Disque dur : 1ssd 256go en master+1de 500 Go sata en slave.\n"+
"Ecran 22 à24 pouces.\n"+
"Carte graphique de 4 go\n"+
"A PARTIR DU PRIX INDIQUE"

  },
    {
    id: "p-14",
    name: "GAMER DELL PRECION +ECRAN 24",
    price: 250000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["fixe", "desktop", "gamer"],
    image: "./IMG/GAMER DELL PRECISION +ECRAN 24/1.jpg",
    details:["Réconditionné","NOIR","Dell","1Téra","16GO","Intel Xeon E5-2609"],
    desc:"Modèle: Dell Précision\n" +
"Format: Tour\n" +
"RAM : 8 Go DDR4 extensible à 16 et 32GO\n" +
"Processeur : Double Intel Xeon E5-2609 2,40 GHz - Turbo : 3,00 Ghz-3\n"+
"Mémoire Vive : 16Go - DDR4 ECC EXTENSIBLE A 64GO, 512SSD en master +500Go SATA en slave\n"+
"512SSD en master +500Go SATA en slave\n"+
"Carte graphique : NVIDIA GTX 4Go A 8GO GDDR5\n"+
"Carte son : Intégrée\n"+
"Réseau : Gigabit Ethernet\n"+"ECRAN 24 POUCES\n"+"Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n"+
"DISPONIBLE A PARTIR DU PRIX INDIQUE"
  },
   {
    id: "p-16",
    name: "GAMER DELL PRECISION T7810",
    price: 400000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["fixe", "dell", "desktop", "gamer"],
    image: "./IMG/GAMER DELL PRECISION T7810/1.jpg",
    details:["Réconditionné","NOIR","Dell","256 SSD","8GO","CORE I5"],
    desc:"Modèle : Dell Precision 7810\n" +
"Processeur : Double Intel Xeon E5-2609 1,70 GHz - Turbo : 3,00 Ghz-3\n" +
"Mémoire Vive : 32Go - DDR4 ECC EXTENSIBLE A 64GO\n" +
"Disque dur : OPTION 1: 256SSD en master +500Go SATA en slave\n"+
"OPTION 2: 512SSD en master +1000Go SATA en slave\n"+
"Lecteur optique : Graveur DVD\n"+
"Carte graphique : OPTION 1 NVIDIA 4Go GDDR5\n"+
"OPTION 2 NVIDIA - 6Go A 8GO GDDR5\n"+
        "Carte son : Intégrée\n"+
        "Réseau : Gigabit Ethernet\n"+
        "Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n"+
"LOGICIELLE ARCHITECTURE: AUTOCAD, ARCHICAD, GRAYTEC,ETC.... DISPONIBLES\n"+
"Alimentation : 685 Watts"
  },
   {
    id: "p-18",
    name: "GAMER DELL PRECISION 5810 XEON.NVIDIA 4go.24 POUCES",
    price: 300000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["fixe", "desktop", "gamer", "dell"],
    image: "./IMG/GAMER DELL PRECISION 5810 XEON.NVIDIA 4go.24 POUCES/1.jpg",
    details:["D'occasion","NOIR","dell","SSD 512 go + 500 go SATA","32GO","Intel Xeon E5-1607 v3"],
    desc:"Gamer Dell 5810\n" +
"Ecran 24 Pouces\n" +
"Intel Xeon E5-1607 v3\n" +
"Fréquence de base du processeur: 3,10GHz\n"+
"Nombre de cœurs 4\n"+
"RAM 32 extensible à 128go\n"+
"2 Disques Durs :SSD 512 go en master+,disque 500 go SATA en slave\n"+
"Carte Graphique NVIDIA 4go à 8go\n"+
"À partir du prix ci-dessous"
  },
    {
    id: "p-20",
    name: "GAMER DELL T7810. NVIDIA 8GO+24HDMI",
    price: 60000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["fixe", "desktop", "gamer", "dell", "nvidia"],
    image: "./IMG/GAMER DELL T7810. NVIDIA 8GO+24HDMI/1.jpg",
    details:["Réconditionné","NOIR","Dell","32Go","+1.5Téra","Double Intel Xeon E5-2609"],
    desc:"Modèle : Dell Precision 7810\n" +
"Format : Tour\n" +
"Processeur : Double Intel Xeon E5-2609 1,70 GHz - Turbo : 3,00 Ghz-3\n" +
"Mémoire Vive : 32Go - DDR4 ECC EXTENSIBLE A 128GO\n"+
"Disque dur : 512SSD en master +1000Go SATA en slave\n"+
"Lecteur optique : Graveur DVD\n"+
"Carte graphique : NVIDIA GTX 8GO GDDR5\n"
        +"Carte son : Intégrée\n"
        +"Réseau : Gigabit Ethernet\n"
        +"Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n"+
        "LOGICIELLE ARCHITECTURE: AUTOCAD, ARCHICAD, GRAYTEC,ETC.... DISPONIBLES"
  },
  {
    id: "p-22",
    name: "GAMER HP Z400 ou Z420.16GO.4 go GRAPHIQUE+22 POUCES",
    price: 200000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["fixe", "desktop", "gamer", "dell", "windows"],
    image: "./IMG/GAMER HP Z400 ou Z420.16GO.4 go GRAPHIQUE+22 POUCES/1.jpg",
    details:["D'occasion","NOIR","dell","756 SSD","16GO","Z420 XEON CPU F5 1603",],
    desc:"HP Z420 XEON CPU F5 1603 Processeur 2.80ghz\n" +
"Ram 16go extensible à 32go.\n" +
"Disque ssd 256go en master+500Go en slave\n" +
"carte graphique de 4Go dedié\n"+
"Ecran 22 à 24 pouces\n"+
"Clavier avec pavé Numérique\n"+
"Machine idéale pour architecture et autres applications exigeantes"
  },
    {
    id: "p-24",
    name: "GAMER HP Z420 +24Graphique de 4go+16go 256go",
    price: 200000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["bureau", "desktop", "ordinateur fixe", "HP", "windows"],
    image: "./IMG/GAMER HP Z420 +24Graphique de 4go+16go 256go/1.jpg",
    details:["D'occasion","Noir","HP","256ssd +500go","16GO","intel xeon CPU E1630"],
    desc:"Gamer HP Z420 intel xeon CPU E1630 avec les caractéristiques suivants: " +
        "Processeur 2.80ghz (4CPUs) Ram 16go extensible à 32go, Disque SSD256 Go en master + 500go Sata slave\n" +
"Carte Graphique 4go +Ecran 24 pouces\n" +
"Pour tout information contacter nous."
  },
  {
    id: "p-26",
    name: "GAMER HP Z640.32 GO RAM .8Go NVIDIA +24 POUCES",
    price: 500000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["fixe", "desktop", "hp", "windows","32go","1to", "INTEL XEONRAM"],
    image: "./IMG/GAMER HP Z640.32 GO RAM .8Go NVIDIA +24 POUCES/1.jpg",
    details:["Réconditionné","Noir","hp","1000Go (1To)","32GO","INTEL XEONRAM"],
    desc:"GAMER HP Z640.\n" +
"2 Processeurs Intel® Xeon.\n" +
"Ram 32 Go extensible à 64 Go.\n" +
"2 Disques durs ssd 512go en master+500go en slave\n"+
"cartes graphiqueNvidia de 8Go dédié +24 POUCES\n"+
"Machine idéale pour architecture, la 3d et autres applications exigeantes et gaming."

  },
   {
    id: "p-28",
    name: "GAMER NVIDIA HP OU DELL +ECRAN",
    price: 250000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./IMG/GAMER NVIDIA HP OU DELL +ECRAN/1.jpg",
    details:["Réconditionné","Noir","Dell","1T","16GO","INTEL XEON CPU E5-1625"],
    desc:"GAMERS DISPONIBLES EN HP ET DELL\n" +
"Processeur INTEL XEON CPU E5-1625 v3 fréquence 3.6ghz avec 4 coeurs / 8 threads.\n" +
"Mémoire Ram 16go extensible à 32go et plus.\n" +
"Disque ssd 512 go master+ 500Go sata en slave\n"+
"Carte graphique Nvidia de 4 à 8 Go\n"+
"Ecran 22 à 24 pouces\n"+
"Machine idéale pour architecture, la 3d et autres applications exigeantes et gaming."

  },
   {
    id: "p-30",
    name: "GAMER Z620.640 8go GRAPHIQUE+22 à 24 Pouces",
    price: 350000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["bureau", "desktop", "ordinateur fixe", "hp", "windows"],
    image: "./IMG/GAMER Z620.640 8go GRAPHIQUE+22 à 24 Pouces/1.jpg",
    details:["Réconditionné","Noir","HP","756 SSD","16GO","intel xeon CPU E5620"],
    desc:"Je mon Gamer HP Z600 Z620 Z640+22 à 24 Pouces\n" +
"intel xeon CPU E5620 avec les caractéristiques suivants:\n" +
"Processeur 2.40(8CPUs) Ram16 go extensible à 32go, Disque ssd 256go en master+500 go en slave.\n"+
"Carte Graphique 8go Nviadia GTX."
  },
    {
    id: "p-32",
    name: "GAMING ASUS NVIDIA GTX I7 3.33GHZ",
    price: 200000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs portables",
    brand: "Autre",
    tags: ["fixe", "desktop", "autre", "windows"],
    image: "./IMG/GAMING ASUS NVIDIA GTX I7 3.33GHZ/1.jpg",
    details:["D'occasion","Noir","autre","756Go","16GO","ASUS NVIDIA GTX"],
    desc:"Je vends GAMING ASUS NVIDIA GTX\n" +
"Machine gamer, architecture ou 3D Processeur\n" +
"Core i7 de 3.07 à 3.33ghz (4 Cœurs, 8 cpu)\n" +
"Mémoire Ram : 16 go en . Boîtier Cooler Master HAF 922\n"+
"Radiateur et ventilo zalman CNPS 9900 led\n"+
"Carte mère ASUS P6TD Deluxe\n"+
"Alimentation 800 watts certifié XION-800P14N Silent bleue LED\n"+
"Carte Nvidia GTX 1650 de 4go vram\n"+
"Disque durs: Ssd 256 go en master et sata 500 go en slave.\n"
        +"Clavier et souris sans fil\n"
        +"Wi-fi de 300mbts.\n"+
"Windows 10 64bits pro .En option : Écran de 24 pouces"

  },
  {
    id: "p-34",
    name: "Gaming I7.NVIDIA4Go.16GoRAM+.23",
    price: 180000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["bureau", "desktop", "ordinateur fixe", "hp", "windows"],
    image: "./IMG/Gaming I7.NVIDIA4Go.16GoRAM+.23/1.jpg",
    details:["D'occasion","Noir","HP","500GO","16GO","Core i7- 3.40 Ghz"],
    desc:"HP TOUR ou DESKTOP selon stock\n" +
"CORE I7 +23 POUCES\n" +
"Core i7- 3.40 Ghz - 4 coeurs - Turbo : 3,9Ghz\n" +
"Mémoire Ram : 16 Go. Disque dur 500 go\n"+
"Nvidia Geforce GT 730 DE 4GO\n"+
"Total affichage graphique 12go.( 4go de mémoire dédiée +8Go de mémoire partagée )\n"+
"EN OPTION: Wifi.Disque SSD de 256 ou 512 Go au lieu de 500GO ou en sus.\n" +
        "Machines puissantes et robustes idéales pour les charges de travail lourdes, les jeux , les montages vidéos ou le dessin ou la 3D."
  },

// nouveaux produits ajoutés

  {
        id: "p-53",
        name: "HP CORE I7 12 EME GEN",
        price: 550000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows", "i7"],
        image: "./IMG/ALL IN ONE 27 POUCES TACTILE I7 12ème/1.jpg",
        details: [
            "Neuf",
            "Grise",
            "HP",
            "512 SSD",
            "8GO à 32GO",
            "Intel® Core™ i7-1255U",
        ],
        desc: "Ordinateur portable HP Pavillon 15\n " +
            "Processeur Core i7 12-ème génération (jusqu'à 4,7 GHz en Turbo Boost, 12 Mo de cache L3)\n" +
            "Mémoire 8 Go de RAM DDR4-3200 MHz extensible à 32go.\n" +
            "Disque dur SSD 512 go M.2 PCIe® NVMe™ (possible aussi en 1To)\n" +
            "Ecran 15,6\" FHD (1 920 x 1 080)\n"
            +"Haut-parleurs doubles ; Amplification audio HP/Caméra HD HP Wide Vision 720p avec microphones numériques à double matrice intégrés/1\n"
      +"taux de signalisation SuperSpeed USB Type-C® 10 Gbit/s (USB Power Delivery, DisplayPort™ 1.4, HP Sleep and Charge)\n"
      +"2 taux de signalisation SuperSpeed USB Type-A 5 Gbit/s\n"
      +"1 HDMI 2.0 ; 1 broche intelligente CA ; 1 combo casque/micro\n",
    },
 {
        id: "p-55",
        name: "Hp Elite X2 1013 G3 Core I7-8 ème Gen.16Go.512Go 13 Tactile",
        price: 280000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptops", "hp", "windows", "tactile"],
        image: "./IMG/Hp Elite X2 1013 G3 Core I7-8 ème Gen.16Go.512Go 13 Tactile/1.jpg",
        details: [
            "Réconditionné",
            "Gris",
            "HP",
            "512GB",
            "16GO",
            "Core i7 8550 U 8-ème jusqu’à 4 .2 GHZ",

        ],
        desc: "HP Elite X2 1013 G3 Core I7-8 ème Gen.16Go.512Go 13\" Tactile (RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n " +
            "LIVRE AVEC UN ADAPTATEUR 11 EN 1 pour tous les ports imaginables\n" +
            "HP Elite x2 1013 G3 Intel-Core i7 8550 U 8-ème jusqu'à 4 .2 GHZ en mode Turbo\n" +
            "RAM: 16 GO, DISQUE: 512GO SSD M2\n" +
            "ECRAN 13 POUCES TACTILE DETACHABLE brillant au format 15/10 avec haute résolution\n" +
            "2x USB Type-C\n"
            + "1x USB Type-C\n"
            + "3.2 Gen 1 (5 Gbit/s), Power Delivery (PD),\n"
            + "Communication WIFI 802.11 ac(2x2),BLUETOOTH 5\n"
            + "1 combiné casque/microphone\n"
            + "Système d'exploitation installé et suite office : Microsoft Windows 10 Professionnel 64 bits /OFFICE 2019\n"
   
          },

  {
        id: "p-57",
        name: "HP ELITEBOOK 840 G3 I5",
        price: 125000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["hp", "windows", "portable"],
        image: "./IMG/HP ELITEBOOK 840 G3 I5/1.jpg",
        details: [
            "Réconditionné",
            "Gris",
            "HP",
            "256SSD",
            "8Go",
            "Core i5-6è",
        ],
        desc: "NOUS VENDONS DES ORDINATEURS PORTABLES HP ELITEBOOK 840 G3\n " +
            "CORE I5 6 génération 6600U\n" +
            "Processeur de 2,6 à 3 GHZ\n" +
            "mémoire 8go DDR4 SDRAM , disque dur ssd 256go\n" +
            "Ecran 14 pouces.\n",
            
    },
     {
        id: "p-59",
       name: "HP Core I5+19 NEUF",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
       tags: ["hp", "windows", "core i5", "8go", "256ssd", "19 pouces", "desktop"],
        image: "./IMG/HP Core I5+19 NEUF/2.jfif",
        details: [
            "Neuf",
            "Noir",
            "HP",
            "500",
            "8go",
            "3.4 core i5",
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces \n " +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go.\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go . Graveur dvd .\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,) \n" +
            "Prêt à l'emploi et garanti. \n",
            
    },
    

 {
        id: "p-61",
        name: "HP Core I7 neuf + 19 pouces",
        price: 300000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["hp", "windows", "core i7", "8go", "512ssd", "19 pouces", "desktop"],
        image: "./IMG/HP Core I7 neuf + 19/2.jfif",
        details: [
            "Neuf",
            "Noir",
            "HP",
            "1000",
            "8go",
            "3.4 core i7",
        ],
        desc: "Nous vendons des machines fixes Hp pro 6300 microtower coreI7 avec écran 19 pouces.  \n " +
            ". Core i7 3770: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go. \n" +
            " Disque dur 1000 go. Graveur dvd .Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti. \n",
    },
    {
        id: "p-1",
        name: "Desktop Pro 14\" i7/16Go/1To",// A revoir
        price: 790000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "lenovo", "windows"],
        image: "./images/HP/hp3.jpg",
        details: [
            "Réconditionné",
            "Noir",
            "HP",
            "500 Go ET/OU 256 SSD",
             "08 Go EXTENSIBLE à 16 GO",
            "Intel Core i7 de 7e génération",
            " 22 à 24 Pouces",
            "longue durée jusqu'à 10 heures",
        ],
        desc: "ENSEMBLE ORDINATEUR COMPLET CORE I7 7 ème génération\" " +
            "DISPONIBLE EN HP PRODESK 400 G4 SSF.\"" +
            " AVEC UNE MÉMOIRE DE 8GO EXTENSIBLE à 16GO, \"" +
            "DISQUE DUR 500 GO ET/OU SSD 256 GO. ECRAN 22 à 24 POUCES\n\"" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-3",
        name: "Core I5 et I7.Ram 8GO\" Ecran 19 à 24\"+wifi",// A revoir
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "écran", "bureau", "portable"],
        image: "./images/HP/hp4.webp",
        details: [
            "Réconditionné",
            "Noir",
            "HP",
            "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
            "04 Go de RAM EXTENSIBLE à 16 GO",
            "Processeur Intel i5 ou i7(de la 2 -ème à la 8 -ème génération)",
        ],
        desc: "Ordinateurs complets avec écran 19 à 24\" disponibles Lenovo, HP et DELL selon stock\n" +
            "Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n " +
            "Mémoire Ram de 4 go extensible à 8 ou 16 go\n" +
            "Disque dur 250 go SATA extensible à 500go ou SSD 128 à 256 Go.\"" +
            "En Option :Wifi, Carte Graphique de 2 à 4 go\n" +
            "Windows 10 ou 11 Professionnel 64 bits, Office 2019 , Antivirus etc...  \"" +
            "prêt à l'emploi. Machines idéales pour tous travaux de bureau et d'internet ou de montage videos\n\"" +
            "Tous nos produits sont garantis",
    },
    {
        id: "p-5",
        name: "CORE I3 ,I5,I7 \" AVEC ECRAN 19 à 22 pouces",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "./IMG/CORE I3  I5 I7 AVEC ECRAN 19 à 22 pouces/1.jpg",
        details: [
            "D'Occasion",
            " Gris Noir",
              " HP",
                "250 à 500 Go SATA OU 128 à 256 SSD",
                  " 04 Go de RAM EXTENSIBLE à 16 GO",
                    "Processeur Intel i3",
        ],
        desc: "NOUS VENDONS DES ORDINATEURS COMPLETS\n" +
            "HP/DELL/LENOVO/ACER\n" +
            "PROCESSEUR: CORE I3 I5 I7\n" +
            "RAM: 4 EXTENSIBLE à 16 GO\n" +
            "DISQUE DUR: 250 à 500 GO SATA OU 128 à 256 SSD\n" +
            "ÉCRANS 19 POUCES à 24 POUCES\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-7",
        name: "ALL IN ONE 27 POUCES TACTILE CORE I7 13EME.32 GO.1TERA SSD",
        price: 900000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "./IMG/ALL IN ONE 27 POUCES TACTILE CORE I7 13EME 32 GO 1TERA SSD/1.jpg",
        details: [
            "Neuf",
            "Noir",
              "HP",
                  "1Téra SSD",
                   " 32 Go",
                       "Intel Core i7-13-ème",
        ],
        desc: "ALL IN ONE HP 27 POUCES TACTILE\n" +
            "CORE I7 13éme GENERATION\n" +
            "RAM A 32 GO\n" +
            "DISQUE DUR SSD 1 TERA\n" +
            "Ports\n" +
            "Arrière 1 port USB Type-C, vitesse de transfert 5 Gbit/s ; 2 ports USB Type-A, vitesse de transfert 5 Gbit/s ; 2 ports USB 2.0 Type-A; 1 prise combinée casque/microphone; 1 port RJ-45",
    },
    {
        id: "p-9",
        name: "CORE I5 AVEC 19 à 22 POUCES",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "ssd", "core i5", "écran 19 à 22 pouces"],
        image: "./IMG/ecran/CORE I3  I5 I7 AVEC ECRAN 19 à 22 pouces/3.jpg",
        details: [
            "D'Occasion",
            "Gris Noir",
             " HP",
             "250 à 500 Go SATA OU 128 à 256 SSD",
             "04 Go de RAM EXTENSIBLE à 08 GO",
                  "Intel i5",
        ],
        desc: "CORE I5 HP ACER LENOVO DELL EN DESKTOPS OU TOURS SELON STOCK\n" +
            "RAM 4GO EXTENSIBLE A 8GO\n" +
            "DISQUES DURS DE 250 à 500 Go SATA OU 128 à 256 SSD\n" +
            "ÉCRAN 19 à 22POUCES " +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-11",
        name: "HP ELITEBOOK 830 840 G6 I7 16Go/512SSD",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP ELITEBOOK 830 840 G6 I7 16Go512SSD/1.jpg",
        details: [
            "Réconditionné",
            "Gris Noir",
            "HP",
            "512 Go",
            "16 Go",
             "Intel i7",
            
        ],
        desc: "Ordinateur Portable EliteBook 830 OU 840 G6.I7\n" +
            "CORE I7 8 éme GENERATION\n" +
            "RAM 16 GO extensible à 32 Go\n" +
            "DISQUE :256SSD EXTENSIBLE A 512 GO\n" +
            "ECRAN 13.3 ou 14 POUCES FHD ou TACTILE"
    },
    {
        id: "p-13",// A revoir
        name: "HP X360 DELL TACTILE",
        price: 75000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
         image: "./IMG//HP X360 DELL TACTILE/1.jpg",
        details: [       
            "Réconditionné",
            "Rouge, NOir, Jaune, Grise, Bleu.....",
                 "HP",
                 " 128 SSD",
                   " 4 Go",
                    " Intel",
        ],
        desc: "Hp Probook x36011.6pouces G3 et Dell 3190. Disque dur 128 giga ssd.\n" +
            "Mémoire Ram 4giga. Ecran 11.6 Pouces convertible x360. Dell 3190 disponible avec 8go 256 ssd\n" +
            "Port type C,2usb, Rj45, support carte mémoire,hdmi,2port usb...\n" +
            "Tablette avec écran tactile en même temps très léger pour étudiants et professionnels",
    },
    {
        id: "p-15",
        name: "HP ELITEBOOK 840G6 I7",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i7", "16go", "512ssd", "14 pouces", "portable"],
        image: "./IMG/HP ELITEBOOK 840G6 I7/3.jfif",
        details: [
            "Reconditionné",
            "Gris, Noir",
            "HP",
             "512 SSD",
            "16 Go",
            "Intel i7"
        ],
        desc: "Ordinateur Portable EliteBook 840 G6 I7\n" +
            "CORE I7 8émE GENERATION\n" +
            "RAM 16GO\n" +
            "DISQUE 512GO SSD\n" +
            "ECRAN 14 POUCES\n" +
            "CLAVIER RETRO ECLAIRE",
    },
    {
        id: "p-17",
        name: "CORE I3 AVEC ECRAN 19 à 22 POUCES",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/CORE I3 AVEC ECRAN 19 à 22 POUCES/1.jpg",
        details: [
            "Processeur Intel i3",
            "RAM 4 Go",
            "Stockage 250GO SATA ou 128 GO SSD",
            "Marque HP",
            "Etat d'occasion",
            "Couleur : Gris, Noir"
        ],
        desc: "NOUS VENDONS DES CORE I3 HP EN TOUR OU DESKTOPS\n" +
            "SELON STOCK DISPONIBLES + ÉCRAN 19 POUCES.\n" +
            "RAM 4GO\n" +
            "DISQUE DUR 250 GO SATA OU 128 GO SSD\n" +
            "ÉCRANS 19 à 22 POUCES.\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-19",
        name: "Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces/1.jfif",
        details: [
           
         
            "D'occasion",
            "Noir",
            " HP",
               "250GO",
                 "RAM 4 Go extensible à 8 ou 16go",
                  "Intel Core i5 ou I7 de 2 ème à la 8 ème génération"
          

        ],
        desc: "Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces\n" +
            "DISPONIBLES EN HP DELL LENOVO ACER\n" +
            "PROCESSEUR Core i5 ou I7 de 2 ème à la 8 ème génération\n" +
            "Mémoire Ram 4 extensible à 8 ou 16go\n" +
            "Disque dur de 250 à 500 go ou SSD128 à 256 go. Wifi en option .\n" +
            "Windows 10 ou 11 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
            "Tout nos produits sont garantis\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-21",
        name: "ALL IN ONE HP NEUF 23.8\" I3 12éme",
        price: 450000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "i3", "12ème", "23.8 pouces", "8go", "256 ssd"],
        image: "./IMG/ALL IN ONE HP NEUF 23.8 I3 12éme/1.jpg",
        details: [
            "Neuf",
            "Noir",
             " HP",
             " 256GO",
              " 8 Go",
                   " Intel Core i3",
        ],
        desc: "Hp proOne ProOne 240 23.8 pouces G9 All in one\n" +
            "core i3 12éme gen /RAM 8Go extensible à 16 go, DISQUE DUR 256Go\n" +
            "SSD extensible à 512 go ECRAN 23.8POUCES",
    },
    {
        id: "p-23",
        name: "Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 \"TACTILE.",
        price: 125000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," probook", "i5", "8go", "256ssd", "15.6 pouces", "portable"],
        image: "./IMG/Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 TACTILE/2.jfif",
        details: [
            "HP",
            "Réconditionné",
            "Noir",
             "256GO",
              "8Go",
            "Intel Core i5",

        ],
        desc: "HP Probook 650 G3 Core i5 7 eme.8go.SSD 256go..Ecran 15.6 \"TACTILE.\n" +
            "Pavé numérique\n" +
            "Processeur : Intel Core i5 7 -ème Génération. .Vitesse de 2.5 à 3.5 GHz\n" +
            "Mémoire Vive : 8Go - DDR4/ A 16GO\n" +
            "Disque stockage : 256Go SSD A 512SSD\n" +
            "Carte graphique : Intel Graphics HD 520\n" +
            "Carte son : Oui - Enceintes + microphone\n" +
            "Réseau et Wifi : Intel Ethernet Connection I219-V (10/100/1000/2500/5000MBit/s), Intel Dual Band Wireless-AC 7265 (a/b/g/h/n = Wi-Fi 4/ac = Wi-Fi 5), Bluetooth 4.2\n" +
            "Webcam : Oui\n" +
            "Pavé numérique : Oui\n" +
            "Clavier avec pavé numérique\n" +
            "Ecran : 15.6poucesTACTILE 16:9, 1920 x 1080 pixel\n" +
            "Ports de connexion\n" +
            "3 USB 3.0 / 3.1 Gen1, 1 VGA, 1 DisplayPort, 1 Encoche de Sécurité Kensington, 1 Port Série, 1 Port pour Station d'accueil, Connectique audio: combo audio, Lecteur de cartes mémoires: SD, 1 Lecteur de cartes à puce, 1 Lecteur d'empreintes digitales, TPM 2.0\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-25",
        name: "HP ELITEBOOK 840 G3 I7 TACTILE",
        price: 160000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i7", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/PROMO 🔥🔥 HP ELITEBOOK 840 G3 I7 14'' TACTILE/1.jfif",
        details: [       
            "Reconditionné",
            "Gris",
            " HP",
            " 256 SSD",
            " 08 Go",
            " Intel i7",
        ],
        desc: "ORDINATEUR PORTABLE HP ELITEBOOK 840 G3 CORE I7\n" +
            "6éme GENERATION\n" +
            "RAM 8GO EXTENSIBLE A 16 GO\n" +
            "DISQUE DUR 256 SSD EXTENSIBLE A 512 GO\n" +
            "ECRAN TACTILE 14 POUCES\n" +
            "Windows 10 Pro 64Bit; Comprend 2 ports USB 3.1, USB Type-C, Display\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-27",
        name: "ORDINATEURS PORTABLE HP ELITEBOOK 840 G3 (PROMO🔥🔥🔥)",
        price: 125000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i5", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/ORDINATEURS PORTABLE HP ELITEBOOK 840 G3 (PROMO🔥🔥🔥)/4.jfif",
        details: [
            "Réconditionné",
            "Gris",
            "HP",
             "256 SSD",
              "08 Go",
            "Intel i5-6th Gen",

        ],
        desc: "SPÉCIAL PROMO ORDINATEURS PORTABLE 🔥🔥🔥🔥🔥\n" +
            "ORDINATEUR PORTABLE HP ELITEBOOK 840 G3\n\n" +
            "CORE I5 6éme Génération\n" +
            "RAM 8GO à 16GO\n" +
            "DISQUE DUR SSD 256go à 512GO OU PLUS\n" +
            "ÉCRAN 14 POUCES\n" +
            "CLAVIER RETRO ÉCLAIRE\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-29",
        name: "HP ELITEBOOK.840G8.I5",
        price: 270000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i5", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/HP ELITEBOOK.840G8.I5/2.jpg",
        details: [
            " Reconditionné",
            " Gris",
            " HP",
            " 256 SSD",
            " 08 Go",
            " Intel i5",
        ],
        desc: "HP ELITEBOOK 840 G8\n" +
            "Processeur Intel Core i5-1135G7 (Quad-Core 0.9 GHz - 2.4 GHz / 4.2 GHz Turbo - 8 Threads - Cache 8 Mo)\n" +
            "8 Go de mémoire DDR4 extensible à 16 Go\n" +
            "Disque dur 256ssd extensible à 512 go. Ecran de 14\" avec résolution Full HD (1920 x 1080)\n" +
            "CLAVIER RETRO ÉCLAIRE",
    },
    {
        id: "p-31",
        name: "GAMER HP ZBOOK 14U G6 I5",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," zbook", "i5", "16go", "512ssd", "14 pouces", "portable"],
        image: "./IMG/GAMER HP ZBOOK 14U G6 I5/1.jpg",
        details: [
            "Reconditionné",
            "Gris",
             "HP",
            " 512 SSD",
            " 16Go",
            " Intel i5",
        ],
        desc: "Ordinateur Portable GAMER HP ZBOOK 14U G6\n" +
            "CORE I5 8émE GENERATION\n" +
            "RAM : 16 GO EXTENSIBLE A 32GO\n" +
            "DISQUE : 512 GO SSD M2\n" +
            "ECRAN 14 POUCES\n" +
            "CARTE GRAPHIQUE DE 4 GO dédié GDDR5",
    },
    {
        id: "p-33",
        name: "HP Core I5+19 NEUF",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP Core I5+19 NEUF/1.jfif",
        details: [
            " Neuf",
            " Noir",
            " HP",
            " 512 SSD",
            " 8Go",
            " Intel i5",
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti\n" +
            "Pour toutes autres informations contactez moi si vous le souhaitez",
    },
    {
        id: "p-35",
        name: "HP Core I7+19 NEUF",
        price: 300000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP Core I7 neuf + 19/1.jfif",
        details: [
            " Neuf",
            "Noir",
            " HP",
            " 1Téra",
            " 8Go",
            " Intel i7"
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti\n" +
            "Pour toutes autres informations contactez moi si vous le souhaitez",
    },
    {
        id: "p-37",
        name: "Core 2.dual.+19",
        price: 40000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core 2 duo", "4go", "250go", "19 pouces", "desktop"],
        image: "./IMG/Core 2.dual.+19/1.jpg",
        details: [
            "D'Occasion",
            "Noir",
            " HP",
            " 250Go",
            " 4Go",
            " Core 2.dual.",
        ],
        desc: "Nous vendons des ordinateurs complets avec écran 19\" en HP.\n" +
            "dual core et core 2 2.80 à 3.20 ghz, 4 go de mémoire Ram , disque dur 250 go\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Machines puissantes idéales pour transfert d'argent, multi services et tous travaux de bureau et d'internet. \n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-39",
        name: "Ordinateur Core I5",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core i5", "4go", "500go", "19 pouces", "desktop"],
        image: "./IMG/Ordinateur Core I5/1.jfif",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "500Go",
            "4Go",
            "3.2 Core i5",
        ],
        desc: "Nous vendons des ordinateurs complets avec écran 19\" en Lenovo et Acer selon stock\n" +
            "Core i5 3.20 ghz, 4 go de mémoire Ram extensible à 8go , disque dur 500 go\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
            "Machines puissantes idéales pour transfère d'argent, multiservices et tous travaux de bureau et d'internet\n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-41",
        name: "HP Core I3 ordinateur complet",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core i3", "4go", "250go", "19 pouces", "desktop"],
        image: "./IMG/HP Core I3 ordinateur complet/1.jpg",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "250Go",
            "4Go",
            "Core i3",
        ],
        desc: "Ensembles complets HP en desktop.Core i3 -/Mémoire RAM 4go/\n" +
            "Disque 250Go/Écran (19\") . DVDRW - Option Wifi\n" +
            "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc.\n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-102",
        name: "GAMER +24 POUCES.16go.2go graphique\n",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Dell",
        tags: ["desktop", "dell", "windows"],
        image: "./IMG/GAMER +24 POUCES.16go.2go graphique/1.jpg",
        details: [
            "Réconditionné",
            "Noir",
            "Dell",
            "500Go",
            "16Go",
            "Intel XEON"
        ],
        desc: "DIPONIBLE EN Dell ET HP Z400,Z420\n" +
            "Processeur :Intel XEON Mémoire Vive : 16Go\n" +
            "Disque dur : (1 x 500 Go) ou (1xssd 256go).\n" +
            "Carte graphique Nvidia (2 go dedié) graveur DVDRW.+ Ecran 24 pouces",
    },
    {
        id: "p-104",
        name: "Dell Wyse 5470 ALL IN ONE.24 POUCES FHD",
        price: 90000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Dell",
        tags: ["All in one", "desktop", "dell", "windows"],
        image: "./IMG/Dell Wyse 5470 ALL IN ONE.24 POUCES FHD/3" +
            ".jpg",
        details:["D'occasion","NOIR","dell","128 SSD","8GO","intel J4005",],
        desc:"Modèle : Dell Wyse 5470 ALL IN ONE\n" +
            "Ecran de 24 Pouces Full HD Resolution 1920 x 1080\n" +
            "Processeur : intel J4005 CPU de 2.0 à 2.7 Ghz (supérieur au Core I3 de 3 ème génération )\n" +
            "Mémoire RAM : 08 Go extensible à 16Go\n"+
            "Disque dur : SSD M2 de 128 go extensible 256 Go\n"+
            "Système d'exploitation : Windows 10 ou 11 Professionnel 64\n" +
            "Microsoft Office 2019\n"+
            "Tous les utilitaires Acrobat etc\n" +
            "Clavier + souris\n" +
            "A PARTIR DU PRIX INDIQUE"
    },
    {
        id: "p-106",
        name: "Ordinateur Core i3",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Acer",
        tags: ["desktop", "acer", "windows"],
        image: "./IMG/Ordinateur Core i3/1.jpg",
        details:["D'occasion","NOIR","acer","250 Go","4GO","Core i3",],
        desc:"Ensembles complets Lenovo, HP ou Acer en desktop\n" +
            "Core i3 - Processeur 3.10ghz/Mémoire RAM 4go/ Disque 250Go/Écran (19\")\n" +
            "DVDRW - Option Wifi\n" +
            "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc\n"+
            "Tous nos produits sont garantis."
    },


  // Infrastructure - 1 produit
  {
    id: "p-43",
    name: "Modem Router TP-Link",
    price: 18000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Routeurs",
    brand: "TP-Link",
    tags: ["modem", "router", "access point"],
            image: "./IMG/Modem Router et Access point/1.jfif",

      details:["Neuf", "Blanc", "TP-Link"],
    desc: "TP LINK 150Mbps wireless N ADSL2+ Modem Router\n" +
        "APARTIR DU PRIX INDIQUER CI DESSUS",
  },
  // Peripherals - 28 produits
  {
    id: "p-36",
    name: "HP COLOR LASER JET MFP 277",
    price: 150000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "HP", "multifonction", "couleur", "imprimante"],
    image: "./IMG/HP COLOR LASER JET MFP 277/1.jpg",
    desc: "Nous vendons des imprimantes avec les spécifications suivantes :\n"
         + "Marque HP séries Laserjet PRO M 277  n,\n"
         + "dn ou dw Couleur Blanche\n"
         + "out-en-un Laser couleur selon stock\n"
         + "Impression, copie, scan et télécopie + réseau et recto-verso",

    details: [
    
      "Réconditionné", 
        "Blanc",
        "HP"
    ]
  },
   {
    id: "p-38",
    name: "PHOTOCOPIEURS CANON RICOH XEROX",
    price: 450000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Canon",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/PHOTOCOPIEURS CANON RICOH XEROX/1.webp",
    desc: "PHOTOCOPIEURS MULTIFONCTIONS LASER NOIR\n"
         + "CANON IRC ADAVANCE 400 NOIR ET BLANC,\n"
         + "dn ou dw Couleur Blanche\n"
         + "SCANNER, COPIEUR, IMPRIMANTE (RECTO-VERSO)\n"
         + "1°) CANON IRC ADAVANCE 5030 COULEUR ET NB.VITESSE DE 30PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
           + "2°) CANON IRC ADAVANCE 5250 COULEUR ET NB.VITESSE DE 50PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO).\n"
             + "3°) RICOH MPC 3002, 3003: COULEUR ET NB.VITESSE DE 30PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
               + "4°) RICOH MPC 3502, 3503: COULEUR ET NB.VITESSE DE 35PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
                 + "5°) RICOH MPC 4502: COULEUR ET NB.VITESSE DE 45PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
                 + "6°) XEROX WORKCENTRE 7855 COULEUR ET NB.VITESSE DE 55PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO).\n",


    details: [
      "Réconditionné", 
      "Noir/Blanc",
      
    ]
  },
    {
    id: "p-40",
    name: "Imprimante laser monochrome",// a REVOIR
    price: 70000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Canon",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Imprimante laser monochrome/1.webp",
    desc: "Vitesse d'impression (noir, A4) 40 ppm\n"
         + "Format de papier A4,\n"
         + "Recto/verso automatique\n"
         + "Écran LCD N&B\n"
         + "Vitesse d'impression 1ère page monochrome 5 s\n"
           + "Cycle d'utilisation mensuel conseillé (min.)3000 pages / mois\n"
             + "Cycle d'utilisation mensuel conseillé (max.) 10000 pages / mois\n"
               + "Résolution d'impression monochrome (Maximum) 1200 x 1200 ppp\n",


    details: [
      "Réconditionné", 
       "Blanc",
    ]
  },
  {
    id: "p-42",
    name: "ECRAN DELL DE 22 à 24 pouces AVEC POSSIBILITE HDMI",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["écran", "dell", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN DELL DE 22 à 24 pouces  AVEC POSSIBILITE HDMI/1.webp",
    desc: "NOUS VENDONS DES ECRAN DE 22 à 24 POUCES EN DELL\n"
         + "AVEC PORT VGA ET DVI\n"
         + " POSSIBILITÉ DE LE METTRE SOUS HDMI AVEC ADAPTATEUR \n"
         + "HDMI VGA OU\n"
         + "DVI HDMI POUR UN PETIT SUPPLÉMENT\n"
           + "A PARTIR DU PRIX INDIQUE",
    details: [
      
      "Réconditionné",
      "Noir Gris",
      "Dell"
    ]
  },
 {
    id: "p-44",
    name: "CHARGEUR HP DELL LENOVO ORDINATEUR PORTABLE",
    price: 10000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: ["chargeur", "dell", "hp", "lenovo", "ordinateur portable", "accessoire",],
    image: "./IMG/CHARGEUR HP DELL LENOVO ORDINATEUR PORTABLE/3.jpg",
    desc: "NOUS VENDONS DES CHARGEURS\n"
         + " POUR TOUS TYPES ORDINATEURS PORTABLES :\n"
         + " DELL 19.5V 4.62 ORIGINAL DELL ETC...\n"
         + "DELL 19.5V 6.7 ORIGINAL DELL ETC...\n"
         + "HP 19.5V 3.33, 2.31 TETE BLEU ETC...\n"
           + " LENOVO 20V 2.5, 3.5 , 4.5A ETC...",
             
         
    details: [
      "Neuf",
      "Noir",
      "HP, Dell, Lenovo"
    ]
  },

 {
    id: "p-48",
    name: "ECRAN DELL P2422H HDMI",
    price: 150000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["écran", "dell", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN DELL P2422H HDMI/1.jpg",
    desc: "ECRAN DELL P2422H\n"
         + "Écran LCD à rétroéclairage LED 24\n"
         + "Full HD (1080p) 1920 x 1080 à 60 Hz\n"
         + "DisplayPort 1.2 (HDCP 1.4)\n"
         + "VGA\n"
         + "HDMI (HDCP 1.4)\n"
         + "USB 3.2 montant de génération 1\n"
           + "4 x USB 3.2 descendant de génération 1",
    details: [
      "Neuf",
      "Noir",
      "Dell",
    
    ]
  },
  {
   id: "p-50",
    name: "ONDULEUR JC TECH.MERCURY 850VA",
    price: 30000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Mercury",
    tags: ["onduleur", "ups", "jc tech", "mercury"],
    image: "./IMG/ONDEULEUR JC TECH.MERCURY 850VA/3.jfif",
    desc: "Caractéristiques techniques 850 VA\n"+
         + "MARQUES DISPONIBLES: JC TECH.MERCURY LIGHTWAVE SELON STOCK\n"+
         + "Type: interactive;\n"
         + "Puissance: 850 VA;\n"
         + "Onde de sortie: vitesse d'approximation d'une onde sinusoïdale;\n"
         + "Le temps de transfert de la batterie: 8 MS;\n"
         + "Le nombre de sortie connecteurs d'alimentation: 3 (d'eux à piles - 2);\n"
           + "Type de sortie connecteurs d'alimentation: IEC 320 C13 (l'ordinateur);\n"
         + "Entrée / Sortie\n"
         + "Entrée: 1-tension de phase;\n"
         + "Sortie: 1-tension de phase;\n"
         + "Tension d'entrée: 140 - 285;\n"
           + "Facteur de puissance: 0.6;\n"
            + "Les fonctionnalités\n"
           + "Affichage de l'information: indicateurs led;\n"
         + "Alarme sonore: oui;\n"
         + "Démarrage à froid: oui;\n"
         + "Protection contre les impulsions à haute tension: oui;\n"
         + "Filtrage de bruit: oui;\n"
         + "Protection de court-circuit: oui;\n"
         + "Protection de surcharge: oui;\n",
    details: [
      "Neuf",
      "Noir",
   
    ]
  },
  {
    id: "p-52",
    name: "ECRAN HDMI 24 POUCES",
    price: 45000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Asus",
    tags: ["écran", "asus", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN HDMI 24 POUCES/2.jpg",
    desc: "ECRAN ASUS VS247HR\n"
         + "Diagonale : 23.6 (60 cm)\n"
         + "Écran LCD à rétroéclairage LED\n"
         + "Format : 1920 x 1080 (Wide) / 16:9\n"
         + "Dalle TFT • 2 ms\n"
         + "Réglage socle : Inclinaison\n"
         + "Connectiques vidéo principales :\n"
            + "HDMI • DVI-D • VGA\n"
         + "Rétroéclairage :\n"
         + "LED (LCD LED)\n"
         + "Aspect (ratio): 16:9\n"
         + "Diagonale: 23.6 (60 cm)\n"
         + "Pas de pixel (pitch): 0.272 mm\n"

         + "Définition / Fréquence max \n"
         + "1920 x 1080 (Format Wide)\n"
         + "Temps de réponse :\n"
         + "2 ms (GTG / Gris à gris)\n"
         + "Luminosité :\n"
           + "250 cd/m² (typique)\n"
         + "Taux de contraste :\n"

         + "50 000 000 : 1 (dynamique/max)\n"
         + "Couleurs :\n"
         + "16.70 millions\n"
         + "Angles de vision H/V\n"
         + "170° / 160°\n",
    details: [
      "Réconditionné",
      "Noir",
      "Asus",
      
    ]
  },
   {
    id: "p-54",
    name: "ECRAN HP 22 POUCES Full HD HDMI",
    price: 145000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "HP",
    tags: ["écran", "HP", "22 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN HP 22 POUCES Full HD HDMI/1.jpg",
    desc: "NOUS VENDONS DES ÉCRANS HP 22 POUCES HDMI FULL HD.\n",
    details: [
      "Neuf",
      "Noir",
      "HP",
      
    ]
  },
   {
    id: "p-58",
    name: "IMPRIMANTE LASER COULEUR HP MFP M480",
    price: 350000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/IMPRIMANTE LASER COULEUR HP MFP M480/1.jfif",
    desc: "Technologie d'impression:Laser\n"
         + "Impression:Impression couleur,\n"
         + "Résolution maximale:600 x 600 DPI\n"
         + "Vitesse d'impression (couleur, qualité normale, A4/US Letter):29 ppm.\n"
         + "Copie:Copie couleur, Résolution maximale de copie:600 x 600 DPI.\n"
           + "Numérisation:Numérisation couleur, Résolution optique du scanner:600 x 600 DPI\n"
             + "Envoi par fax:Fax couleur\n"
             + "RImpression directe.\n"
         + "Couleur du produit:Blanc, Noir.\n"
         + "Spécifications:\n"
         + "-Système d'exploitation Windows pris en charge:Oui.\n"
           + "-Système d'exploitation MAC pris en charge:Oui.\n"
             + "-Impression directe:Oui.\n",


    details: [
      "Réconditionné", 
      "Blanc",
      
    ]
  },
     {
    id: "p-60",
    name: "Imprimante HP laser 1102",
    price: 60000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Imprimante HP laser 1102/1.jpg",
    desc: "IMPRIMANTE LASER 1102\n"
         + "Imprimante laser monochrome A4 - 600 x 600 ppp,\n"
         + "18 ppm - 2 Mo de RAM\n"
         + " Processeur 266 MHz \n"
          + "USB 2.0 \n"
         + " Compatible PC et Mac\n"
             + " Bac d'alimentation 150 feuilles\n",


    details: [
      "Venant", 
      "Blanc",
     
    ]
  },
     {
    id: "p-62",
    name: "UNITE CENTRALE HP DELL",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Unité centrale",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/UNITE CENTRALE HP DELL/1.jfif",
    desc: "Nous vendons des UC : \n"
         + "HP DESKTOP OU DELL TOUR (selon stock):\n"
         + "INTEL ,DUAL CORE OU CORE 2. 4 go de mémoire Ram , disque dur 250Go",

    details: [
      "Venant", 
    ]
  },
    {
    id: "p-64",
    name: "BOITE D'ALIMENTATION PC",
    price: 5000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "BOITE D'ALIMENTATION PC",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/BOITE D'ALIMENTATION PC/1.jpg",
    desc: "Vente de Boite D'alimentation modèle: \n"
         + "HP, DELL, LENOVO, IBM etc...\n"
         + "A partir du prix indiqué dessus (standard ou spécifique)",

    details: [
      "Réconditionné", 
    ]
  },
    {
        id: "p-96",
        name: "BOITE D'ALIMENTATION HX520W",
        price: 30000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "BOITE D'ALIMENTATION PC",
        brand: "CORSAIR",
        tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
        image: "./IMG/BOITE D'ALIMENTATION PC/6.jpg",
        desc: "HX 520W, affiche une puissance de 480W pour le +12V réparti en 3 rails de 18A l'un.\n"
            + "La modularité est assurée par 2 prises destinées à 2 câbles PCI-Express\n"
            + "6/8 broches, suivies de 5 prises pour : 1 câble à 2 Molex, 2 câbles à 3 Molex, 2 câbles à 2 SATA.\n"
            + "Sont également fournis un adaptateur Molex vers 2 Molex,\n"
            + "pour les ventilateurs (+12V seulement) et un adaptateur Molex vers 2 Floppy.\n" +
            "\n",

        details: [
            "Réconditionné",
            "Noir"
        ]
    },
   {
    id: "p-66",
    name: "A+B SUBWOOFER YG-USB11",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "YG-USB11",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/A+B SUBWOOFER YG-USB11/1.jpg",
    desc: "A+B YG-USB est un centre de musique autonome,  \n"
         + " il peut être lire des fichiers depuis un lecteur flash USB,\n"
         + "depuis une carte mémoire SD et possède un tuner FM intégré il ya une télécommande aussi, "
          + "Le système 2.1 A+B 2.1,\n"
         + "YG-USB11 est un acoustique provenant de 2 enceintes satellites et d'un subwoofer "
           + " avec lecteur multimédia intégré,\n"
         + "Le système peut être connecté à un ordinateur, "
          + "un téléphone ou une autre source sonore.\n",


    details: [
      "Neuf", 
    ]
  },
   {
    id: "p-68",
    name: "Clavier et Souris sans fil",
    price: 10000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Clavier et Souris sans fil/1.jpg",
    desc: "Je vend des Claviers et souris sans fil marque :   \n"
         + "HP, WIRELESS etc...\n"
          + "A partir du prix indiqué dessus \n",
    details: [
      "Neuf", 
    ]
  },
   {
    id: "p-70",
    name: "VIDEO PROJECTEUR EPSON",
    price: 325000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Projecteurs",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/VIDEO PROJECTEUR EPSON/1.jpg",
    desc: " Vivez l'expérience du grand écran:    \n"
         + "Des décors aux présentations professionnelles, captez l'attention de tous.\n"
         +  "Des images lumineuses même dans des conditions de lumière ambiante.\n"
         + "Niveaux de luminosités blanche et couleur équivalents de 3 200 lumens\n"
         + "Équipement haute technologie à un prix attractif\n"
         + " Profitez de ce projecteur SVGA • Portable et rapide à installer\n"
          + "Alignement facile grâce au curseur de correction du trapèze.\n",
    details: [
      "Neuf", 
    ]
  },
  {
   id: "p-72",
    name: "HP Color LaserJet Pro MFP M283fdw",
    price: 375000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/HP Color LaserJet Pro MFP M283fdw/1.jfif",
    desc: "HP Color LaserJet Pro M283fdw Imprimante laser couleur \n"
         + " multifonction format A4, vitesse d'impression jusqu'à 21 pages par minute,\n"
         +  "résolution d'impression de 600 x 600 dpi, impression recto/verso automatique, résolution en Scan de 1200 dpi,\n"
         + "capacité papier de 251 Feuilles, \n"
         + " connexion Gigabit Ethernet, réseau sans-fil, HP ePrint, Wi-Fi Direct.\n",
    details: [
      "Neuf", 
    ]
  },
  {
   id: "p-74",
    name: "Onduleur LW UPS 1000VA",
    price: 40000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Lightwave",
    tags: ["onduleur", "ups", "jc tech", "mercury", "lightwave"],
    image: "./IMG/Onduleur LW UPS 1000VA/1.jpg",
    desc: "Ligth Wave UPS 1000VA LCD 230V \n"+
         + "Capacité de l'alimentation de sortie 670 Watts / 1000 VA\n"+
         + "Puissance configurable max 670 Watts / 1000 VA\n"
         + "Tension nominale de sortie 230V \n"
         + "Voltage nominal en entrée 230V \n"
         + "Fréquence d'entrée 50/60 Hz +/- 3 Hz\n",
    details: [
      "Neuf",
      "Noir",
      
   
    ]
  },
  {
   id: "p-76",
    name: "CASQUE POUR GAMER",
    price: 65000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HyperX",
    tags: ["casque", "gamer", "hyperx", "audio", "headset", "pc", "ordinateur", "gaming", "jeu", "multimedia", "son", "microphone", "confort", "durable", "high performance", "surround sound", "noise cancelling", "wired headset", "over ear", "gaming accessories"],
    image: "./IMG/CASQUE POUR GAMER/1.jpg",
    desc: "HYPERX CLOUD ALPHA OU STINGER \n"+
         + "Technologie de connectivité Filaire\n"+
         + "Technologie de communication sans fil Sans-fil\n"
         + "Caractéristique spéciale Fonction microphone\n"
         + "Composants inclus HyperX Cloud Alpha\n"
          + "Technologie de connectivité Filaire\n"+
         + "Tranche d'âge (description) Adulte. Matériau Aluminium\n"
         + "Compatible avec PC, PS5, PS4, Xbox One, Xbox Series X|S et d'autres plateformes avec un port de 3,5 mm\n"
         + "Les transducteurs à chambre double HyperX génèrent un son cristallin et moins de distorsions acoustiques Niveau de pression acoustique : 98dBSPL/mW à 1kHz\n"
         + "Confort certifié par Discord et TeamSpeak\n"

          + "Cadre aluminium durable avec arceau élargi\n"
         + "Câble tressé amovible avec commandes audio en ligne\n"
          + "Microphone amovible à réduction de bruit. Impédance: 65 Ω\n"+
         + "Réponse en fréquence : 50Hz-18,000Hz\n"
         + "Le Cloud Alpha disposant d'un câble détachable,\n"
          + " il est également important de s'assurer que ce dernier est complètement\n"
          + " inséré dans l'oreillette du casque \n"+
         + "Aucune partie grise sur la prise jack ne doit être visible une fois le câble branché\n",
    details: [
    
      "Neuf",
      "Rouge Noir",
   
    ]
  },
    {
        id: "p-94",
        name: "IMPRIMANTE HP RE CONDITIONNÉE",
        price: 50000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Imprimantes",
        brand: "HP",
        tags: ["imprimante", "hp", "reconditionnée", "impression", "bureau", "pmc", "a4", "usb", "150 feuilles", "100 feuilles", "8 000 pages"],
        image: "./IMG/IMPRIMANTE HP RE CONDITIONNÉE/img.jpg",
        desc: "IMPRIMANTE hp \n"
            + "Idéale pour le bureau à domicile et les PME\n"
            + "Fonction : impression\n"
            + "Formats : A4 ; A5 ; A6 ; Enveloppes (C5, DL) ; Personnalisé\n"
            + "Port USB 2.0 haut débit\n"
            + "Cycle d'utilisation (mensuel - A4) : jusqu'à 8 000 pages\n"
            + "Capacité d'alimentation de 150 feuilles, capacité de sortie de 100 feuilles",
        details: [

            "Réconditionné",
            "Noir, Blanc",

        ]
    },
    {
        id: "p-98",
        name: "ECRAN HP DELL 19\" CARRE ET RECTANGLE\n",// A REVOIR
        price: 15000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Écrans",
        brand: "Dell",
        tags: ["écran", "dell", "19 pouces", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
        image: "./IMG/ecran/ECRAN HP DELL 19 CARRE ET RECTANGLE 1/ECRAN HP DELL 19 CARRE ET RECTANGLE 2.jpg",
        desc: "NOUS VENDONS DES ECRANS 19 POUCES CARRES ET RECTANGLLES\n"
            + "DISPONIBLE EN HP LENOVO ACER DELL SELON STOCKS.",
        details: [
            "D'occasion",
            "Gris, Noir",

        ]
    },
    {
        id: "p-100",
        name: "ECRAN 19 POUCES ,20\",22\", 24 DELL ou HP",// A REVOIR
        price: 15000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Écrans",
        brand: "HP",
        tags: ["écran", "hp", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
        image: "./IMG/ecran/ECRAN 19 POUCES 20 22 24 DELL ou HP/1.jpg",
        desc: "NOUS VENDONS DES ÉCRANS de 19 POUCES RECTANGLES(LARGE)\n"
            + "DISPONIBLES AUSSI EN 20\"22\" 24\" DELL OU HP SELON STOCKS\n"
            + "A PARTIR DU PRIX INDIQUE",
        details: [

            "D'occasion",
            "Noir Gris",
            "hp",
        ]
    },
    {
        id: "p-108",
        name: "Régulateur 1kva\n",
        price: 20000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Régulateurs",
        brand: "LIGHTWAVE",
        tags: ["régulateur", "stabilisateur", "lightwave", "jc tech", "mercury"],
        image: "./IMG/Régulateur 1 et 2kva/1.jfif",
        desc: "CARACTÉRISTIQUES:" +
            "Entrée: 140 ~ 260 Vac\n"
            + "Sortie: 220/110 Vac\n"
            + "Fréquence: 50/60 Hz\n"
            + "Affichage: électrique Puissance: 1000 VA\n"
            + "Délai: 3 ~ 5 secondes / 2 ~ 3 minutes\n"
            + "Type: régulateur de tension automatique\n" +
            "Régulateur automatique de tension 1KVA Light Wave\n",


        details: [
            "Neuf",
            "Noir",
            "HP, Dell, Lenovo"
        ]
    },
    {
        id: "p-110",
        name: "Régulateur 2kva\n",
        price: 20000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Régulateurs",
        brand: "LIGHTWAVE",
        tags: ["régulateur", "stabilisateur", "lightwave", "jc tech", "mercury"],
        image: "./IMG/Régulateur 1 et 2kva/2.jfif",
        desc: "CARACTÉRISTIQUES:" +
            "Entrée: 140 ~ 260 Vac\n"
            + "Sortie: 220/110 Vac\n"
            + "Fréquence: 50/60 Hz\n"
            + "Affichage: électrique Puissance: 2000 VA\n"
            + "Délai: 3 ~ 5 secondes / 2 ~ 3 minutes\n"
            + "Type: régulateur de tension automatique\n" +
            "Régulateur automatique de tension 2KVA Light Wave\n",


        details: [
            "Neuf",
            "Noir",
            "HP, Dell, Lenovo"
        ]
    },
    {
        id: "p-112",
        name: "TONER CANON CEXV 21\n",
        price: 25000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Accessoires",
        brand: "CANON",
        tags: ["toner", "canon", "imprimante", "accessoire", "photocopieur","ricoh","xerox"],
        image: "./IMG/TONER CANON CEXV 21/1.jfif",
        desc: "Fabricant:Toner Canon CEXV 21 disponibles en Noir et toutes les couleurs.\n"
            + "Référence:image RUNNER- C2550/ C 2550 I/C 2880/C2880 I/C 3080/C3080 I/C 3380/C3380 I/ C 3480/C 3480 I. IR-C 2380 I/ C2550/ C2550 I/C 2880/C2880 I/C 3080/C 3080 I/ C3380/ C 3380 I/ C 3480/C 3480 I/C 3580/C3580 I.\n" +
            "\n",

        details: [
            "Neuf",
        ]
    },
  // Storage - 6 produits
  {
    id: "p-78",
    name: "DISQUE DUR INTERNE 1TERA",
    price: 75000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "XLR8",
    tags: ["ssd", "1tera", "interne", "m2", "boitier",  "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal storage",  "m.2 ssd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/DISQUE DUR INTERNE 1TERA/1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "NOUS VENDONS DES DISQUES DUR INTERNE 1TERA M2.\n"
         + "NOUS VENDONS ÉGALEMENT DES BOITIERS EXTERNES POUR DISQUE DUR M2\n",
  },
    {
    id: "p-80",
    name: "DISQUE DUR EXTERNE SATA WESTERN DIGITAL NEUF",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques externes",
    brand: "WD",
    tags: ["externe", "500go", "usb3", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "external storage",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming hdd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./images/stockage/disk1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "NOUS VENDONS DES DISQUES DURS NEUFS EXTERNES SATA DE 500GO WESTERN DIGITAL.\n",
  },
   {
    id: "p-82",
    name: "BARRETTE PORTABLE8, 16 et 32GO DDR4",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "RAM",
    brand: "Crucial",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/BARRETTE PORTABLE8, 16 et 32GO DDR4/1.jpg",
    details: [
      "Neuf",
      "Vert",
    ],
    desc: "Nous vendons des barrettes portables\n"
         + "8 go DDR4 2666MHZ à 15000 fcfa\n"
         + "8 go DDR4 2666MHZ à 60.000 fcfa\n"
          + "8 go DDR4 2666MHZ à 30000 fcfa\n",
  },
   {
    id: "p-84",
    name: "ADAPTATEUR APHA 11en1",
    price: 20000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "WIWU",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/ADAPTATEUR APHA 11en1/1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "Adaptateur Multi Fonction:\n"
          + " Le Hub USB-C Alpha 11 en 1 transforme le port USB-C de votre ordinateur en hub de connexion pour tous vos appareils électroniques (moniteur, disque dur, cartes SD, enceintes audio, etc.)..\n",
  },
   {
    id: "p-86",
    name: "CARTE GRAPHIQUE 2GO",
    price: 20000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "RoHS",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/CARTE GRAPHIQUE 2GO/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Mémoire vive de la carte graphique 2 Go\n"
           + " Type de mémoire vive (carte graphique) GDDR 5\n"
            + "PCI Express. Nombre de ports VGA ou DISPLAY\n",
  },
    {
    id: "p-88",
    name: "Disque SSD Interne et Sata Interne",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "GX2",
    tags: ["ssd", "sata", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal ssd",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/Disque SSD Interne et Sata Interne/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Nous vendons des disques durs: \n"
          + "SATA et SSD internes et externes\n"
           + "Neufs et d'occasions de 256go,500 512,1tera, 2 et 4 tera\n",
  },
   {
    id: "p-90",
    name: "CLES USB ET CARTE MEMOIRE MICRO SD DE 2GO A 32 GIGA.",
    price: 2500,
    stock: "En stock",
    category: "storage",
    subcategory: "Clé USB",
    brand: "MicroSD Cards",
    tags: ["ssd", "sata", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal ssd",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/CLES USB ET CARTE MEMOIRE MICRO SD DE 2GO A 32 GIGA/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Clés usb de 2,4 ,8,16,32giga.\n"
          + "Carte mémoire de 2,4 ,8,16,32giga à partir du prix indiqués ci-dessous.\n"
           + "Possibilité de livraison\n",
  },
 
  // Network - 6 produits
  {
    id: "p-92",
    name: "CABLE DE SECURITE POUR ORDINATEUR PORTABLE",
    price: 15000,
    stock: "En stock",
    category: "network",
    subcategory: "Sécurite",
    brand: "cable",
    tags: ["cable","Sécurité","ordinateur"],
    image: "./IMG/CABLE DE SECURITE POUR ORDINATEUR PORTABLE/1.jpg",
    desc:"Câble de sécurité antivol pour ordinateur plusieurs types de portables\n"
  +"Il existe désormais un câble antivol à combinaison qui fait tout. \n"+
  " Le verrou universel pour ordinateur portable à combinaison 3 en 1 \n"+
  "s'adapte à n'importe quel emplacement de sécurité pour ordinateur portable \n"+
  " standard naro et en forma de coin \n"+
  " aidant à \" protéger l'avenir\" de votre solution de verrouillage cadran\n"+
  " rénitialisable à 4 chiffres avec 10 000 combinaisons possibles et câble en acier au carbone \n"+
  " offrant une sécurité renforcée contre les tentatives de vol. Les fonctionnalités.",
    details:["Neuf","Noir"]
  },




  // Applications avec licences et antivirus - 6 produits
   {
    id: "p-49",
    name: "LICENCE MICROSOFT OFFICE 2019",
    price: 45000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
      subcategory: "Office 19 actif",
      brand: "Microsoft",
      tags: ["windows", "licence", "office", "word", "excel", "powerpoint"],
      image: "./IMG/LICENECE MICROSOFT OFFICE 2019/2.jfif",
      details: ["Neuf", "Gris", "Microsoft"],
      desc: "NOUS VENDONS DES LICENCES MICROSOFT OFFICE 2019 (1)POSTE\n"
          + "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE."
  },
  {
    id: "p-47",
    name: "Windows 11 Pro Licence activation À Vie",
    price: 20000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Windows 11 pro",
    brand: "Microsoft",
    tags: ["windows", "licence"],
    image: "./IMG/Windows 11 Pro Licence activation À Vie/1.jfif",
      details: ["Neuf", "Gris, Noir", "Microsoft"],
      desc: "Produit Windows 11 Pro officiel\n"
         + "Microsoft Online Update.\n"
         + "Prend en charge l'allemand, l'anglais, l'italien, le français, le japonais, l'espagnol, le russe, etc.\n"
         + "Compatible avec les versions 32 et 64 bits\n"
         + "1 clé pour un seul PC. 1 clé Windows 11 Pro pour un ordinateur."
  },
 
    {
        id: "p-51",
        name: "LICENCE WINDOWS 10 PROFESSIONNEL",
        price: 15000,
        stock: "En stock",
        category: "applications avec licences et antivirus",
        subcategory: "Windows 10 pro",
        brand: "Microsoft",
        tags: ["windows", "licence"],
        image: "./IMG/LICENCE WINDOWS 10 PROFESSIONNEL/1.jfif",
        details: ["Neuf", "Gris", "Microsoft"],
        desc: "NOUS VENDONS DES LICENCES WINDOWS 10 PROFESSIONNEL POUR UN (1) POSTE.\n"
            + "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE."
    },
];

export const PRICE_MIN = 5000;
export const PRICE_MAX = 2500000;

// Build a UI-friendly categories array used by components
export type UiProduct = {
  name: string;
  price: string;
  stock: string;
};

export type UiCategory = {
  key: CategoryKey;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  products: UiProduct[];
  image: string;
};

function formatPrice(num: number) {
  return `À partir de ${num.toLocaleString("fr-FR")} FCFA`;
}

export const PRODUCT_CATEGORIES: UiCategory[] = CATEGORIES.map((cat) => {
  const productsInCat = PRODUCTS.filter((p) => p.category === cat.key);

  // Group by subcategory and pick representative price/stock/image
  const grouped = new Map<string, { price: number; stock: string; image: string }>();
  productsInCat.forEach((p) => {
    const existing = grouped.get(p.subcategory);
    if (!existing) {
      grouped.set(p.subcategory, { price: p.price, stock: p.stock, image: p.image });
    } else {
      // keep min price as "À partir de"
      if (p.price < existing.price) existing.price = p.price;
      // prefer 'En stock' if any
      if (existing.stock !== "En stock" && p.stock === "En stock") existing.stock = p.stock;
    }
  });

  const uiProducts: UiProduct[] = Array.from(grouped.entries()).slice(0, 8).map(([sub, v]) => ({
    name: sub,
    price: formatPrice(v.price),
    stock: v.stock,
  }));

  return {
    key: cat.key,
    title: cat.label,
    description: `${cat.label} — ${cat.subcategories.slice(0, 3).join(", ")}`,
    icon: cat.icon,
    colorClass: cat.colorClass,
    products: uiProducts,
    image: productsInCat[0]?.image ?? "https://images.unsplash.com/photo-1508747703725-7191d23b3b1b?q=80&w=1200&auto=format&fit=crop",
  };
});