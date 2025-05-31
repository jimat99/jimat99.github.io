const imagePath = "../../../image/cube/roux/lse/";

const lseCases = [
  {
    name: "3-Cycle Case 1 (Dot)",
    setup: "M E2 M' E2",
    algorithm: "M E2 M' E2",
    image: `${imagePath}lse-4c-1.png`
  },
  {
    name: "3-Cycle Case 2 (2 Flipped Edges)",
    setup: "M' U2 M",
    algorithm: "M' U2 M",
    image: `${imagePath}lse-4c-2.png`
  },
  {
    name: "3-Cycle Case 3 (2 Flipped Edges)",
    setup: "M U2 M' U2",
    algorithm: "U2 M U2 M'",
    image: `${imagePath}lse-4c-3.png`
  },
  {
    name: "3-Cycle Case 4 (4 Flipped Edges)",
    setup: "U2 M2 U2 M2",
    algorithm: "U2 M2 U2 M2",
    image: `${imagePath}lse-4c-4.png`
  },
  {
    name: "3-Cycle Case 5 (4 Flipped Edges)",
    setup: "M U2 M2 U2 M",
    algorithm: "M' U2 M2 U2 M'",
    image: `${imagePath}lse-4c-5.png`
  },
];

// const lseCases = [
//   {
//     name: "EO - Line",
//     algorithm: "M U M U M U2 M'",
//     recognize: "Two oriented edges forming a line across the U face.",
//     image: "../../../images/lse/eo-line.png",
//   },
//   {
//     name: "ULUR - Insert Both",
//     algorithm: "U M U' M'",
//     recognize: "UL and UR edges are in opposite slots.",
//     image: "../../../images/lse/ul-insert.png",
//   },
//   {
//     name: "3-Cycle - Clockwise",
//     algorithm: "M2 U M2 U M' U2 M2 U2 M' U2",
//     algorithm2: "M2 U M2 U2 M2 U M2",
//     image: "../../../images/lse/3cycle-cw.png",
//   }
// ];
