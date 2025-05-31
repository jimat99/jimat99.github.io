const imagePath = "../../../image/cube/cfop/pll/";

const pllCases = [
  {
    id: "aa",
    name: "Aa",
    goal: "Swaps three corners counter-clockwise and swaps two adjacent edges.",
    setup: "x R2' D2' R U R' D2' R U' R x'",
    algorithm: "x R' U R' D2 R U' R' D2 R2 x'",
    image: `${imagePath}aa.png`,
    source: "https://speedcubedb.com/a/3x3/PLL/Aa"
  },
  {
    id: "ab",
    name: "Ab",
    goal: "Swaps three corners clockwise and swaps two adjacent edges.",
    setup: "x R' U R' D2' R U' R' D2' R2' x'",
    algorithm: "y' x L U' L D2 L' U L D2 L2",
    image: `${imagePath}ab.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ab"
  },
  {
    id: "e",
    name: "E",
    goal: "Diagonally swaps all 4 corner pieces and 4 edge pieces in an \"X\" shape.",
    setup: "x' D R U R' D' R U' R' D R U' R' D' R U R' x y'",
    algorithm: "z U2 R2 F (R U R' U' R U R' U' R U R' U') F' R2 U2 z'",
    algorithm2: "R2 U F' (R' U R U' R' U R U' R' U R U') F U' R2",
    image: `${imagePath}e.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/E"
  },
  {
    id: "f",
    name: "F",
    goal: "Swaps two corners diagonally and two edges adjacent to those corners.",
    setup: "R' U' R U' R' U R U R2' F' R U R U' R' F U R",
    algorithm: "R' U' F' (R U R' U' R' F R2 U' R' U' R U R') U R",
    image: `${imagePath}f.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/F",
    rotate: 90
  },
  {
    id: "ga",
    name: "Ga",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R' U' R D' U R2' U R' U R U' R U' R2' D",
    algorithm: "y' M' U2 M U' (R U2 R' U' R U2 L' U R' U' L) U M' U2 M",
    image: `${imagePath}ga.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ga"
  },
  {
    id: "gb",
    name: "Gb",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R2' U R' U R' U' R U' R2' D U' R' U R D'",
    algorithm: "y2 M' U2 M (R U2 R' U' R U2 L' U R' U' L) M' U2 M",
    image: `${imagePath}gb.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Gb"
  },
  {
    id: "gc",
    name: "Gc",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "D' R U R' U' D R2' U' R U' R' U R' U R2'",
    algorithm: "y' M' U2 M U (L' U2 L U L' U2 R U' L U R') U' M' U2 M",
    image: `${imagePath}gc.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Gc"
  },
  {
    id: "gd",
    name: "Gd",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R2' U' R U' R U R' U R2' D' U R U' R' D",
    algorithm: "M' U2 M (L' U2 L U L' U2 R U' L U R') M' U2 M",
    image: `${imagePath}gd.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Gd"
  },
  {
    id: "h",
    name: "H",
    goal: "Swaps opposite edge pairs (all 4 edges in two opposite pairs).",
    setup: "M2' U' M2' U2' M2' U' M2'",
    algorithm: "M2 U' M2 U2 M2 U' M2",
    image: `${imagePath}h.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/H"
  },
  {
    id: "ja",
    name: "Ja",
    goal: "Swaps two adjacent corners and two adjacent edges (mirror of Jb).",
    setup: "L' U2 L U L' U2 R U' L U R'",
    algorithm: "L' U2 L U L' U2 R U' L U R'",
    image: `${imagePath}ja.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ja"
  },
  {
    id: "jb",
    name: "Jb",
    goal: "Swaps two adjacent corners and two adjacent edges (mirror of Ja).",
    setup: "R U2 R' U' R U2 L' U R' U' L",
    algorithm: "R U2 R' U' R U2 L' U R' U' L",
    image: `${imagePath}jb.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Jb"
  },
  {
    id: "na",
    name: "Na",
    goal: "Swaps two diagonally opposite corners and two pairs of adjacent edges (mirror of Nb).",
    setup: "R U R' U2' R U R2' F' R U R U' R' F R U' R' U' R U' R'",
    algorithm: "R U R' U (R U2 R' U' R U2 L' U R' U' L) U' R U' R'",
    image: `${imagePath}na.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Na"
  },
  {
    id: "nb",
    name: "Nb",
    goal: "Swaps two diagonally opposite corners and two pairs of adjacent edges (mirror of Na).",
    setup: "F r' F' r U r U' r2' D' F r U r' F' D r",
    algorithm: "L' U' L U' (L' U2 L U L' U2 R U' L U R') U L' U L",
    image: `${imagePath}nb.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Nb"
  },
  {
    id: "ra",
    name: "Ra",
    goal: "Swaps three corners and swaps one edge with another (mirror of Rb).",
    setup: "R U2' R D R' U R D' R' U' R' U R U R' y'",
    algorithm: "y R U R' F' R U2 R' U2 R' F R U R U2 R'",
    algorithm2: "M U2 M' U' (R U2 R' U' R U2 L' U R' U' L) U M U2 M'",
    image: `${imagePath}ra.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ra"
  },
  {
    id: "rb",
    name: "Rb",
    goal: "Swaps three corners and swaps one edge with another (mirror of Ra).",
    setup: "R' U R U R' U' R' D' R U R' D R U2' R",
    algorithm: "R' U2 R U2 R' F R U R' U' R' F' R2",
    algorithm2: "M U2 M' U (L' U2 L U L' U2 R U' L U R') U' M U2 M'",
    image: `${imagePath}rb.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Rb"
  },
  {
    id: "t",
    name: "T",
    goal: "Swaps two adjacent corners and two adjacent edges.",
    setup: "F R U' R' U R U R2' F' R U R U' R'",
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
    image: `${imagePath}t.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/T"
  },
  {
    id: "ua",
    name: "Ua",
    goal: "Swaps three edge pieces counterclockwise.",
    setup: "F2 U L R' F2 L' R U F2",
    algorithm: "F2 U' L R' F2 L' R U' F2",
    image: `${imagePath}ua.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ua",
    rotate: 180
  },
  {
    id: "ub",
    name: "Ub",
    goal: "Swaps three edge pieces clockwise.",
    setup: "F2 U' L R' F2 L' R U' F2",
    algorithm: "F2 U L R' F2 L' R U F2",
    image: `${imagePath}ub.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Ub",
    rotate: 180
  },
  {
    id: "v",
    name: "V",
    goal: "Swaps three corners and swaps one edge with another.",
    setup: "D2' R' U R D' R2' U' R' U R' U R' D' R U2' R'",
    algorithm: "M' U2 M (F R U' R' U' R U R' F' R U R' U' R' F R F') M' U2 M",
    image: `${imagePath}v.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/V"
  },
  {
    id: "y",
    name: "Y",
    goal: "Swaps three corners and swaps one edge with another.",
    setup: "F R' F' R U R U' R' F R U' R' U R U R' F'",
    algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    image: `${imagePath}y.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Y"
  },
  {
    id: "z",
    name: "Z",
    goal: "Swaps two pairs of opposite edge pieces.",
    setup: "M2 U' M2 U' M' U2 M2 U2 M' U2",
    algorithm: "M2 U' M2 U' M' U2 M2 U2 M' U2",
    image: `${imagePath}z.PNG`,
    source: "https://speedcubedb.com/a/3x3/PLL/Z",
    rotate: 90
  },
];