const imagePath = "../../../image/cube/cfop/f2l/f2l-";

const f2lCases = [
  {
    id: "f2l1",
    name: "F2L 1",
    setup: "F R' F' R",
    algorithm: "U R U' R'",
    algorithm2: "y F' r U r'",
    algorithm3: "y' U f R' f",
    algorithm4: "y2 U L U' L'",
    image: `${imagePath}1.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "f2l2",
    name: "F2L 2",
    setup: "R' F R F'",
    algorithm: "F R' F' R",
    algorithm2: "y U' L' U L",
    algorithm3: "y' U' R' U R",
    algorithm4: "y2 U' f' L f",
    image: `${imagePath}2.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "f2l4",
    name: "F2L 4",
    setup: "R U' R'",
    algorithm: "R U R'",
    image: `${imagePath}4.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "f2l10",
    name: "F2L 10",
    setup: "R U' R' U' R U' R' U",
    algorithm: "U' R U R' U R U R'",
    algorithm2: "U2 R U' R' U' R U R'",
    image: `${imagePath}10.png`,
    image: "../../../image/cube/cfop/f2l/f2l-10.png",
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    id: "f2l12",
    name: "F2L 12",
    setup: "R U R' U2' R U R' U' R U R'",
    algorithm: "R' U2 R2 U R2 U R",
    algorithm2: "R U' R' U R U' R' U2 R U' R'",
    image: `${imagePath}12.png`,
    source: "https://cube.rider.biz/visualcube.php"
  },
];