const imagePath = "../../../image/cube/cfop/oll/oll-";

const ollCases = [
  {
    id: "oll5",
    name: "OLL 5 (Square)",
    setup: "r' U' R U' R' U2' r",
    algorithm: "r' U2 R U R' U r",
    image: `${imagePath}5.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll6",
    name: "OLL 6 (Square)",
    setup: "r U R' U R U2' r'",
    algorithm: "y2 l U2 L' U' L U' l'",
    image: `${imagePath}6.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll20",
    name: "OLL 20 (Corners)",
    setup: "r U R' U' M2' U R U' R' U' M'",
    algorithm: "y F R U R' U' R U R' U' R U R' U' F'",
    algorithm2: "M' U' M' U' M' U' M' U M' U' M' U' M' U' M' U'",
    image: `${imagePath}20.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll21",
    name: "OLL 21 (Cross)",
    setup: "R U R' U R U' R' U R U2' R' y'",
    algorithm: "r U R' U' M2' U R U' R' U' M'",
    image: `${imagePath}21.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_21"
  },
  {
    id: "oll22",
    name: "OLL 22 (Cross)",
    setup: "R' U2' R2' U R2' U R2' U2' R'",
    algorithm: "f R U R' U' f' F R U R' U' F'",
    image: `${imagePath}22.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_22"
  },
  {
    id: "oll23",
    name: "OLL 23 (Tank)",
    setup: "R U2' R D R' U2' R D' R2'",
    algorithm: "R' F2 R U2 R U2 R' F2 R U2 R'",
    algorithm2: "R2 D R' U2 R D' R' U2 R'",
    image: `${imagePath}23.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_23"
  },
  {
    id: "oll24",
    name: "OLL 24 (Tank)",
    setup: "F R' F' r U R U' r'",
    algorithm: "r U R' U' r' F R F'",
    image: `${imagePath}24.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_24"
  },
  {
    id: "oll25",
    name: "OLL 25 (Bowtie)",
    setup: "R' F' r U R U' r' F y'",
    algorithm: "y F' r U R' U' r' F R",
    image: `${imagePath}25.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_25"
  },
  {
    id: "oll26",
    name: "OLL 26 (Anti-Sune)",
    setup: "R U R' U R U2' R' y'",
    algorithm: "R' U' R U' R' U2 R",
    image: `${imagePath}26.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_26"
  },
  {
    id: "oll27",
    name: "OLL 27 (Sune)",
    setup: "R U2' R' U' R U' R'",
    algorithm: "R U R' U R U2 R'",
    image: `${imagePath}27.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_27"
  },
  {
    id: "oll28",
    name: "OLL 28 (Corners)",
    setup: "R U R' U' M' U R U' r'",
    algorithm: "r U R' U' M U R U' R'",
    image: `${imagePath}28.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_28"
  },
  {
    id: "oll31",
    name: "OLL 31 (B)",
    setup: "R' F R U R' U' F' U R",
    algorithm: "y2 S' L' U' L U L F' L' f",
    image: `${imagePath}31.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll32",
    name: "OLL 32 (D)",
    setup: "f R' F' R U R U' R' S'",
    algorithm: "S R U R' U' R' F R f'",
    image: `${imagePath}32.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll33",
    name: "OLL 33 (T)",
    setup: "F R' F' R U R U' R'",
    algorithm: "R U R' U' R' F R F'",
    image: `${imagePath}33.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_33"
  },
  {
    id: "oll34",
    name: "OLL 34 (C)",
    setup: "F U R' U' R' F' R U R2' U' R' y2'",
    algorithm: "F R U R' U' F' U (F' r U R' U' r' F R)",
    image: `${imagePath}34.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll36",
    name: "OLL 36 (W)",
    setup: "F' L F L' U' L' U' L U L' U L y2'",
    algorithm: "y2 R U R' F' R U R' U' R' F R U' R' F R F'",
    image: `${imagePath}36.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll38",
    name: "OLL 38 (W)",
    setup: "F R' F' R U R U R' U' R U' R'",
    algorithm: "R U R' U R U' R' U' R' F R F'",
    image: `${imagePath}38.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll43",
    name: "OLL 43 (B)",
    setup: "f' U' L' U L f",
    algorithm: "f' L' U' L U f",
    image: `${imagePath}43.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_43"
  },
  {
    id: "oll44",
    name: "OLL 44 (D)",
    setup: "f U R U' R' f'",
    algorithm: "f R U R' U' f'",
    image: `${imagePath}44.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_44"
  },
  {
    id: "oll45",
    name: "OLL 45 (T)",
    setup: "F U R U' R' F'",
    algorithm: "F R U R' U' F'",
    image: `${imagePath}45.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_45"
  },
  {
    id: "oll46",
    name: "OLL 46 (C)",
    setup: "R' U' F R' F' R U R",
    algorithm: "R' U' (R' F R F') U R",
    algorithm2: "y F R U R' U' F' U' (R U R' U R U2 R')",
    image: `${imagePath}46.PNG`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "oll51",
    name: "OLL 51 (Line)",
    setup: "f U R U' R' U R U' R' f'",
    algorithm: "f R U R' U' R U R' U' f'",
    image: `${imagePath}51.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_51"
  },
  {
    id: "oll55",
    name: "OLL 55 (Line)",
    setup: "F R' F' U2' R U R' U R2' U2' R'",
    algorithm: "y F R U R' U' S R U R' U' S' R U R' U' F'",
    image: `${imagePath}55.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_55"
  },
  {
    id: "oll56",
    name: "OLL 56 (Line)",
    setup: "r U r' R U R' U' R U R' U' r U' r'",
    algorithm: "y F R U R' U' R U R' U' S R U R' U' f'",
    image: `${imagePath}56.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_56"
  },
  {
    id: "oll57",
    name: "OLL 57 (H)",
    setup: "r U R' U' M U R U' R'",
    algorithm: "R U R' U' M' U R U' r'",
    image: `${imagePath}57.PNG`,
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_57"
  },
];
