const imagePath = "../../../image/cube/roux/lse/";

const lse4aFirstImage = `${imagePath}lse-4a-first.png`;
const cmllOrientationImage = `${imagePath}cmll-orientation.png`;
const cmllSolvedImage = `${imagePath}cmll-solved.png`;

const lse4cCases = [
  {
    setup: "M E2 M' E2",
    algorithm: "M E2 M' E2",
    image: `${imagePath}lse-4c-1.png`
  },
  {
    setup: "M' U2 M",
    algorithm: "M' U2 M",
    image: `${imagePath}lse-4c-2.png`
  },
  {
    setup: "M U2 M' U2",
    algorithm: "U2 M U2 M'",
    image: `${imagePath}lse-4c-3.png`
  },
  {
    setup: "U2 M2 U2 M2",
    algorithm: "U2 M2 U2 M2",
    image: `${imagePath}lse-4c-4.png`
  },
  {
    setup: "M U2 M2 U2 M",
    algorithm: "M' U2 M2 U2 M'",
    image: `${imagePath}lse-4c-5.png`
  },
];