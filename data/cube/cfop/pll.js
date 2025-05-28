const pllCases = [
  {
    id: "aa",
    name: "Aa",
    goal: "Swaps three corners counter-clockwise and swaps two adjacent edges.",
    setup: "x R2' D2' R U R' D2' R U' R x'",
    algorithm: "x R' U R' D2 R U' R' D2 R2 x'",
    image: "../../../image/cube/cfop/pll/aa.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Aa"
  },
  {
    id: "ab",
    name: "Ab",
    goal: "Swaps three corners clockwise and swaps two adjacent edges.",
    setup: "x R' U R' D2' R U' R' D2' R2' x'",
    algorithm: "y' x L U' L D2 L' U L D2 L2",
    image: "../../../image/cube/cfop/pll/ab.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ab"
  },
  {
    id: "e",
    name: "E",
    goal: "Diagonally swaps all 4 corner pieces and 4 edge pieces in an \"X\" shape.",
    setup: "x' D R U R' D' R U' R' D R U' R' D' R U R' x y'",
    algorithm: "z U2 R2 F (R U R' U' R U R' U' R U R' U') F' R2 U2 z'",
    algorithm2: "R2 U F' (R' U R U' R' U R U' R' U R U') F U' R2",
    image: "../../../image/cube/cfop/pll/e.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/E"
  },
  {
    id: "f",
    name: "F",
    goal: "Swaps two corners diagonally and two edges adjacent to those corners.",
    setup: "R' U' R U' R' U R U R2' F' R U R U' R' F U R y'",
    algorithm: "y R' U' F' (R U R' U' R' F R2 U' R' U' R U R') U R",
    image: "../../../image/cube/cfop/pll/f.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/F"
  },
  {
    id: "ga",
    name: "Ga",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R' U' R D' U R2' U R' U R U' R U' R2' D",
    algorithm: "y' M' U2 M U' (R U2 R' U' R U2 L' U R' U' L) U M' U2 M",
    image: "../../../image/cube/cfop/pll/ga.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ga"
  },
  {
    id: "gb",
    name: "Gb",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R2' U R' U R' U' R U' R2' D U' R' U R D'",
    algorithm: "y2 M' U2 M (R U2 R' U' R U2 L' U R' U' L) M' U2 M",
    image: "../../../image/cube/cfop/pll/gb.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Gb"
  },
  {
    id: "gc",
    name: "Gc",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "D' R U R' U' D R2' U' R U' R' U R' U R2'",
    algorithm: "y' M' U2 M U (L' U2 L U L' U2 R U' L U R') U' M' U2 M",
    image: "../../../image/cube/cfop/pll/gc.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Gc"
  },
  {
    id: "gd",
    name: "Gd",
    goal: "Swaps three corners and three edges in various configurations.",
    setup: "R2' U' R U' R U R' U R2' D' U R U' R' D",
    algorithm: "M' U2 M (L' U2 L U L' U2 R U' L U R') M' U2 M",
    image: "../../../image/cube/cfop/pll/gd.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Gd"
  },
  {
    id: "h",
    name: "H",
    goal: "Swaps opposite edge pairs (all 4 edges in two opposite pairs).",
    setup: "M2' U' M2' U2' M2' U' M2'",
    algorithm: "M2 U' M2 U2 M2 U' M2",
    image: "../../../image/cube/cfop/pll/h.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/H"
  },
  {
    id: "ja",
    name: "Ja",
    goal: "Swaps two adjacent corners and two adjacent edges (mirror of Jb).",
    setup: "L' R' U2' R U R' U2' L U' R y'",
    algorithm: "L' U2 L U L' U2 R U' L U R'",
    image: "../../../image/cube/cfop/pll/ja.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ja"
  },
  {
    id: "jb",
    name: "Jb",
    goal: "Swaps two adjacent corners and two adjacent edges (mirror of Ja).",
    setup: "R U R2' F' R U R U' R' F R U' R'",
    algorithm: "R U2 R' U' R U2 L' U R' U' L",
    image: "../../../image/cube/cfop/pll/jb.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Jb"
  },
  {
    id: "na",
    name: "Na",
    goal: "Swaps two diagonally opposite corners and two pairs of adjacent edges (mirror of Nb).",
    setup: "R U R' U2' R U R2' F' R U R U' R' F R U' R' U' R U' R'",
    algorithm: "R U R' U (R U2 R' U' R U2 L' U R' U' L) U' R U' R'",
    image: "../../../image/cube/cfop/pll/na.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Na"
  },
  {
    id: "nb",
    name: "Nb",
    goal: "Swaps two diagonally opposite corners and two pairs of adjacent edges (mirror of Na).",
    setup: "F r' F' r U r U' r2' D' F r U r' F' D r",
    algorithm: "L' U' L U' (L' U2 L U L' U2 R U' L U R') U L' U L",
    image: "../../../image/cube/cfop/pll/nb.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Nb"
  },
  {
    id: "ra",
    name: "Ra",
    goal: "Swaps three corners and swaps one edge with another (mirror of Rb).",
    setup: "R U2' R D R' U R D' R' U' R' U R U R' y'",
    algorithm: "y R U R' F' R U2 R' U2 R' F R U R U2 R'",
    algorithm2: "M U2 M' U' (R U2 R' U' R U2 L' U R' U' L) U M U2 M'",
    image: "../../../image/cube/cfop/pll/ra.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ra"
  },
  {
    id: "rb",
    name: "Rb",
    goal: "Swaps three corners and swaps one edge with another (mirror of Ra).",
    setup: "R' U R U R' U' R' D' R U R' D R U2' R",
    algorithm: "R' U2 R U2 R' F R U R' U' R' F' R2",
    algorithm2: "M U2 M' U (L' U2 L U L' U2 R U' L U R') U' M U2 M'",
    image: "../../../image/cube/cfop/pll/rb.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Rb"
  },
  {
    id: "t",
    name: "T",
    goal: "Swaps two adjacent corners and two adjacent edges.",
    setup: "F R U' R' U R U R2' F' R U R U' R'",
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
    image: "../../../image/cube/cfop/pll/t.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/T"
  },
  {
    id: "ua",
    name: "Ua",
    goal: "Swaps three edge pieces clockwise.",
    setup: "M2' U' M' U2' M U' M2'",
    algorithm: "y2 F2 U' L R' F2 L' R U' F2",
    image: "../../../image/cube/cfop/pll/ua.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ua"
  },
  {
    id: "ub",
    name: "Ub",
    goal: "Swaps three edge pieces counterclockwise.",
    setup: "M2' U M' U2' M U M2'",
    algorithm: "y2 F2 U L R' F2 L' R U F2",
    image: "../../../image/cube/cfop/pll/ub.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Ub"
  },
  {
    id: "v",
    name: "V",
    goal: "Swaps three corners and swaps one edge with another.",
    setup: "D2' R' U R D' R2' U' R' U R' U R' D' R U2' R'",
    algorithm: "M' U2 M (F R U' R' U' R U R' F' R U R' U' R' F R F') M' U2 M",
    image: "../../../image/cube/cfop/pll/v.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/V"
  },
  {
    id: "y",
    name: "Y",
    goal: "Swaps three corners and swaps one edge with another.",
    setup: "F R' F' R U R U' R' F R U' R' U R U R' F'",
    algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    image: "../../../image/cube/cfop/pll/y.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Y"
  },
  {
    id: "z",
    name: "Z",
    goal: "Swaps two pairs of opposite edge pieces.",
    setup: "M U2' M2' U2' M U' M2' U' M2'",
    algorithm: "y M2 U' M2 U' M' U2 M2 U2 M' U2",
    image: "../../../image/cube/cfop/pll/z.PNG",
    source: "https://speedcubedb.com/a/3x3/PLL/Z"
  },
];