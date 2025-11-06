import {
  LucideIcon,
  Monitor,
  Server,
  Printer,
  Smartphone,
  HardDrive,
  Wifi,
} from "lucide-react";

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
    subcategories: ["Ordinateurs de bureau", "Laptops", "Mini PC"],
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
    subcategories: [
      "Imprimantes",
      "Photocopieurs",
      "Écrans",
      "Accessoires",
      "onduleurs",
      "BOITE D'ALIMENTATION PC",
    ],
  },
  {
    key: "storage",
    label: "Stockage & Mémoire",
    icon: HardDrive,
    colorClass: "text-orange-600",
    subcategories: [
      "SSD",
      "Disques externes",
      "RAM",
      "Disques internes",
      "Cartes graphiques",
      "Clé USB",
      "Adaptateur",
    ],
  },
  {
    key: "network",
    label: "Réseaux & Sécurité",
    icon: Wifi,
    colorClass: "text-teal-600",
    subcategories: ["Wi‑Fi", "Firewalls", "Caméras IP", "fibres", "Switches"],
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
    details: [
      "D'occasion",
      "NOIR",
      "Acer",
      "250 GO SATA OU SSD 128 GO",
      "4GO",
      "3.20ghz",
    ],
    tags: ["bureau", "occasion", "acer", "desktop"],
    image: "./IMG/CORE I5.4GO.250GO.19/1.jpg",
    desc:
      " Dell 3190\n" +
      'Ordinateurs complets avec écran 19" en HP LENOVO DELL ET ACER' +
      "\n" +
      "Mémoire Ram 4giga\n" +
      "Core i5 3.20 ghz, 4 go de mémoire Ram extensible à 8go\n" +
      "disque dur 250 go sata ou 128 go ssd extensible à 500go sata ou 256 go ssd\n" +
      "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
      "Machines puissantes idéales pour transfert d'argent, multidevises et tous travaux de bureau et d'internet.\n" +
      "Tout nos produits sont garantis. A PARTIR DU PRIX INDIQUE",
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
    desc:
      "Ordinateur complet avec écran 19 à 24 pouces disponibles en Acer ,HP, Lenovo et Dell selon le stock\n" +
      "Core i7 de la 4 -ème à la 7ème génération.\n" +
      "Mémoire RAM 8 disponible aussi avec 16 go\n" +
      "Disponibles au en 20.22 et 24 pouces disponibles aussi en option\n" +
      "A PARTIR DU PRIX INDIQUE",
    details: [
      "D'occasion",
      "NOIR",
      "Acer",
      "500GO SATA OU SSD 256 GO",
      "8GO",
      "CORE I7",
    ],
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
    details: [
      "Réconditionné",
      "NOIR, GRISE, BLEU",
      "Dell",
      "500GO",
      "8GO",
      "Core i5",
    ],
    desc:
      "DELL Latitude 3340 ET 3350 Core i3\n" +
      "Intel Core i3 (4 ème et 5ème Génération )\n" +
      "DISQUE DUR: 500 Go\n" +
      "MEMOIRE Ram: 8 Go\n" +
      'Port HDMI / Bluetooth / Wifi / Webcam / Lecteur SD, Écran 13.3" Tactile',
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
    details: [
      "Réconditionné",
      "GRISE",
      "Dell",
      "512 ssd",
      "16GO",
      "CORE I7 11ème génération",
    ],
    desc:
      "DELL 5502 CORE I7 11 eme .Ecran 15.6 pouces\n" +
      "Intel® Core™ i7-1185G7 de 11e génération (12 Mo de mémoire cache, 4 cœurs, 8 threads, de 3 GHz à 4,80 GHz, 17,5 W)\n" +
      "Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n" +
      "16 Go de mémoire DDR4 extensible à 32 GO\n" +
      "Écran FHD 15 pouces, 1 920 x 1 080, 60 Hz, antireflet, non tactile, 45 % NTSC, 250 cd/m², grand angle de vue\n" +
      "Disque SSD M.2 PCIe de 512 Go\n" +
      "Clavier avec pavé numerique\n" +
      "Communication sans fil Wi-Fi AX + Bluetooth\n" +
      "1 Port RJ45, 1 Port USB 3.2, 1 Port USB 3.2 PowerShare, 2 Port Thunderbolt™ 4 avec Power Delivery et DisplayPort (USB-C™), 1 HDMI 2.0, 1 Prise jack universelle pour casque, Windows 10 Professionnel 64 bits et tous les logiciels\n" +
      "Tous nos produits sont garantis \n" +
      "A PARTIR DU PRIX INDIQUE",
  },
  {
    id: "p-10",
    name: 'DELL X360 TACTILE 11.6"',
    price: 80000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["dell", "écran tactile", "portable"],
    image: "./IMG/DELL X360 TACTILE 11.6/1.jpg",
    details: [
      "reconditionné",
      "NOIR",
      "Dell",
      "128 SSD",
      "8GO",
      "INTEL PENTIUM",
    ],

    desc:
      "Ordinateur Portable DELL LATITUDE 3189\n" +
      "Ram: 8GO, DISQUE DUR: 128 GO extensible à 256GO\n" +
      "ÉCRAN 11.6 POUCES TACTILE X360\n" +
      "Disponible aussi en 8GO 256 SSD pour un petit supplément.",
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
    details: [
      "reconditionné",
      "GRISE",
      "Dell",
      "756 GO",
      "16GO",
      " Intel XEON E5420 ou 5430",
    ],
    desc:
      "Dell Precision ou HP Z400 et 420\n" +
      "(RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n" +
      "Processeur : Intel XEON E5420 ou 5430 Fréquence : 2.66Ghz.\n" +
      "Mémoire Ram 16go : Disque dur : 1ssd 256go en master+1de 500 Go sata en slave.\n" +
      "Ecran 22 à24 pouces.\n" +
      "Carte graphique de 4 go\n" +
      "A PARTIR DU PRIX INDIQUE",
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
    details: [
      "Réconditionné",
      "NOIR",
      "Dell",
      "1Téra",
      "16GO",
      "Intel Xeon E5-2609",
    ],
    desc:
      "Modèle: Dell Précision\n" +
      "Format: Tour\n" +
      "RAM : 8 Go DDR4 extensible à 16 et 32GO\n" +
      "Processeur : Double Intel Xeon E5-2609 2,40 GHz - Turbo : 3,00 Ghz-3\n" +
      "Mémoire Vive : 16Go - DDR4 ECC EXTENSIBLE A 64GO, 512SSD en master +500Go SATA en slave\n" +
      "512SSD en master +500Go SATA en slave\n" +
      "Carte graphique : NVIDIA GTX 4Go A 8GO GDDR5\n" +
      "Carte son : Intégrée\n" +
      "Réseau : Gigabit Ethernet\n" +
      "ECRAN 24 POUCES\n" +
      "Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n" +
      "DISPONIBLE A PARTIR DU PRIX INDIQUE",
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
    details: ["Réconditionné", "NOIR", "Dell", "256 SSD", "8GO", "CORE I5"],
    desc:
      "Modèle : Dell Precision 7810\n" +
      "Processeur : Double Intel Xeon E5-2609 1,70 GHz - Turbo : 3,00 Ghz-3\n" +
      "Mémoire Vive : 32Go - DDR4 ECC EXTENSIBLE A 64GO\n" +
      "Disque dur : OPTION 1: 256SSD en master +500Go SATA en slave\n" +
      "OPTION 2: 512SSD en master +1000Go SATA en slave\n" +
      "Lecteur optique : Graveur DVD\n" +
      "Carte graphique : OPTION 1 NVIDIA 4Go GDDR5\n" +
      "OPTION 2 NVIDIA - 6Go A 8GO GDDR5\n" +
      "Carte son : Intégrée\n" +
      "Réseau : Gigabit Ethernet\n" +
      "Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n" +
      "LOGICIELLE ARCHITECTURE: AUTOCAD, ARCHICAD, GRAYTEC,ETC.... DISPONIBLES\n" +
      "Alimentation : 685 Watts",
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
    details: [
      "D'occasion",
      "NOIR",
      "dell",
      "SSD 512 go + 500 go SATA",
      "32GO",
      "Intel Xeon E5-1607 v3",
    ],
    desc:
      "Gamer Dell 5810\n" +
      "Ecran 24 Pouces\n" +
      "Intel Xeon E5-1607 v3\n" +
      "Fréquence de base du processeur: 3,10GHz\n" +
      "Nombre de cœurs 4\n" +
      "RAM 32 extensible à 128go\n" +
      "2 Disques Durs :SSD 512 go en master+,disque 500 go SATA en slave\n" +
      "Carte Graphique NVIDIA 4go à 8go\n" +
      "À partir du prix ci-dessous",
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
    details: [
      "Réconditionné",
      "NOIR",
      "Dell",
      "32Go",
      "+1.5Téra",
      "Double Intel Xeon E5-2609",
    ],
    desc:
      "Modèle : Dell Precision 7810\n" +
      "Format : Tour\n" +
      "Processeur : Double Intel Xeon E5-2609 1,70 GHz - Turbo : 3,00 Ghz-3\n" +
      "Mémoire Vive : 32Go - DDR4 ECC EXTENSIBLE A 128GO\n" +
      "Disque dur : 512SSD en master +1000Go SATA en slave\n" +
      "Lecteur optique : Graveur DVD\n" +
      "Carte graphique : NVIDIA GTX 8GO GDDR5\n" +
      "Carte son : Intégrée\n" +
      "Réseau : Gigabit Ethernet\n" +
      "Système d'exploitation installé : Microsoft Windows 10 Professionnel 64 bits\n" +
      "LOGICIELLE ARCHITECTURE: AUTOCAD, ARCHICAD, GRAYTEC,ETC.... DISPONIBLES",
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
    details: [
      "D'occasion",
      "NOIR",
      "dell",
      "756 SSD",
      "16GO",
      "Z420 XEON CPU F5 1603",
    ],
    desc:
      "HP Z420 XEON CPU F5 1603 Processeur 2.80ghz\n" +
      "Ram 16go extensible à 32go.\n" +
      "Disque ssd 256go en master+500Go en slave\n" +
      "carte graphique de 4Go dedié\n" +
      "Ecran 22 à 24 pouces\n" +
      "Clavier avec pavé Numérique\n" +
      "Machine idéale pour architecture et autres applications exigeantes",
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
    details: [
      "D'occasion",
      "Noir",
      "HP",
      "256ssd +500go",
      "16GO",
      "intel xeon CPU E1630",
    ],
    desc:
      "Gamer HP Z420 intel xeon CPU E1630 avec les caractéristiques suivants: " +
      "Processeur 2.80ghz (4CPUs) Ram 16go extensible à 32go, Disque SSD256 Go en master + 500go Sata slave\n" +
      "Carte Graphique 4go +Ecran 24 pouces\n" +
      "Pour tout information contacter nous.",
  },
  {
    id: "p-26",
    name: "GAMER HP Z640.32 GO RAM .8Go NVIDIA +24 POUCES",
    price: 500000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: ["fixe", "desktop", "hp", "windows", "32go", "1to", "INTEL XEONRAM"],
    image: "./IMG/GAMER HP Z640.32 GO RAM .8Go NVIDIA +24 POUCES/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
      "hp",
      "1000Go (1To)",
      "32GO",
      "INTEL XEONRAM",
    ],
    desc:
      "GAMER HP Z640.\n" +
      "2 Processeurs Intel® Xeon.\n" +
      "Ram 32 Go extensible à 64 Go.\n" +
      "2 Disques durs ssd 512go en master+500go en slave\n" +
      "cartes graphiqueNvidia de 8Go dédié +24 POUCES\n" +
      "Machine idéale pour architecture, la 3d et autres applications exigeantes et gaming.",
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
    details: [
      "Réconditionné",
      "Noir",
      "Dell",
      "1T",
      "16GO",
      "INTEL XEON CPU E5-1625",
    ],
    desc:
      "GAMERS DISPONIBLES EN HP ET DELL\n" +
      "Processeur INTEL XEON CPU E5-1625 v3 fréquence 3.6ghz avec 4 coeurs / 8 threads.\n" +
      "Mémoire Ram 16go extensible à 32go et plus.\n" +
      "Disque ssd 512 go master+ 500Go sata en slave\n" +
      "Carte graphique Nvidia de 4 à 8 Go\n" +
      "Ecran 22 à 24 pouces\n" +
      "Machine idéale pour architecture, la 3d et autres applications exigeantes et gaming.",
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
    details: [
      "Réconditionné",
      "Noir",
      "HP",
      "756 SSD",
      "16GO",
      "intel xeon CPU E5620",
    ],
    desc:
      "Je mon Gamer HP Z600 Z620 Z640+22 à 24 Pouces\n" +
      "intel xeon CPU E5620 avec les caractéristiques suivants:\n" +
      "Processeur 2.40(8CPUs) Ram16 go extensible à 32go, Disque ssd 256go en master+500 go en slave.\n" +
      "Carte Graphique 8go Nviadia GTX.",
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
    details: [
      "D'occasion",
      "Noir",
      "autre",
      "756Go",
      "16GO",
      "ASUS NVIDIA GTX",
    ],
    desc:
      "Je vends GAMING ASUS NVIDIA GTX\n" +
      "Machine gamer, architecture ou 3D Processeur\n" +
      "Core i7 de 3.07 à 3.33ghz (4 Cœurs, 8 cpu)\n" +
      "Mémoire Ram : 16 go en . Boîtier Cooler Master HAF 922\n" +
      "Radiateur et ventilo zalman CNPS 9900 led\n" +
      "Carte mère ASUS P6TD Deluxe\n" +
      "Alimentation 800 watts certifié XION-800P14N Silent bleue LED\n" +
      "Carte Nvidia GTX 1650 de 4go vram\n" +
      "Disque durs: Ssd 256 go en master et sata 500 go en slave.\n" +
      "Clavier et souris sans fil\n" +
      "Wi-fi de 300mbts.\n" +
      "Windows 10 64bits pro .En option : Écran de 24 pouces",
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
    details: ["D'occasion", "Noir", "HP", "500GO", "16GO", "Core i7- 3.40 Ghz"],
    desc:
      "HP TOUR ou DESKTOP selon stock\n" +
      "CORE I7 +23 POUCES\n" +
      "Core i7- 3.40 Ghz - 4 coeurs - Turbo : 3,9Ghz\n" +
      "Mémoire Ram : 16 Go. Disque dur 500 go\n" +
      "Nvidia Geforce GT 730 DE 4GO\n" +
      "Total affichage graphique 12go.( 4go de mémoire dédiée +8Go de mémoire partagée )\n" +
      "EN OPTION: Wifi.Disque SSD de 256 ou 512 Go au lieu de 500GO ou en sus.\n" +
      "Machines puissantes et robustes idéales pour les charges de travail lourdes, les jeux , les montages vidéos ou le dessin ou la 3D.",
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
    desc:
      "Ordinateur portable HP Pavillon 15\n " +
      "Processeur Core i7 12-ème génération (jusqu'à 4,7 GHz en Turbo Boost, 12 Mo de cache L3)\n" +
      "Mémoire 8 Go de RAM DDR4-3200 MHz extensible à 32go.\n" +
      "Disque dur SSD 512 go M.2 PCIe® NVMe™ (possible aussi en 1To)\n" +
      'Ecran 15,6" FHD (1 920 x 1 080)\n' +
      "Haut-parleurs doubles ; Amplification audio HP/Caméra HD HP Wide Vision 720p avec microphones numériques à double matrice intégrés/1\n" +
      "taux de signalisation SuperSpeed USB Type-C® 10 Gbit/s (USB Power Delivery, DisplayPort™ 1.4, HP Sleep and Charge)\n" +
      "2 taux de signalisation SuperSpeed USB Type-A 5 Gbit/s\n" +
      "1 HDMI 2.0 ; 1 broche intelligente CA ; 1 combo casque/micro\n",
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
    image:
      "./IMG/Hp Elite X2 1013 G3 Core I7-8 ème Gen.16Go.512Go 13 Tactile/1.jpg",
    details: [
      "Réconditionné",
      "Gris",
      "HP",
      "512GB",
      "16GO",
      "Core i7 8550 U 8-ème jusqu’à 4 .2 GHZ",
    ],
    desc:
      "HP Elite X2 1013 G3 Core I7-8 ème Gen.16Go.512Go 13\" Tactile (RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n " +
      "LIVRE AVEC UN ADAPTATEUR 11 EN 1 pour tous les ports imaginables\n" +
      "HP Elite x2 1013 G3 Intel-Core i7 8550 U 8-ème jusqu'à 4 .2 GHZ en mode Turbo\n" +
      "RAM: 16 GO, DISQUE: 512GO SSD M2\n" +
      "ECRAN 13 POUCES TACTILE DETACHABLE brillant au format 15/10 avec haute résolution\n" +
      "2x USB Type-C\n" +
      "1x USB Type-C\n" +
      "3.2 Gen 1 (5 Gbit/s), Power Delivery (PD),\n" +
      "Communication WIFI 802.11 ac(2x2),BLUETOOTH 5\n" +
      "1 combiné casque/microphone\n" +
      "Système d'exploitation installé et suite office : Microsoft Windows 10 Professionnel 64 bits /OFFICE 2019\n",
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
    details: ["Réconditionné", "Gris", "HP", "256SSD", "8Go", "Core i5-6è"],
    desc:
      "NOUS VENDONS DES ORDINATEURS PORTABLES HP ELITEBOOK 840 G3\n " +
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
    details: ["Neuf", "Noir", "HP", "500", "8go", "3.4 core i5"],
    desc:
      "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces \n " +
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
    details: ["Neuf", "Noir", "HP", "1000", "8go", "3.4 core i7"],
    desc:
      "Nous vendons des machines fixes Hp pro 6300 microtower coreI7 avec écran 19 pouces.  \n " +
      ". Core i7 3770: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go. \n" +
      " Disque dur 1000 go. Graveur dvd .Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
      "Prêt à l'emploi et garanti. \n",
  },
  {
    id: "p-1",
    name: 'Desktop Pro 14" i7/16Go/1To', // A revoir
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
    desc:
      'ENSEMBLE ORDINATEUR COMPLET CORE I7 7 ème génération" ' +
      'DISPONIBLE EN HP PRODESK 400 G4 SSF."' +
      ' AVEC UNE MÉMOIRE DE 8GO EXTENSIBLE à 16GO, "' +
      'DISQUE DUR 500 GO ET/OU SSD 256 GO. ECRAN 22 à 24 POUCES\n"' +
      "A PARTIR DU PRIX INDIQUE",
  },
  {
    id: "p-3",
    name: 'Core I5 et I7.Ram 8GO" Ecran 19 à 24"+wifi', // A revoir
    price: 50000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: [
      "desktop",
      "hp",
      "windows",
      "all-in-one",
      "écran",
      "bureau",
      "portable",
    ],
    image: "./images/HP/hp4.webp",
    details: [
      "Réconditionné",
      "Noir",
      "HP",
      "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
      "04 Go de RAM EXTENSIBLE à 16 GO",
      "Processeur Intel i5 ou i7(de la 2 -ème à la 8 -ème génération)",
    ],
    desc:
      'Ordinateurs complets avec écran 19 à 24" disponibles Lenovo, HP et DELL selon stock\n' +
      "Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n " +
      "Mémoire Ram de 4 go extensible à 8 ou 16 go\n" +
      'Disque dur 250 go SATA extensible à 500go ou SSD 128 à 256 Go."' +
      "En Option :Wifi, Carte Graphique de 2 à 4 go\n" +
      'Windows 10 ou 11 Professionnel 64 bits, Office 2019 , Antivirus etc...  "' +
      "prêt à l'emploi. Machines idéales pour tous travaux de bureau et d'internet ou de montage videos\n\"" +
      "Tous nos produits sont garantis",
  },
  {
    id: "p-5",
    name: 'CORE I3 ,I5,I7 " AVEC ECRAN 19 à 22 pouces',
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
    desc:
      "NOUS VENDONS DES ORDINATEURS COMPLETS\n" +
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
    image:
      "./IMG/ALL IN ONE 27 POUCES TACTILE CORE I7 13EME 32 GO 1TERA SSD/1.jpg",
    details: [
      "Neuf",
      "Noir",
      "HP",
      "1Téra SSD",
      " 32 Go",
      "Intel Core i7-13-ème",
    ],
    desc:
      "ALL IN ONE HP 27 POUCES TACTILE\n" +
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
    tags: [
      "desktop",
      "hp",
      "windows",
      "ssd",
      "core i5",
      "écran 19 à 22 pouces",
    ],
    image: "./IMG/ecran/CORE I3  I5 I7 AVEC ECRAN 19 à 22 pouces/3.jpg",
    details: [
      "D'Occasion",
      "Gris Noir",
      " HP",
      "250 à 500 Go SATA OU 128 à 256 SSD",
      "04 Go de RAM EXTENSIBLE à 08 GO",
      "Intel i5",
    ],
    desc:
      "CORE I5 HP ACER LENOVO DELL EN DESKTOPS OU TOURS SELON STOCK\n" +
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
    desc:
      "Ordinateur Portable EliteBook 830 OU 840 G6.I7\n" +
      "CORE I7 8 éme GENERATION\n" +
      "RAM 16 GO extensible à 32 Go\n" +
      "DISQUE :256SSD EXTENSIBLE A 512 GO\n" +
      "ECRAN 13.3 ou 14 POUCES FHD ou TACTILE",
  },
  {
    id: "p-13", // A revoir
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
    desc:
      "Hp Probook x36011.6pouces G3 et Dell 3190. Disque dur 128 giga ssd.\n" +
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
    tags: [
      "laptop",
      "hp",
      "windows",
      " elitebook",
      "i7",
      "16go",
      "512ssd",
      "14 pouces",
      "portable",
    ],
    image: "./IMG/HP ELITEBOOK 840G6 I7/3.jfif",
    details: [
      "Reconditionné",
      "Gris, Noir",
      "HP",
      "512 SSD",
      "16 Go",
      "Intel i7",
    ],
    desc:
      "Ordinateur Portable EliteBook 840 G6 I7\n" +
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
      "Couleur : Gris, Noir",
    ],
    desc:
      "NOUS VENDONS DES CORE I3 HP EN TOUR OU DESKTOPS\n" +
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
      "Intel Core i5 ou I7 de 2 ème à la 8 ème génération",
    ],
    desc:
      "Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces\n" +
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
    name: 'ALL IN ONE HP NEUF 23.8" I3 12éme',
    price: 450000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "HP",
    tags: [
      "desktop",
      "hp",
      "windows",
      "all-in-one",
      "i3",
      "12ème",
      "23.8 pouces",
      "8go",
      "256 ssd",
    ],
    image: "./IMG/ALL IN ONE HP NEUF 23.8 I3 12éme/1.jpg",
    details: ["Neuf", "Noir", " HP", " 256GO", " 8 Go", " Intel Core i3"],
    desc:
      "Hp proOne ProOne 240 23.8 pouces G9 All in one\n" +
      "core i3 12éme gen /RAM 8Go extensible à 16 go, DISQUE DUR 256Go\n" +
      "SSD extensible à 512 go ECRAN 23.8POUCES",
  },
  {
    id: "p-23",
    name: 'Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 "TACTILE.',
    price: 125000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "HP",
    tags: [
      "laptop",
      "hp",
      "windows",
      " probook",
      "i5",
      "8go",
      "256ssd",
      "15.6 pouces",
      "portable",
    ],
    image:
      "./IMG/Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 TACTILE/2.jfif",
    details: ["HP", "Réconditionné", "Noir", "256GO", "8Go", "Intel Core i5"],
    desc:
      'HP Probook 650 G3 Core i5 7 eme.8go.SSD 256go..Ecran 15.6 "TACTILE.\n' +
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
    tags: [
      "laptop",
      "hp",
      "windows",
      " elitebook",
      "i7",
      "8go",
      "256ssd",
      "14 pouces",
      "portable",
    ],
    image: "./IMG/PROMO 🔥🔥 HP ELITEBOOK 840 G3 I7 14'' TACTILE/1.jfif",
    details: [
      "Reconditionné",
      "Gris",
      " HP",
      " 256 SSD",
      " 08 Go",
      " Intel i7",
    ],
    desc:
      "ORDINATEUR PORTABLE HP ELITEBOOK 840 G3 CORE I7\n" +
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
    tags: [
      "laptop",
      "hp",
      "windows",
      " elitebook",
      "i5",
      "8go",
      "256ssd",
      "14 pouces",
      "portable",
    ],
    image:
      "./IMG/ORDINATEURS PORTABLE HP ELITEBOOK 840 G3 (PROMO🔥🔥🔥)/4.jfif",
    details: [
      "Réconditionné",
      "Gris",
      "HP",
      "256 SSD",
      "08 Go",
      "Intel i5-6th Gen",
    ],
    desc:
      "SPÉCIAL PROMO ORDINATEURS PORTABLE 🔥🔥🔥🔥🔥\n" +
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
    tags: [
      "laptop",
      "hp",
      "windows",
      " elitebook",
      "i5",
      "8go",
      "256ssd",
      "14 pouces",
      "portable",
    ],
    image: "./IMG/HP ELITEBOOK.840G8.I5/2.jpg",
    details: [
      " Reconditionné",
      " Gris",
      " HP",
      " 256 SSD",
      " 08 Go",
      " Intel i5",
    ],
    desc:
      "HP ELITEBOOK 840 G8\n" +
      "Processeur Intel Core i5-1135G7 (Quad-Core 0.9 GHz - 2.4 GHz / 4.2 GHz Turbo - 8 Threads - Cache 8 Mo)\n" +
      "8 Go de mémoire DDR4 extensible à 16 Go\n" +
      'Disque dur 256ssd extensible à 512 go. Ecran de 14" avec résolution Full HD (1920 x 1080)\n' +
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
    tags: [
      "laptop",
      "hp",
      "windows",
      " zbook",
      "i5",
      "16go",
      "512ssd",
      "14 pouces",
      "portable",
    ],
    image: "./IMG/GAMER HP ZBOOK 14U G6 I5/1.jpg",
    details: ["Reconditionné", "Gris", "HP", " 512 SSD", " 16Go", " Intel i5"],
    desc:
      "Ordinateur Portable GAMER HP ZBOOK 14U G6\n" +
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
    details: [" Neuf", " Noir", " HP", " 512 SSD", " 8Go", " Intel i5"],
    desc:
      "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
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
    details: [" Neuf", "Noir", " HP", " 1Téra", " 8Go", " Intel i7"],
    desc:
      "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
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
    tags: [
      "Ordinateur de bureau",
      "hp",
      "windows",
      " core 2 duo",
      "4go",
      "250go",
      "19 pouces",
      "desktop",
    ],
    image: "./IMG/Core 2.dual.+19/1.jpg",
    details: ["D'Occasion", "Noir", " HP", " 250Go", " 4Go", " Core 2.dual."],
    desc:
      'Nous vendons des ordinateurs complets avec écran 19" en HP.\n' +
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
    tags: [
      "Ordinateur de bureau",
      "hp",
      "windows",
      " core i5",
      "4go",
      "500go",
      "19 pouces",
      "desktop",
    ],
    image: "./IMG/Ordinateur Core I5/1.jfif",
    details: ["D'occasion", "Noir", "HP", "500Go", "4Go", "3.2 Core i5"],
    desc:
      'Nous vendons des ordinateurs complets avec écran 19" en Lenovo et Acer selon stock\n' +
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
    tags: [
      "Ordinateur de bureau",
      "hp",
      "windows",
      " core i3",
      "4go",
      "250go",
      "19 pouces",
      "desktop",
    ],
    image: "./IMG/HP Core I3 ordinateur complet/1.jpg",
    details: ["D'occasion", "Noir", "HP", "250Go", "4Go", "Core i3"],
    desc:
      "Ensembles complets HP en desktop.Core i3 -/Mémoire RAM 4go/\n" +
      'Disque 250Go/Écran (19") . DVDRW - Option Wifi\n' +
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
    details: ["Réconditionné", "Noir", "Dell", "500Go", "16Go", "Intel XEON"],
    desc:
      "DIPONIBLE EN Dell ET HP Z400,Z420\n" +
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
    image: "./IMG/Dell Wyse 5470 ALL IN ONE.24 POUCES FHD/3" + ".jpg",
    details: ["D'occasion", "NOIR", "dell", "128 SSD", "8GO", "intel J4005"],
    desc:
      "Modèle : Dell Wyse 5470 ALL IN ONE\n" +
      "Ecran de 24 Pouces Full HD Resolution 1920 x 1080\n" +
      "Processeur : intel J4005 CPU de 2.0 à 2.7 Ghz (supérieur au Core I3 de 3 ème génération )\n" +
      "Mémoire RAM : 08 Go extensible à 16Go\n" +
      "Disque dur : SSD M2 de 128 go extensible 256 Go\n" +
      "Système d'exploitation : Windows 10 ou 11 Professionnel 64\n" +
      "Microsoft Office 2019\n" +
      "Tous les utilitaires Acrobat etc\n" +
      "Clavier + souris\n" +
      "A PARTIR DU PRIX INDIQUE",
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
    details: ["D'occasion", "NOIR", "acer", "250 Go", "4GO", "Core i3"],
    desc:
      "Ensembles complets Lenovo, HP ou Acer en desktop\n" +
      'Core i3 - Processeur 3.10ghz/Mémoire RAM 4go/ Disque 250Go/Écran (19")\n' +
      "DVDRW - Option Wifi\n" +
      "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc\n" +
      "Tous nos produits sont garantis.",
  },

  // Infrastructure - 1 produit

 {
     id: "p-300",
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
     id: "p-301",
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
     id: "p-302",
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
     id: "p-303",
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
     id: "p-304",
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
     id: "p-305",
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
     id: "p-306",
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
     id: "p-307",
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
     id: "p-308",
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
     id: "p-309",
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
     id: "p-310",
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
     id: "p-311",
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
     id: "p-312",
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
     id: "p-313",
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
     id: "p-314",
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
     id: "p-315",
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
     id: "p-316",
     name: "Gaming I7.NVIDIA4Go.16GoRAM+.23",
     price: 180000,
     stock: "En stock",
     category: "computers",
     subcategory: "Ordinateurs de bureau",
     brand: "HP",
     tags: ["bureau", "desktop", "ordinateur fixe", "hp", "windows"],
     image: "./IMG/Gaming I7.NVIDIA4Go.16GoRAM+.23/1.webp",
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
         id: "p-317",
         name: "HP CORE I7 12 EME GEN",
         price: 550000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
         tags: ["laptop", "hp", "windows", "i7"],
         image: "./IMG/HP CORE I7 12 EME GEN/1.jpg",
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
         id: "p-318",
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
         id: "p-319",
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
         id: "p-320",
        name: "HP ELITEBOOK 840 G6 I7",
         price: 200000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
        tags: ["hp", "windows"],
         image: "./IMG/HP ELITEBOOK 840 G6 I7/1.jpg",
         details: [
             "Réconditionné",
             "Grise",
             "HP",
             "512Go SSD",
             "16Go",
             "CORE I7 8è",
         ],
         desc: "Ordinateur Portable HP Elitebook 840 G6.I7\n " +
             "CORE I7 8éme GENERATION\n" +
             "RAM 16GO\n" +
             "DISQUE : SSD 512GO\n" +
             "ECRAN 14 POUCES\n",

     },


  {
         id: "p-321",
         name: "HP ELITEBOOK 840G3 I5",
         price: 125000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
         tags: ["hp", "windows"],
         image: "./IMG/HP ELITEBOOK 840G3 I5/1.jpg",
         details: [
             "Réconditionné",
             "Gris",
             "HP",
             "256Go SSD",
             "8Go",
             "CORE I5 6è",
         ],
         desc: "Ordinateur Portable elitebook 840 G3.I5\n " +
             "CORE I5 6émE GENERATION\n" +
             "RAM 8GO EXTENSIBLE A 16 GO\n" +
             "DISQUE : 256SSD EXTENSIBLE A 512GO\n"+"ECRAN 14 POUCES\n"+"CLAVIER RETRO ECLAIRE",
     },
     {
         id: "p-322",
         name: "HP ELITEBOOK 840G6 I5",
         price: 165000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
         tags: ["desktop", "lenovo", "windows"],
         image: "./IMG/HP ELITEBOOK 840G6 I5/1.jpg",
         details: [
             "Réconditionné",
             "Gris",
             "HP",
             "256Go SSD, 512Go SSD",
             "08 Go EXTENSIBLE à 16 GO",
             "Core i5",
         ],
         desc: "Ordinateur Portable elitebook 840 G5 ET G6.I5\n" +
             "CORE I5 8émE GENERATION\n" +
             "RAM 8GO EXTENSIBLE A 16 GO\n" +
             "DISQUE : 256SSD EXTENSIBLE A 512GO\n\"" +
             "ECRAN 14 pouces\n"+
             "CLAVIER RETRO ECLAIRE"
     },
     {
         id: "p-323",
         name: "HP ELITEBOOK 840G6 i7",
         price: 200000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
         tags: ["hp", "windows","portable"],
         image: "./IMG/HP ELITEBOOK 840G6 i7/1.jpg",
         details: [
             "Réconditionné",
             "Gris",
             "HP",
             "512Go SSD",
             "16GO",
             "Processeur Intel i7",
         ],
         desc: "Ordinateur Portable elitebook 840 G6 i7\n" +
             "CORE I7 8émE GENERATION\n " +
             "RAM 16GO\n" +
             "DISQUE 512GO SSD\n" +
             "ECRAN 14 POUCES",
     },
     {
         id: "p-324",
         name: "HP ELITEBOOK 840G6 I5",
         price: 165000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptopos",
         brand: "HP",
         tags: ["laptops", "hp", "windows"],
         image: "./IMG/HP ELITEBOOK 840G6 I5/1.jpg",
         details: [
             "Réconditionné",
             " Gris, Noir",
               " HP",
                 "256Go SSD",
                   "8Go",
                     "CORE I5 8émE",
         ],
         desc: "Ordinateur Portable elitebook 840 G5 ET G6.I5\n" +
             "CORE I5 8émE GENERATION\n" +
             "RAM 8GO EXTENSIBLE A 16 GO\n" +
             "DISQUE : 256SSD EXTENSIBLE A 512GO\n" +
             "ECRAN 14 pouces\n" +
             "CLAVIER RETRO ECLAIRE",
     },
     {
         id: "p-325",
         name: "HP ELITEBOOK 840G6 i7",
         price: 200000,
         stock: "En stock",
         category: "computers",
         subcategory: "Laptops",
         brand: "HP",
         tags: ["laptops", "hp", "windows"],
         image: "./IMG/HP ELITEBOOK 840G6 i7/1.jpg",
         details: [
             "Réconditionné",
             "Gris, Noir",
               "HP",
                   "512Go SSD",
                    "16Go",
                        "Core i7",
         ],
         desc: "Ordinateur Portable elitebook 840 G6 i7\n" +
             "CORE I7 8émE GENERATION\n" +
             "RAM 16GO\n" +
             "DISQUE DUR SSD 1 TERA\n" +
             "DISQUE 512GO SSD\n" +
             "ECRAN 14 POUCES",
     },
     {
         id: "p-326",
         name: "Hp i7.16go+22+4go nvidia",
         price: 400000,
         stock: "En stock",
         category: "computers",
         subcategory: "Ordinateurs de bureau",
         brand: "HP",
         tags: ["desktop", "hp", "windows"],
         image: "./IMG/Hp i7.16go+22+4go nvidia/1.jpg",
         details: [
             "Neuf",
             "Gris Noir",
              "HP",
              "500Go",
              "16Go",
                   "Intel Core i7",
         ],
         desc: "Hp pro 6300 microtower+ écran 21.4pouces tout neufs\n" +
             "Intel Core i7 3.40 Ghz - 4 coeurs - Turbo : 3,9Ghz\n" +
             "Disque dur : ssd de 256 go en master extensible à 512 go et 1000 GO en slave\n" +
             "Ram :16go. Wifi.4Go Carte graphique Nvidia GTX1650/Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)" +
             "Prêt à l'emploi et garanti. Machines puissantes et robustes idéales les charges de travail lourdes, les jeux , montages vidéos ou le dessin ou la 3D.",
     },
     {
         id: "p-327",
         name: "Hp i7.16go+24+4Go nvidia",
         price: 400000,
         stock: "En stock",
         category: "computers",
         subcategory: "Ordinateurs de bureau",
         brand: "HP",
         tags: ["desktop", "hp", "windows"],
         image: "./IMG/Hp i7.16go+24+4Go nvidia/1.webp",
         details: [
             "Neuf",
             "Gris Noir",
             "HP",
             "500 Go",
             "16 Go",
             "Intel i7 3.9GHZ",
             "NVIDIA 4 Go"
         ],
         desc: "Hp pro 6300 microtower+ écran 24 pouces tout neufs.\n" +
             "Intel Core i7 3.40 Ghz - 4 coeurs - Turbo : 3,9Ghz\n" +
             "Disque dur : 500 Go extensible à 1000 GO\n" +
             "Ram : 16go\n" +
             "Wifi.4Go Nvidia Geforce GT730\n" +
             "Windows 10 professionnel 64 bits - office - antivirus et tous les utilitaires (acrobat reader etc,,,)\n" +
             "Prêt à l'emploi et garanti.\n" +
             "Machines puissantes et robustes idéales pour les charges de travail lourdes, les jeux, montages vidéos ou le dessin ou la 3D.\n" +
             "Localisation : Gueule‑Tapée, Dakar"
    },
    {
      id: "p-328",
      name: "HP Probook X360 Tactile 11,6\" X360 Core i5 8ème 8Go 256Go",
      price: 105000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "HP",
      tags: ["laptop", "hp", "windows", "tactile", "x360", "i5", "8go", "256ssd"],
      image: "./IMG/HP Probook X360 Tactile.11,6 X360.Core i5 8éme.8go.256go/8.webp",
      details: [
        "Réconditionné",
        "NOIR, GRIS, ROUGE....",
        "HP",
        "256SSD",
        "8GO",
        "Core i5-8200Y"
      ],
      desc:
        "HP ProBook X360 Core i5 8-ème. 8go. 256go SSD. Tactile rotatif 11,6\" X360. G4\n" +
        "Processeur Intel Core i5-8200Y\n" +
        "Vitesse de base : 1,30GHz à 3,9GHz en mode Turbo\n" +
        "Carte graphique Intel UHD 605\n" +
        "8 Go de RAM\n" +
        "Disque : 256 Go SSD\n" +
        "Écran tactile IPS HD 11,6\"\n" +
        "HDMI, USB-C, emplacement pour carte SD, USB 3.2, prise combinée casque/microphone\n" +
        "Webcam HD et appareil photo 5 Mpx\n" +
        "Wi‑Fi 5, Bluetooth\n" +
        "Système d'exploitation: Windows 10 ou 11 Professionnel. Office 2019. Tous les utilitaires installés\n" +
        "Localisation : Colobane, Dakar",
    },
    {
        id: "p-329",
        name: "HP PROBOOK 440 TACTILE I5",
        price: 140000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows", "probook", "i5", "8go", "256ssd", "14 pouces", "tactile"],
        image: "./IMG/HP PROBOOK 440 TACTILE I5/1.jpg",
        details: [
            "Reconditionné",
            "Gris",
            "HP",
            "256 SSD",
            "8GO",
            "CORE I5 7ème"
        ],
        desc: "HP PROBOOK 440 G4 CORE I5 7ème GENERATION\n" +
            "RAM: 8 à 16GO\n" +
            "DISQUE: 256 SSD OU 128 SSD + 320 GO SATA\n" +
            "ECRAN TACTILE 14 POUCES\n" +
            "1 ports USB 3.0\n" +
            "1 USB 2.0 (port de chargement)\n" +
            "1 USB Type-C\n" +
            "1 HDMI\n" +
            "1 combiné casque/microphone\n" +
            "1 alimentation secteur\n" +
            "1 RJ-45 (Ethernet)\n" +
            "1 VGA\n" +
            "Localisation : Colobane, Dakar",
    },
    {
      id: "p-330",
      name: "HP PROBOOK 640 G4 I5",
      price: 125000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "HP",
      tags: ["laptop", "hp", "windows", "probook", "i5", "8go", "256ssd", "14 pouces", "fhd", "clavier rétro-éclairé"],
      image: "./IMG/HP PROBOOK 640G4 I5/1.jpg",
      details: [
        "Réconditionné",
        "GRIS, NOIR",
        "HP",
        "256Go SSD",
        "8GO",
        "Core i5"
      ],
      desc: "Ordinateur Portable PROBOOK 640 G4.I5\n" +
        "CORE I5 8émE GENERATION\n" +
        "RAM 8GO EXTENSIBLE A 16 GO\n" +
        "DISQUE : 256SSD EXTENSIBLE A 512GO\n" +
        "ECRAN 14 POUCES FHD\n" +
        "CLAVIER RETRO ECLAIRE\n" +
        "Localisation : Colobane, Dakar",
    },
    {
      id: "p-331",
      name: "Hp X360 core i7 13 ème tactile",
      price: 650000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "HP",
      tags: ["laptop", "hp", "windows", "tactile", "x360", "i7", "16go", "1to", "fhd", "iris xe"],
      image: "./IMG/Hp X360 core i7 13 ème tactile/1.jpg",
      details: [
        "Neuf",
        "Gris",
        "HP",
        "1To SSD",
        "16GO",
        "Intel Core i7-1335U"
      ],
      desc: "HP ENVY X360 14-ES0033DX Core i7-1335U, 16GB DDR4, 1TB SSD, 14\" Tactile Neuf\n" +
        "HP ENVY 14-ES0033DX\n" +
        "Processeur: Intel core i7-1335U de 13ème génération (12 Mo de cache jusqu'à 5.00GHz)\n" +
        "Ram: 16go de SDRAM: DDR4-3200 (intégrée)\n" +
        "Stockage SSD M.2 de 1To\n" +
        "Graphique Intel Iris Xe\n" +
        "Ecran Tactile IPS 14 pouces FHD (1920x1080)\n" +
        "Localisation : Colobane, Dakar",
    },
    {
        id: "p-332",
        name: "Hp 6300 core i3 + 19\"",
        price: 225000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "i3", "19 pouces", "4go", "500go", "neuf"],
        image: "./IMG/Hp 6300 core i3+ 19/1.webp",
        details: [
            "Neuf",
            "Noir",
            "HP",
            "500GO",
            "4GO",
            "Intel Core i3 3.3GHz",
        ],
        desc: "Hp pro 6300 microtower avec écran 19 pouces NEUFS.\n" +
            "Core i3 de 3.0GHz et plus.\n" +
            "Mémoire 4 Go extensible à 8Go.\n" +
            "Disque dur 500 Go extensible à 1 To.\n" +
            "Graveur DVD. Windows 10 Professionnel 64 bits, Office, antivirus et utilitaires (Acrobat Reader, etc.).\n" +
            "Prêt à l'emploi et garanti.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
    {
        id: "p-333",
        name: "Hp 6300 core I5+19",
        price: 240000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "i5", "19 pouces", "4go", "500go", "neuf"],
        image: "./IMG/Hp 6300 core I5+19/1.webp",
        details: ["Neuf", "Noir", "HP", "500GO", "4GO", "Intel Core i5 3.0-3.8GHz"],
        desc: "ENSEMBLE COMPLET ET NEUF Hp pro 6300 microtower core I5 avec écran 19 pouces.\n" +
            "Core i5 3GHz à 3,8GHz.\n" +
            "Mémoire 4 Go extensible à 16Go.\n" +
            "Disque dur 500 Go (disponible aussi en 1000 Go).\n" +
            "Graveur DVD.\n" +
            "Windows 10 Professionnel 64 bits, Office, antivirus et utilitaires (Acrobat Reader, etc.).\n" +
            "Prêt à l'emploi et garanti.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
    {
        id: "p-334",
        name: "Hp 6300 core i7+ 19\"",
        price: 290000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "i7", "19 pouces", "8go", "500go", "neuf"],
        image: "./IMG/Hp 6300 core i7+ 19/1.webp",
        details: ["Neuf", "Noir", "HP", "500GO", "8GO", "Intel Core i7 3.0-3.6GHz"],
        desc: "Hp pro 6300 microtower+ écran 19 pouces tout neuf.\n" +
            "Intel Core i7 de 3 Ghz à 3.6ghz - 4 coeurs - Turbo : 3,9Ghz. Cache : 8 Mo.\n" +
            "Disque dur : 500 Go extensible 1000 GO - Mémoire Ram : 8Go extensible à 16go.\n" +
            "Cartes graphiques de 2 ou 4 go en option -.\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
    {
        id: "p-335",
        name: "HP 6300 CORE2+ECRAN 20 POUCES NEUFS",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "core2", "20 pouces", "4go", "256ssd", "500go", "neuf"],
        image: "./IMG/HP 6300 CORE2+ECRAN 20 POUCES NEUFS/1.webp",
        details: ["Neuf", "Noir", "HP", "256Go SSD ou 500Go SATA", "4Go", "Intel Pentium/Core 2 Duo 2.9GHz"],
        desc: "ENSEMBLE COMPLET ET NEUF Hp pro 6300 - écran 20 pouces\n" +
            "Intel Pentium Core 2, Duo ou R 2.9 ghz. Mémoire 4 go extensible à 16GO.\n" +
            "Disque dur: ssd 256 go ou 500 go sata Graveur dvd.\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,) Prêt à l'emploi et garanti.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
    {
      id: "p-336",
      name: "Lenovo T14 Core i7 12 ème.14\" Tactile.16Go.512 Go",
      price: 350000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "Lenovo",
      tags: ["laptop", "lenovo", "windows", "tactile", "14 pouces", "i7", "12ème gen", "16go", "512ssd", "thinkpad"],
      image: "./IMG/Lenovo T14 Core i7 12 ème.14  Tactile.16Go.512 Go/1.jpg",
      details: ["Réconditionné", "NOIR", "Lenovo", "512 SSD", "16GO", "Intel Core i7-1255U"],
      desc:
        "Lenovo ThinkPad E14 Core i7 12 ème 14 pouces Tactile,16Go.512 Go (RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n" +
        "Processeur Intel Core i7-1255U (jusqu'à 4.7 GHz Turbo - Cache 12 Mo)\n" +
        "16 Go de mémoire DDR4 3200\n" +
        "Ecran IPS de 14\" TACTILE avec résolution Full HD (1920 x 1080 pixels)\n" +
        "SSD M.2 PCIe de 512 Go\n" +
        "Communication sans fil Wi‑Fi AX + Bluetooth 5.1\n" +
        "Clavier à touches rétroéclairées\n" +
        "Webcam IR HD 720p avec cache ThinkShutter, compatible Windows Hello\n" +
        "Adaptateur secteur 65 Watts avec connecteur USB Type C\n" +
        "Système d'exploitation installé et suite office : Microsoft Windows 10 OU 11 Professionnel 64 bits /OFFICE 2019\n" +
        "Localisation : Colobane, Dakar",
    },
    {
        id: "p-337",
        name: "LENOVO Yoga X360 11,6\" TACTILE Core i5 7ème 8Go 256Go",
        price: 99000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "Lenovo",
        tags: ["laptop", "lenovo", "windows", "yoga", "x360", "tactile", "i5", "8go", "256ssd", "11,6 pouces"],
        image: "./IMG/LENOVO Yoga X360.11,6 TACTILECore I5 7ème .8Go.256Go/1.jpg",
        details: [
            "Réconditionné",
            "NOIR, GRIS, ROUGE....",
            "Lenovo",
            "256SSD",
            "8GO",
            "CORE I5-7200U"
        ],
        desc:
            "LENOVO ThinkPad Yoga 11E G4 Core i5 7ème génération. RAM 8GO. SSD 256GO. 11,6\" TACTILE X360 (Reconditionné dans son carton LENOVO)\n" +
            "Processeur Intel Core i5-7200U (2,5 GHz jusqu'à 3,1 GHz)\n" +
            "Mémoire 8 Go\n" +
            "Stockage SSD : 256 Go\n" +
            "Écran tactile 11,6\" X360 — Résolution HD (1366 x 768) — Rétractable\n" +
            "Carte graphique Intel UHD Graphics 620\n" +
            "Connectivité : Wi‑Fi 802.11ac (Wi‑Fi 5), Bluetooth 4.2\n" +
            "Ports : 2 x USB 3.0, 1 x HDMI, 1 x jack audio\n" +
            "Localisation : Colobane, Dakar",
    },
    {
      id: "p-338",
      name: "LENOVO YOGA X360 TACTILE 11 Intel PENTIUM",
      price: 80000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "Lenovo",
      tags: ["laptop", "lenovo", "windows", "yoga", "x360", "tactile", "pentium", "11,6 pouces", "8go", "128ssd"],
      image: "./IMG/LENOVO YOGA X360 TACTILLE 11 Intel PENTIUM/1.jpg",
      details: [
        "Réconditionné",
        "NOIR, GRISE, BLEU, VERT, ROUGE, ROSE, VIOLET.....",
        "Lenovo",
        "128 SSD",
        "8GO",
        "INTEL PENTIUM",
      ],
      desc:
        "Ordinateur Portable Lenovo x360 .écran11.6 pouces tactile. Processeur INTEL PENTIUM\n" +
        "Disque dur 128 go ssd extensible à 512go. Mémoire Ram 8go\n" +
        "Ordinateur portable et\n" +
        "Tablette en même temps très puissant pour étudiants et professionnels.\n" +
        "Dans son carton d origine LENOVO\n" +
        "À partir du prix indiqué\n" +
        "Localisation : Colobane, Dakar",
    },
    {
      id: "p-339",
      name: "MINI PC DELL, HP, LENOVO NEUF OU VENANT",
      price: 50000,
      stock: "En stock",
      category: "computers",
      subcategory: "Mini PC",
      brand: "Dell",
      tags: ["mini pc", "desktop", "neuf", "venant", "dell", "hp", "lenovo"],
      image: "./IMG/MINI PC DELL , HP, LENOVO NEUF OU VENANT/1.jpg",
      details: [
        "Neuf ou Venants",
        "NOIR",
        "Dell/HP/Lenovo",
        "Intel 2.5GHz et plus",
        "4/8/16GO",
        "128 à 256 GO SSD",
        "Écran 19 à 24 pouces (option)"
      ],
      desc:
        "NOUS VENDONS DES MINI PC DELL NEUFS, HP, LENOVO VENANTS\n" +
        "A) MINI PC DELL NEUF UC SEULEMENT SANS ÉCRAN\n" +
        "Processeur Intel 2.5GHz et plus\n" +
        "Mémoire: 4, 8, et 16Go\n" +
          "Disque: 128 à 256 Go SSD\n" +
        "À partir de 60 000 FCFA\n" +
        "B) HP, LENOVO, DELL VENANT AVEC ÉCRAN\n" +
        "Processeur Intel Core i3, i5, i7\n" +
        "Mémoire: 4, 8, et 16Go\n" +
        "Disque: 250 Go, 320 Go à 500 Go ou 128 à 256 Go SSD\n" +
        "Écran 19 à 24 pouces\n" +
        "À partir de 50 000 FCFA\n" +
        "Localisation : Colobane, Dakar",
    },
    {
      id: "p-340",
      name: "Ordinateur +19 pouces",
      price: 40000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "Lenovo",
      tags: ["Ordinateur de bureau", "lenovo", "windows", "core 2 duo", "celeron", "4go", "250go", "19 pouces", "desktop"],
      image: "./IMG/Ordinateur+19 pouces/1.jpg",
      details: [
        "D'occasion",
        "Lenovo",
        "3GHz",
        "4Go",
        "250Go"
      ],
      desc:
        "Ordinateurs complets avec écran 19 pouces en Lenovo, Dell et HP selon stock : Pentium Core 2 Duo ou Celeron. 2.6 GHz à 3 GHz, 4 Go de mémoire RAM, disque dur 250 Go.\n" +
        "Wifi en option. Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
        "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
        "Tous nos produits sont garantis.\n" +
        "Localisation : Gueule‑Tapée, Dakar",
    },
    {
        id: "p-341",
        name: "Ordinateur+19ecran.core2.2go.80go",
        price: 35000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows", "core 2 duo", "2go", "80go", "19 pouces", "desktop"],
        image: "./IMG/Ordinateur+19ecran.core2.2go.80go/1.jpg",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "80Go",
            "2Go",
            "2.6GHz"
        ],
        desc: "Ordinateurs complets en LENOVO, Dell et HP selon stock :Pentium Core 2 duo 2,6ghz à 3ghz , 2 à 4 go de mémoire ram ,disque dur 80,160 ou 250 go et écran 19 pouces . Wifi en option.Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet .TOUS NOS PRODUITS SONT GARANTIS.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
    {
        id: "p-342",
        name: "Ordinateur.Intel core2.HP, Dell, lenovo et Acer",
        price: 35000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "dell", "lenovo", "acer", "windows", "core 2 duo", "2go", "80go", "17 pouces", "19 pouces", "desktop"],
        image: "./IMG/Ordinateur.Intel core2.HP, Dell, lenovo et Acer/1.jpg",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "80Go",
            "2Go",
            "2.6GHz"
        ],
        desc: "Ordinateurs complets en HP, Dell, lenovo et Acer selon stock :\n" +
            "Pentium Core 2 duo 2,6ghz à 3ghz, 2 à 4 go de mémoire ram, disque dur 80,160 ou 250 go et écran 17 à 19 pouces.\n" +
            "Wifi en option. Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet .\n" +
            "TOUS NOS PRODUITS SONT GARANTIS\n" +
            "Localisation : Colobane, Dakar",
    },
    {
        id: "p-343",
        name: "ORDINATEUR COMPLET avec ONDULEUR+Wi‑Fi",
        price: 65000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "i3", "19 pouces", "4go", "250go", "onduleur", "wifi"],
        image: "./IMG/ORDINATEUR COMPLET avec ONDULEUR+Wi-Fi/1.jpg",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "250Go",
            "4Go",
            "Intel Core i3 3.3GHz"
        ],
        desc: "Ordinateurs complets avec écran 19 pouces et unité centrale\n" +
            "Core i3 3.3 GHz, 4 Go de mémoire RAM, disque dur 250 Go à 500 Go\n" +
            "Wi‑Fi et onduleur en option, Windows 10 Pro, Office, Antivirus etc... Prêt à l'emploi\n" +
            "Machines idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet\n" +
            "Tous nos produits sont garantis\n" +
            "Localisation : Colobane, Dakar",
    },
    {
        id: "p-344",
        name: "ORDINATEUR COMPLET ECRAN 19 POUCES",
        price: 35000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows", "core 2 duo", "celeron", "2go", "80go", "19 pouces", "desktop"],
        image: "./IMG/ORDINATEUR COMPLET ECRAN 19 POUCES/1.jpg",
        details: ["D'occasion", "Gris Noir", "HP", "80Go", "2Go", "2.6GHz"],
        desc: "Ordinateurs complets avec écran 19 pouces en , HP , lenovo, acer selon stock : Processeur Core 2 duo ou Celeron. Vitesse de 2.6 Ghz à 3 Ghz,\n" +
            "Mémoire Ram 2go extensible à 4 go\n" +
            "Disque dur de 80go DISPONIBLE aussi en 160 et 250go\n" +
            "Wifi en option\n" +
            "Windows 10 Pro, office, antivirus etc... prêt à l'emploi ..\n" +
            "Machines pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
            "Tous nos produits sont garantis\n" +
            "Localisation : Colobane, Dakar",
    },
    {
        id: "p-345",
        name: "Ordinateur Core i5",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "i5", "19 pouces", "4go", "500go", "colobane"],
        image: "./IMG/Ordinateur core i5/1.jpg",
        details: ["D'occasion", "NOIR", "HP", "500 Go", "4GO", "Core i5 3.20GHz"],
        desc: "Ordinateurs complets avec écran 19\" en HP LENOVO ET ACER: Core i5 3.20 ghz, 4 go de mémoire Ram , disque dur 500 go . Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
            "Tous nos produits sont garantis.\n" +
            "Localisation : Colobane, Dakar"
    },
    {
        id: "p-346",
        name: "Ordinateur Core2",
        price: 35000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows", "core 2 duo", "2go", "160go", "19 pouces", "desktop"],
        image: "./IMG/Ordinateur Core2/1.jpg",
        details: ["D'occasion", "Noir", "HP", "160Go", "2Go", "2.6GHz"],
        desc:
            "Ordinateurs complets en LENOVO, Dell et HP selon stock :Pentium Core 2 duo 2,6ghz à 3ghz , 2go de mémoire ram, 160 go de disque dur et écran 19 pouces .\n" +
            "Disponibles aussi avec 4go de mémoire et 250Go de disque pour un petit supplément.\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet .TOUS NOS PRODUITS SONT GARANTIS.\n" +
            "Localisation : Gueule‑Tapée, Dakar",
    },
{
  id: "p-347",
  name: "Ordinateur Dual core.+19\"",
  price: 40000,
  stock: "En stock",
  category: "computers",
  subcategory: "Ordinateurs de bureau",
  brand: "Dell",
  tags: ["desktop", "dell", "windows", "dual core", "4go", "250go", "19 pouces"],
  image: "./IMG/Ordinateur Dual core.+19/1.jpg",
  details: ["D'occasion", "Noir", "Dell", "250Go", "4GO", "2.6GHz"],
  desc: "Ordinateurs complets en HP et Dell selon stock :Dual Core 2,60 à 3.2 ghz , 4go de mémoire ram, 250 go de disque dur et écran 19 pouces . Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet .TOUS NOS PRODUITS SONT GARANTIS.\n" +
    "Localisation : Gueule‑Tapée, Dakar",
},
   {
      id: "p-348",
      name: "Ordinateur portable LENOVO, HP, DELL",
      price: 90000,
      stock: "En stock",
      category: "computers",
      subcategory: "Laptops",
      brand: "Lenovo",
      tags: ["laptop", "lenovo", "hp", "dell", "windows", "8go", "256ssd", "500go", "i3", "i5"],
      image: "./IMG/Ordinateur portable LENOVO,HP, DELL,/1.jpg",
      details: [
        "Réconditionné",
        "NOIR/GRIS",
        "Dell/HP/Lenovo",
        "500Go et 256Go SSD",
        "8GO",
        "Core i3 5ème ou Core i5 6ème"
      ],
      desc: "Ordinateur portable LENOVO, HP ou DELL selon stock (RECONDITIONNE)\n" +
           "Processeur : Core i3 5ème génération ou Core i5 6ème génération\n" +
           "Mémoire : 8 Go\n" +
           "Stockage : 500 Go HDD et/ou 256 Go SSD\n" +
           "Système : Windows 10 Professionnel, Office et utilitaires installés\n" +
           "Localisation : Colobane, Dakar",
    },
{
      id: "p-349",
      name: "Ordinateur wifi 4go + 19",
      price: 40000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "HP",
      tags: ["desktop", "hp", "windows", "wifi", "4go", "250go", "19 pouces"],
      image: "./IMG/Ordinateur wifi 4go + 19/1.jpg",
      details: ["D'occasion", "Noir", "HP", "250Go", "4Go", "2.6GHz"],
      desc: "Ordinateurs complets avec écran 19 pouces en lenovo, Dell et HP selon stock : Pentium ,core 2 duo ou Celeron. 2.6 Ghz à 3 Ghz, 4 go de mémoire ram, disque dur 250 go. Wifi en option Windows 10 Pro, office, antivirus etc... prêt à l'emploi .. machines puissantes idéales pour transfèrt d'argent, multiservices et tous travaux de bureau et d'internet. Tous nos produits sont garantis.\n" +
           "Localisation : Gueule‑Tapée, Dakar",
    },
    {
      id: "p-350",
      name: "ORDINATEURS FIXE CORE i3 , 19\" Pouces",
      price: 45000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "HP",
      tags: ["desktop", "hp", "windows", "i3", "4go", "250go", "19 pouces", "colobane"],
      image: "./IMG/ORDINATEURS FIXE CORE i3 , 19 Pouces/1.jpg",
      details: ["D'occasion", "Noir", "HP", "250Go", "4Go", "Intel Core i3 3.3GHz"],
      desc:
        "Ordinateurs complets avec écran 19 pouces en Lenovo et HP selon stock :\n" +
        "Core i3 3.3 ghz, 4 go de mémoire Ram ,\n" +
        "Disque Dur 250 go.\n" +
        "Wifi en option , Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n\n" +
        "Machines puissantes idéales pour transfère d'argent, multiservices et tous travaux de bureau et d'internet.\n\n" +
        "Tous nos produits sont garantis\n" +
        "Localisation : Colobane, Dakar"
    },
    {
      id: "p-351",
      name: "ORDINATEURS FIXE CORE i3 , 19 Pouces",
      price: 45000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "HP",
      tags: ["desktop", "hp", "windows", "i3", "4go", "250go", "19 pouces", "colobane"],
      image: "./IMG/ORDINATEURS FIXE CORE i3 , 19” Pouces/1.jpg",
      details: ["D'occasion", "Noir", "HP", "250Go", "4Go", "Intel Core i3 3.3GHz"],
      desc:
        "Ordinateurs complets avec écran 19 pouces en Lenovo et HP selon stock :\n" +
        "Core i3 3.3 ghz, 4 go de mémoire Ram ,\n" +
        "Disque Dur 250 go.\n" +
        "Wifi en option , Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n\n" +
        "Machines puissantes idéales pour transfère d'argent, multiservices et tous travaux de bureau et d'internet.\n\n" +
        "Tous nos produits sont garantis\n" +
        "Localisation : Colobane, Dakar",
    },
    {
          id: "p-352",
          name: "ORDINATEURS FIXE 19” Pouces Complets",
          price: 40000,
          stock: "En stock",
          category: "computers",
          subcategory: "Ordinateurs de bureau",
          brand: "Acer",
          tags: ["desktop", "acer", "windows", "pentium", "4go", "250go", "128ssd", "19 pouces"],
          image: "./IMG/ORDINATEURS FIXE 19” Pouces Complets/1.jpg",
          details: ["D'occasion", "Noir", "Acer", "250Go SATA ou 128Go SSD", "4Go", "INTEL PENTIUM"],
          desc: "Ordinateurs complets avec écran 19 pouces\n" +
            "Marque: LENOVO, DELL,ACER ET HP\n" +
            "Selon stock : PENTIUM ,CORE 2 DUO ou CELERON\n" +
            "Processeur 2.6 Ghz à 3 Ghz, 4 go de mémoire ram,\n" +
            "Disque dur 250 go SATA ou 128 GO SSD .\n" +
            "Wifi en option\n" +
            "Windows 10 Pro, office, antivirus etc... prêt à l'emploi ..\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
            "Tous nos produits sont garantis.\n" +
            "Localisation : Colobane, Dakar",
        },
    {
      id: "p-353",
      name: "ORDINATEURS FIXE CORE i7 ECRAN 20 à 22” POUCES",
      price: 80000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "Acer",
      tags: ["desktop", "acer", "windows", "i7", "8go", "500go", "20 pouces", "22 pouces"],
      image: "./IMG/ORDINATEURS FIXE CORE 17 ECRAN 20 à 22” POUCES/1.jpg",
      details: ["D'occasion", "Noir", "Acer", "500Go ou 256Go SSD", "8GO", "Intel Core i7 (2ème à 7ème gen)"],
      desc: "NOUS VENDONS DES ORDINATEURS FIXES HP DELL ACER ET LENOVO SELON STOCK.\n" +
            "PROCESSEUR: CORE I7 DE LA 2 EME A LA 7 EME GENERATION\n" +
            "RAM: 8GO EXTENSIBLE A 16GO\n" +
            "DISQUE DUR : 500Go OU 256 GO SSD\n" +
            "ÉCRAN: 20 A 22 POUCES\n" +
            "A PARTIR DU PRIX INDIQUE\n" +
            "Localisation : Colobane, Dakar",
    },
    {
      id: "p-354",
      name: "ORDINATEURS FIXE HP CORE I7.8GO , 22” POUCES",
      price: 90000,
      stock: "En stock",
      category: "computers",
      subcategory: "Ordinateurs de bureau",
      brand: "HP",
      tags: ["desktop", "hp", "windows", "i7", "8go", "500go", "22 pouces", "24 pouces"],
      image: "./IMG/ORDINQTEURS FIXE HP CORE I7.8GO , 22” POUCES/1.jpg",
      details: [
        "D'occasion",
        "Noir",
        "HP",
        "500Go",
        "8GO",
        "Intel Core i7 3.0GHz et plus"
      ],
      desc: "NOUS VENDONS DES ORDINATEURS FIXES DISPONIBLES EN HP DELL LENOVO SELON STOCK EN TOUR OU DESKTOPS.\n" +
            "PROCESSEUR: CORE I7 de la 2 ème à la 7 -ème génération .\n" +
            "RAM: 8GO EXTENSIBLE A 16GO\n" +
            "DISQUE DUR : 500go\n" +
            "ÉCRAN: 22 à 24 POUCES\n" +
            "A PARTIR DU PRIX INDIQUE\n" +
            "Localisation : Colobane, Dakar",
    },
    {
        id: "p-355",
        name: "PROMO🔥 HP ELITEBOOK 840 G8 14” 11éme Gén",
        price: 300000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows", "elitebook", "840 g8", "i5", "11ème gen", "16go", "512ssd", "14 pouces", "promo", "colobane"],
        image: "./IMG/HP ELITEBOOK 840 G8 14” 11éme Gén/1.jpg",
        details: [
            "Réconditionné",
            "GRIS",
            "HP",
            "512 SSD",
            "16GO",
            "CORE I5 11ème"
        ],
        desc: "ORDINATEUR PORTABLE 840 G8\n" +
            "Processeur : Core i5 11 ème gen. Ecran 14 pouces\n" +
            "Ram : 16go Extensible à 32go\n" +
            "Disque dur : 512 Ssd extensible à 1TERA\n\n" +
            "A NE PAS RATER\n" +
            "CONTACTER NOUS POUR EN PROFITER\n" +
            "Localisation : Colobane, Dakar",
    },
    {
        id: "p-356",
        name: "ThinkPad 13 Core i5-6ème. 8Go. 256Go SSD. 13,3\"",
        price: 90000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "Lenovo",
        tags: ["laptop", "lenovo", "windows", "thinkpad", "i5", "6ème gen", "8go", "256ssd", "13,3 pouces", "fhd", "ips"],
        image: "./IMG/ThinkPad 13 Core i5-6eme. 8 Go. SSD de 256 Go. 13,3 pouces/1.jpg",
        details: [
            "Réconditionné",
            "GRIS",
            "Lenovo",
            "256SSD",
            "8GO",
            "CORE I5 6ème"
        ],
        desc: "Lenovo ThinkPad 13 Intel Core i5-6200U/6300U 8 Go de RAM 256 Go SSD\n" +
            "Couleur GRISE\n" +
            "NOIRE TERMINÉE\n" +
            "Processeur : Intel Core i5 de 6-ème génération. (Vitesse de 2,4 à 3 GHz)\n" +
            "Mémoire : 8 Go de RAM extensible à 16 Go et +.\n" +
            "Stockage : SSD 256 Go extensible à 512 Go et + .\n" +
            "Écran (13.3\") 33,8 cm Full HD 1920 x 1080 pixels IPS Rétroéclairage à LED Mat 16:9\n" +
            "Connectivité : avec prise en charge des signaux sans fil 802.11 AC.Bluetooth\n" +
            "Ports : 2 x USB 3.0. 1 x USB 3.0 (alimenté). 1 x USB-C. 1 x HDMI. OneLink+. Lecteur de cartes 4 en 1 (SD, SD-HC, D-XC, MMC). 1 x prise combinée casque/microphone.\n" +
            "Système d'exploitation et suite office : Microsoft Windows 11 Professionnel 64 bits /OFFICE 2019\n" +
            "Localisation : Colobane, Dakar\n" +
            "Type de produit : Reconditionné",
    },
{
  id: "p-357",
  name: "X360 11,6 HP Dell Lenovo",
  price: 75000,
  stock: "En stock",
  category: "computers",
  subcategory: "Laptops",
  brand: "Dell",
  tags: ["laptop", "hp", "dell", "lenovo", "windows", "x360", "tactile", "11,6 pouces", "pentium", "4go", "128ssd", "colobane"],
  image: "./IMG/X360.11,6.Hp Dell lenovo/1.jpg",
  details: [
    "Réconditionné",
    "NOIR, ROUGE, JAUNE",
    "Lenovo/HP/Dell",
    "128Go SSD",
    "4GO",
    "INTEL PENTIUM"
  ],
  desc:
    "Lenovo, Dell et HP X360 écran 11,6 pouces.\n" +
    "Processeur Intel.\n" +
    "Disque dur 128 ou 256 Go SSD.\n" +
    "Mémoire Ram 4 ou 8 Go.\n" +
    "Tablette avec écran tactile en même temps, très léger pour étudiants et professionnels.\n" +
    "À partir du prix indiqué\n" +
    "Localisation : Colobane, Dakar",
},
{
  id: "p-358",
  name: "X360 TACTILE DELL, LENOVO 11.6\"",
  price: 80000,
  stock: "En stock",
  category: "computers",
  subcategory: "Laptops",
  brand: "Dell",
  tags: ["laptop", "dell", "lenovo", "hp", "windows", "x360", "tactile", "11,6 pouces", "pentium", "4go", "8go", "128ssd", "256ssd", "colobane"],
  image: "./IMG/X360 TACTILE DELL, LENOVO 11,6/1.jpg",
  details: [
    "Réconditionné",
    "NOIR",
    "Dell/Lenovo/HP",
    "128 à 256 GO SSD",
    "4 à 8GO",
    "INTEL PENTIUM"
  ],
  desc:
    "NOUS VENDONS DES PORTABLES X360 TACTILE DELL, LENOVO, ET HP SELON STOCK\n" +
    "PROCESSEUR INTEL\n" +
    "MEMOIRE 4 à 8 GO\n" +
    "DISQUE DUR 128 à 256 GO SSD\n" +
    "ECRAN 11.6 POUCES TACTILE\n" +
    "A PARTIR DU PRIX INDIQUE\n" +
    "Localisation : Colobane, Dakar",
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

    details: ["Neuf", "Blanc", "TP-Link"],
    desc:
      "TP LINK 150Mbps wireless N ADSL2+ Modem Router\n" +
      "APARTIR DU PRIX INDIQUER CI DESSUS",
  },
  {
    id: "p-37",
    name: "Imprimante Laser et Multifonction Laser Noir HP",
    price: 60000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["HP", "laser", "monochrome", "multifonction", "imprimante"],
    image: "./IMG/Imprimante Laser et Multifonction Laser Noir HP/1.jpg",
    desc:
      "Nous proposons une imprimante laser et multifonction HP performante et économique.\n\n" +
      "A) Imprimante Laser monochrome jusqu'à 22 pages par minute sur papier A4.\n" +
      "Formats pris en charge : A4, A5, A6, B5 (JIS) et 76 x 127 à 216 x 356 mm.\n" +
      "Capacité maximale : 150 feuilles.\n\n" +
      "B) Imprimante Multifonction Laser Monochrome HP : impression, copie, scan et fax.\n" +
      "Vitesse d'impression noir : jusqu'à 22 ppm.\n" +
      "Volume de pages mensuel recommandé : 150 à 1500 pages/mois.\n" +
      "Impression recto/verso : manuelle.\n\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Blanc", "HP"],
  },

  {
    id: "p-38",
    name: "Imprimante Laser Noir RICOH SP 4510DN",
    price: 70000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "RICOH",
    tags: ["RICOH", "laser", "monochrome", "imprimante", "recto-verso"],
    image: "./IMG/Imprimante Laser Noir RICOH SP 4510DN/1.jpg",
    desc:
      "Imprimante Laser Noir RICOH SP 4510DN performante et rapide.\n\n" +
      "• Vitesse d'impression (noir, A4) : 40 ppm.\n" +
      "• Format de papier : A4.\n" +
      "• Impression recto/verso automatique.\n" +
      "• Écran LCD N&B.\n" +
      "• Première page imprimée en seulement 5 secondes.\n" +
      "• Cycle d'utilisation mensuel recommandé : 3000 à 10000 pages / mois.\n" +
      "• Résolution d'impression maximale : 1200 x 1200 ppp.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Blanc", "RICOH"],
  },

  {
    id: "p-40",
    name: "Imprimante LEXMARK CS510 DE",
    price: 75000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "LEXMARK",
    tags: [
      "LEXMARK",
      "laser",
      "couleur",
      "multifonction",
      "recto-verso",
      "imprimante",
    ],
    image: "./IMG/IMPRIMANTE LEXMARK CS510 DE/1.jpg",
    desc:
      "Imprimante LEXMARK CS510 DE LASER COULEUR, idéale pour les petites et moyennes entreprises.\n\n" +
      "• Gestion du recto-verso automatique.\n" +
      "• Bac d’alimentation de 1 450 feuilles.\n" +
      "• Port Ethernet Gigabit pour la connexion réseau.\n" +
      "• Port USB intégré.\n" +
      "• Écran tactile couleur de 17,8 cm pour un contrôle intuitif.\n" +
      "• Modèle sans Wi-Fi intégré.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Blanc", "LEXMARK"],
  },
  {
    id: "p-43",
    name: "ECRAN DELL 24 POUCES",
    price: 40000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: [
      "écran",
      "dell",
      "24 pouces",
      "monitor",
      "affichage",
      "video",
      "resolution",
      "bureau",
      "desktop",
      "ordinateur fixe",
      "windows",
    ],
    image: "./IMG/ECRAN DELL 24 POUCES/1.jpg",
    desc:
      "Nous vendons des écrans 24 pouces de marque Dell.\n" +
      "Écran idéal pour le bureau, la maison ou les environnements professionnels.\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Noir", "Dell"],
  },
  {
    id: "p-205",
    name: "CHARGEUR DELL 19,5 V 6,7 A",
    price: 20000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: [
      "chargeur",
      "dell",
      "adaptateur",
      "19.5V",
      "6.7A",
      "laptop",
      "ordinateur",
      "ac/dc",
      "batterie",
    ],
    image: "./IMG/CHARGEUR DELL 19,5 V 6,7 A/2.jpg",
    desc:
      "Adaptateur AC/DC Dell 130 W – 19,5 V 6,7 A.\n\n" +
      "• Type : Chargeur filaire pour ordinateur portable.\n" +
      "• Connecteur : PINE.\n" +
      "• Contenu : Câble d’alimentation et chargeur.\n" +
      "• Idéal pour remplacer ou avoir un adaptateur supplémentaire.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Noir", "Dell"],
  },
  {
    id: "p-203",
    name: "CHARGEUR DELL 19.5V 4.26A",
    price: 8000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: [
      "chargeur",
      "dell",
      "adaptateur",
      "19.5V",
      "4.26A",
      "laptop",
      "ordinateur",
      "ac/dc",
      "batterie",
      "Pine",
    ],
    image: "./IMG/CHARGEUR DELL 19.5V/1.jpg",
    desc:
      "Chargeur Dell 19.5V – 4.26A.\n\n" +
      "• Connecteur : PINE.\n" +
      "• Idéal pour remplacer ou avoir un chargeur supplémentaire.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Réconditionné", "Noir", "Dell"],
  },

  {
    id: "p-204",
    name: "CLAVIER HP CS700 SANS FIL",
    price: 10000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HP",
    tags: [
      "clavier",
      "hp",
      "sans fil",
      "wireless",
      "bluetooth",
      "cs700",
      "ordinateur",
      "pc",
      "bureau",
      "accessoire",
    ],
    image: "./IMG/CLAVIER HP CS700 SANS FIL/1.jpg",
    desc:
      "Clavier HP CS700 sans fil – connexion Bluetooth.\n\n" +
      "• Type : Clavier sans fil.\n" +
      "• Couleur : Noir.\n" +
      "• Modèle : HP CS700.\n" +
      "• Design ergonomique pour un confort optimal.\n" +
      "• Idéal pour bureau, maison ou usage professionnel.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir", "HP"],
  },
{
  id: "p-211",
  name: "TAPIS SOURIS POUR ORDINATEUR",
  price: 1000,
  stock: "En stock",
  category: "peripherals",
  subcategory: "Accessoires",
  brand: "",
  tags: [
    "tapis souris",
    "souris",
    "ordinateur",
    "pc",
    "portable",
    "fixe",
    "bureau",
    "accessoire",
    "gaming",
    "confort",
    "noir",
    "vert"
  ],
  image: "./IMG/TAPIS SOURIS/1.jpg",
  details: [
    "Neuf",
    "Noir / Vert",
    
  ],
  desc: "Tapis souris pour ordinateur portable ou fixe.\n\nDesign confortable et résistant.\nParfait pour usage bureautique, gaming ou professionnel.\nDisponible à Colobane – Dakar.\nÀ partir du prix indiqué."
}
,
  {
    id: "p-44",
    name: "ECRAN HP 20 POUCES HDMI",
    price: 120000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "HP",
    tags: [
      "écran",
      "HP",
      "20 pouces",
      "HDMI",
      "VGA",
      "HD+",
      "TN",
      "bureau",
      "desktop",
      "ordinateur fixe",
      "affichage",
      "resolution",
    ],
    image: "./IMG/ECRAN HP 20 POUCES HDMI/1.jpg",
    desc:
      "Écran HP 20 pouces neuf avec ports HDMI et VGA.\n\n" +
      "• Résolution : 1600 x 900 (HD+).\n" +
      "• Taux de rafraîchissement : 60 Hz.\n" +
      "• Type de dalle : TN.\n" +
      "• Luminosité : 200 cd/m².\n" +
      "• Contraste : 600:1.\n" +
      "• Temps de réponse : 1 ms.\n" +
      "• Taille : 20 pouces (50,8 cm).\n\n" +
      "Idéal pour une utilisation bureautique ou multimédia.\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir", "HP"],
  },

  {
    id: "p-51",
    name: "ONDULEUR 725 à 1000 VA",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Générique",
    tags: [
      "onduleur",
      "ups",
      "in line",
      "interactive",
      "protection",
      "alimentation",
      "stabilisateur",
    ],
    image: "./IMG/ONDULEUR 725 à 1000 VA/1.jpg",
    desc:
      "Onduleurs in line interactifs de 725 à 1000 VA.\n\n" +
      "• Type : In Line Interactive.\n" +
      "• Puissance : de 725 VA à 1000 VA selon modèle disponible.\n" +
      "• Fournit une protection fiable contre les surtensions et coupures.\n" +
      "• Idéal pour ordinateurs, équipements réseau et appareils sensibles.\n" +
      "• Design compact et silencieux.\n\n" +
      "Disponible à Gueule-Tapée – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir"],
  },

  {
    id: "p-206",
    name: "PHOTOCOPIEUR MULTIFONCTION LASER COULEUR RICOH",
    price: 200000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Photocopieurs",
    brand: "Ricoh",
    tags: [
      "photocopieur",
      "multifonction",
      "laser couleur",
      "recto verso",
      "scanner",
      "fax",
      "imprimante",
      "WiFi",
      "A4",
      "MP C307",
      "1200x1200 dpi",
      "30ppm",
      "réseau",
      "bureau",
      "réconditionné",
    ],
    image: "./IMG/PHOTOCOPIEUR MULTIFONCTION LASER COULEUR RICOH/1.jpg",
    details: ["Réconditionné", " Blanc", "Richo"],
    desc: "Photocopieur multifonction laser couleur Ricoh MP C307.\nType : multifonction recto/verso.\nFonctions : impression, photocopie, scan, fax, réseau.\nRésolution : 1200×1200 DPI.\nFormat : A4.\nConnectivité : Wi-Fi.\nIdéal pour le bureau et les petites entreprises.\nVitesse d'impression : 30 pages par minute, Duplex recto verso automatique,Connexion Wi-Fi",
  },

  {
    id: "p-64",
    name: "ALIMENTATION DL 380 DPS-600 PB B 575 W",
    price: 40000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "BOITE D'ALIMENTATION PC",
    brand: "HP",
    tags: [
      "HP",
      "serveur",
      "DPS-600PB",
      "DL380",
      "réconditionné",
      "alimentations",
      "boite",
    ],
    image: "./IMG/Alimentation DL 380 DPS-600 PB B 575 W/4.jpg",
    desc:
      "Occasion-Bon état.\n" +
      "Modèle: DPS-600PB BP/N: 321632-501 GP/N. 367238-501\n" +
      "Puissance: 575W\n" +
      "Entrée: AC 100-240V input\n" +
      "Compatible avec serveur HP DL 380\n" +
      "Produit de seconde main testé\n" +
      "Garantie: 6 mois",

    details: ["Réconditionné", "Gris", "HP"],
  },

  {
    id: "p-69",
    name: "SOURIS DELL AVEC FIL",
    price: 2000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: [
      "souris",
      "dell",
      "filaire",
      "usb",
      "optique",
      "accessoire",
      "ordinateur",
      "pc",
      "bureau",
    ],
    image: "./IMG/SOURIS DELL AVEC FIL/1.jpg",
    desc:
      "Souris DELL avec fil – modèle MS111-L.\n\n" +
      "• Marque : DELL.\n" +
      "• Référence : 0YR0N4 / YR0N4.\n" +
      "• Type : Filaire.\n" +
      "• Technologie : Optique.\n" +
      "• Résolution : 1000 DPI.\n" +
      "• Boutons : 3 boutons + molette.\n" +
      "• Interface : USB.\n" +
      "• Couleur : Noire et grise.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir / Gris", "Dell"],
  },
  {
    id: "p-200",
    name: "SOURIS HP 2.4 G SANS FIL WIRELESS MOUSE",
    price: 3000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HP",
    tags: [
      "souris",
      "hp",
      "sans fil",
      "wireless",
      "2.4G",
      "usb",
      "ordinateur",
      "portable",
      "accessoire",
      "ergonomique",
    ],
    image: "./IMG/SOURIS HP 2.4 G SANS FIL WIRELESS MOUSE/2.jpg",
    desc:
      "Souris HP 2.4 G sans fil – idéale pour ordinateurs de bureau ou portables.\n\n" +
      "• Type de produit : Souris sans fil.\n" +
      "• Technologie : 2,4 GHz Wireless.\n" +
      "• Portée : jusqu’à 10 mètres.\n" +
      "• Conception ergonomique avec 5 boutons.\n" +
      "• Mise en veille automatique lorsqu’elle n’est pas utilisée.\n" +
      "• Alimentation : 1 pile AAA (non fournie).\n" +
      "• Poids : 0,02 kg.\n" +
      "• Couleur : Noir.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir", "HP"],
  },
  {
    id: "p-201",
    name: "SOURIS HP AVEC FIL WIRED MOUSE X500",
    price: 4000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HP",
    tags: [
      "souris",
      "hp",
      "filaire",
      "usb",
      "x500",
      "optique",
      "wired",
      "accessoire",
      "ordinateur",
      "pc",
    ],
    image: "./IMG/SOURIS HP AVEC FIL WIRED MOUSE X500/1.jpg",
    desc:
      "Souris HP avec fil – modèle Wired Mouse X500.\n\n" +
      "• Type : Souris optique filaire.\n" +
      "• Connexion : USB.\n" +
      "• Installation simple – Plug & Play.\n" +
      "• Design ergonomique pour un confort d’utilisation prolongé.\n" +
      "• Contenu de l’emballage : souris et guide de configuration rapide.\n\n" +
      "Idéale pour les ordinateurs portables et de bureau.\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir", "HP"],
  },
  {
    id: "p-202",
    name: "CLAVIER HP / DELL AVEC FIL",
    price: 3500,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: [
      "clavier",
      "hp",
      "dell",
      "filaire",
      "usb",
      "accessoire",
      "ordinateur",
      "pc",
      "bureau",
    ],
    image: "./IMG/CLAVIER HP  DELL AVEC FIL/1.jpg",
    desc:
      "Clavier HP / DELL avec fil – modèles HP K200 et DELL Keyboard.\n\n" +
      "• Type : Clavier filaire.\n" +
      "• Couleur : Noir.\n" +
      "• Excellente réactivité et confort de frappe.\n" +
      "• Les modèles HP K200 et DELL Keyboard offrent des fonctionnalités avancées et une utilisation simple et efficace.\n\n" +
      "Disponible à Colobane – Dakar.\n" +
      "À partir du prix indiqué.",
    details: ["Neuf", "Noir", "HP / Dell"],
  },

  // Storage - 6 produits
  {
    id: "p-78",
    name: "BARRETTE PORTABLE DDR4",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "RAM",
    brand: "Crucial",
    tags: [
      "ram",
      "DDR4",
      "8go",
      "16go",
      "32go",
      "mémoire",
      "portable",
      "laptop",
      "pc",
      "ordinateur",
      "fixe",
      "windows",
      "mac",
      "linux",
      "gaming",
      "performance",
      "rapide",
      "fiable",
      "durable",
      "efficient",
      "upgrade",
      "system memory",
    ],
    image: "./IMG/BARRETTE PORTABLE 8, 16 et 32GO DDR4/1.jpg",
    details: [
      "Neuf",
      "Vert",
      "Crucial",
      "Disponible en 8 Go, 16 Go et 32 Go DDR4 2666MHz",
    ],
    desc: "Nous vendons des barrettes mémoire pour ordinateurs portables.\nCapacités disponibles :\n- 8 Go DDR4 2666MHz à 15 000 F CFA\n- 16 Go DDR4 2666MHz à 30 000 F CFA\n- 32 Go DDR4 2666MHz à 60 000 F CFA\nParfait pour upgrader la mémoire de votre PC portable et améliorer ses performances.",
  },
  {
    id: "p-80",
    name: "BOÎTIER ET DISQUE EXTERNE WESTERN DIGITAL",
    price: 5000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques externes",
    brand: "WD",
    tags: [
      "boitier externe",
      "disque externe",
      "500go",
      "1000go",
      "USB3",
      "Western Digital",
      "storage",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows",
      "mac",
      "linux",
      "backup",
      "save",
      "fast",
      "reliable",
      "high performance",
      "durable",
      "efficient",
      "storage solution",
      "external storage",
    ],
    image: "./IMG/Boîtier et disque externe western digital/2.jpg",
    details: ["Neuf", "Noir"],
    desc: "Nous vendons des boîtiers externes 2.5'' Western Digital et des disques externes WD.\nPrix indicatifs :\n- Boîtier externe : 5 000 F CFA\n- Disque externe 500 Go : 15 000 F CFA\n- Disque externe 1 To : 25 000 F CFA\nParfait pour sauvegarder et transporter vos données facilement.",
  },
  {
    id: "p-86",
    name: "CARTE GRAPHIQUE",
    price: 5000,
    stock: "En stock",
    category: "storage",
    subcategory: "Cartes graphiques",
    brand: "PCI Express",
    tags: [
      "carte graphique",
      "PCI Express",
      "PCI",
      "AGP",
      "256mo",
      "512mo",
      "1go",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows",
      "mac",
      "linux",
      "gaming",
      "performance",
      "d'occasion",
    ],
    image: "./IMG/CARTE GRAPHIQUE/1.jpg",
    details: [
      "D'occasion",
      "Rouge Noire",
      "PCI Express",
      "Différentes capacités disponibles : 256 Mo, 512 Mo, 1 Go",
    ],
    desc: "Carte graphique PCI Express.\nDisponible en PCI et AGP avec 256 Mo, 512 Mo et 1 Go.\nPrix à partir de 5 000 F CFA.",
  },

  {
    id: "p-88",
    name: "Disque Dur Dell 500Go ",
    price: 10000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "Dell",
    tags: [
      "disque dur",
      "500go",
      "SATA III",
      "5400rpm",
      "Dell",
      "stockage interne",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows",
      "mac",
      "linux",
      "data",
      "backup",
      "save",
      "fiable",
      "durable",
      "performance",
      "3.5 pouces",
      "hard drive",
      "computer storage",
      "system drive",
    ],
    image: "./IMG/Dell 500go Western digital/1.jpg",
    details: ["Réconditionné", "Gris", "DELL", "500 Go"],
    desc: "Disque dur Dell 500 Go Série ATA III.\nVitesse de rotation : 5400 tr/min.\nInterface SATA III 6Gb/s.\nDimensions : 14,7 x 10,2 x 2,54 cm.\nBuffer de 64 Mo.\nTaille 3.5\" \nIdéal pour l'upgrade ou le remplacement de votre disque dur sur PC fixe ou portable.",
  },
  {
    id: "p-207",
    name: "Disque Dur Interne 1Tera Seagate Pipeline",
    price: 25000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "Seagate",
    tags: [
      "disque dur",
      "1tera",
      "Seagate",
      "Pipeline",
      "stockage interne",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows",
      "mac",
      "linux",
      "data",
      "backup",
      "save",
      "fiable",
      "durable",
      "performance",
      "multimédia",
      "flux vidéo",
      "HD",
      "hard drive",
      "computer storage",
      "system drive",
    ],
    image: "./IMG/Disque Dur 1 tera PC interne Seagate Pipeline/1.jpg",
    details: ["Réconditionné", "Gris", "Seagate", " 1 Tera"],
    desc: "Disque dur interne Seagate Pipeline 1 Tera.\nConçu pour un fonctionnement 24h/24 et 7j/7.\nOptimisé pour faible consommation d'énergie et fonctionnement silencieux.\nCapable de restituer jusqu'à 20 flux Haute Définition en toute fluidité.\nFiable et performant, idéal pour configurations multimédia et lecteurs de salon.",
  },
  {
    id: "p-208",
    name: "Disque Dur Interne 500Go",
    price: 10000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "WD",
    tags: [
      "disque dur",
      "500go",
      "SATA",
      "stockage interne",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows 10",
      "data",
      "backup",
      "save",
      "fiable",
      "durable",
      "performance",
      "hard drive",
      "computer storage",
      "system drive",
      "prêt à l'emploi",
    ],
    image: "./IMG/DISQUE DUR 500go/2.jpg",
    details: ["Réconditionné", "Gris", "WD", "500 Go"],
    desc: "Disque dur interne 500 Go SATA pour ordinateurs fixes.\nRéconditionné et prêt à l'emploi avec Windows 10 installé.\nFiable et performant pour stockage et sauvegarde de données.\nIdéal pour mise à jour ou remplacement de votre disque dur existant.",
  },
  {
    id: "p-209",
    name: "Disque Dur SSD SATA et M.2",
    price: 10000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "team group",
    tags: [
      "ssd",
      "SATA",
      "M.2",
      "disque dur",
      "128go",
      "256go",
      "512go",
      "1tera",
      "stockage interne",
      "pc",
      "ordinateur",
      "fixe",
      "portable",
      "laptop",
      "windows",
      "mac",
      "linux",
      "data",
      "backup",
      "save",
      "fiable",
      "durable",
      "performance",
      "fast storage",
      "internal storage",
      "hard drive",
      "computer storage",
      "system drive",
    ],
    image: "./IMG/Disque dur ssd sata et m2/1.jpg",
    details: [
      "Neuf",
      "Noir",
      "team group",
      "Disponible en 128 Go, 256 Go, 512 Go et 1 Tera SATA et M.2",
    ],
    desc: "Disques durs SSD en SATA et M.2.\nCapacités disponibles : 128 Go, 256 Go, 512 Go et 1 Tera.\nVendus neufs ou reconditionnés.\nParfait pour l'upgrade ou le remplacement rapide de votre stockage interne.",
  },
  // Network - 6 produits
  {
    id: "p-92",
    name: "CÂBLE FIBRE OPTIQUE 24 BRINS MULTIMODE",
    price: 3000,
    stock: "En stock",
    category: "network",
    subcategory: "fibres",
    brand: "cable",
    tags: [
      "câble",
      "fibre optique",
      "multimode",
      "24 brins",
      "interne",
      "externe",
      "LSOH",
      "haut débit",
      "réseau",
      "connexion",
      "data",
      "telecom",
      "installation",
      "communication",
      "performance",
      "fiable",
    ],
    image: "./IMG/Câble 24 Brin multimode/1.jpg",
    details: ["Neuf"],
    desc: "Câble fibre optique multimode 24 brins adapté aux conduits de câbles.\nStructure serrée interne/externe, âme de fibre insensible aux courbures.\nBande passante de 1500/500 MHz.km.\nGaine extérieure LSOH résistante et marquage métrique séquentiel pour une installation facile et fiable.\nIdéal pour les réseaux de télécommunication et les infrastructures haute performance.",
  },

  {
  id: "p-210",
  name: "Switch Réseau Cisco et D-LINK Gigabit",
  price: 50000,
  stock: "En stock",
  category: "network",
  subcategory: "Switches",
  brand: "D-LINK",
  tags: [
    "switch",
    "réseau",
    "Cisco",
    "D-LINK",
    "gigabit",
    "24 ports",
    "Catalyst 2950",
    "DGS-3120-24TC",
    "DGS-1210-24",
    "100/1000 BT",
    "réseau informatique",
    "LAN",
    "infrastructure réseau",
    "serveur",
    "entreprise",
    "performance",
    "fiable",
    "réconditionné"
  ],
  image: "./IMG/Switch Cisco 2950 et D- LINK gigabit/3.jpg",
  details: [
    "Réconditionné",
    "Noir",
    "D-LINK",
  ],
  desc: "Switchs réseau réconditionnés Cisco et D-LINK Gigabit.\nIdéal pour entreprise, serveurs et infrastructures réseau.\nModèles disponibles :\n- Cisco Catalyst 2950 Série 24 Ports 100/1000 BT\n- D-LINK DGS-3120-24 TC 24 Ports 100/1000 BT\n- D-LINK DGS-1210-24 24 Ports 100/1000 BT\nFiables, performants et adaptés aux réseaux professionnels."
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
    desc:
      "NOUS VENDONS DES LICENCES MICROSOFT OFFICE 2019 (1)POSTE\n" +
      "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE.",
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
    desc:
      "Produit Windows 11 Pro officiel\n" +
      "Microsoft Online Update.\n" +
      "Prend en charge l'allemand, l'anglais, l'italien, le français, le japonais, l'espagnol, le russe, etc.\n" +
      "Compatible avec les versions 32 et 64 bits\n" +
      "1 clé pour un seul PC. 1 clé Windows 11 Pro pour un ordinateur.",
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
    desc:
      "NOUS VENDONS DES LICENCES WINDOWS 10 PROFESSIONNEL POUR UN (1) POSTE.\n" +
      "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE.",
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
  const grouped = new Map<
    string,
    { price: number; stock: string; image: string }
  >();
  productsInCat.forEach((p) => {
    const existing = grouped.get(p.subcategory);
    if (!existing) {
      grouped.set(p.subcategory, {
        price: p.price,
        stock: p.stock,
        image: p.image,
      });
    } else {
      // keep min price as "À partir de"
      if (p.price < existing.price) existing.price = p.price;
      // prefer 'En stock' if any
      if (existing.stock !== "En stock" && p.stock === "En stock")
        existing.stock = p.stock;
    }
  });

  const uiProducts: UiProduct[] = Array.from(grouped.entries())
    .slice(0, 8)
    .map(([sub, v]) => ({
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
    image:
      productsInCat[0]?.image ??
      "https://images.unsplash.com/photo-1508747703725-7191d23b3b1b?q=80&w=1200&auto=format&fit=crop",
  };
});
