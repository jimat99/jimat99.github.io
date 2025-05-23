const cmllCases = [
  // Corner Orientation (CO)
  {
    name: "Corner Orientation Case 1 (Cross)",
    type: "CO",
    setup: "R U R' U R U' R' U R U2' R' y'",
    algorithm: "y F R U R' U' R U R' U' R U R' U' F'",
    image: "image/cfop/oll/oll-21.PNG",
    image2: "image/roux/cmll/oll-21-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_21"
  },
  {
    name: "Corner Orientation Case 2 (Cross)",
    type: "CO",
    setup: "R' U2' R2' U R2' U R2' U2' R'",
    algorithm: "f R U R' U' f' F R U R' U' F'",
    image: "image/cfop/oll/oll-22.PNG",
    image2: "image/roux/cmll/oll-22-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_22"
  },
  {
    name: "Corner Orientation Case 3 (T with headlight)",
    type: "CO",
    setup: "R U2' R D R' U2' R D' R2'",
    algorithm: "R' F2 R U2 R U2 R' F2 R U2 R'",
    algorithm2: "R2 D R' U2 R D' R' U2 R'",
    image: "image/cfop/oll/oll-23.PNG",
    image2: "image/roux/cmll/oll-23-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_23"
  },
  {
    name: "Corner Orientation Case 4 (T without headlight)",
    type: "CO",
    setup: "F R' F' r U R U' r'",
    algorithm: "r U R' U' r' F R F'",
    image: "image/cfop/oll/oll-24.PNG",
    image2: "image/roux/cmll/oll-24-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_24"
  },
  {
    name: "Corner Orientation Case 5 (Bowtie)",
    type: "CO",
    setup: "R' F' r U R U' r' F y'",
    algorithm: "y F' r U R' U' r' F R",
    image: "image/cfop/oll/oll-25.PNG",
    image2: "image/roux/cmll/oll-25-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_25"
  },
  {
    name: "Corner Orientation Case 6 (Anti-Sune)",
    type: "CO",
    setup: "R U R' U R U2' R' y'",
    algorithm: "R' U' R U' R' U2 R",
    image: "image/cfop/oll/oll-26.PNG",
    image2: "image/roux/cmll/oll-26-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_26"
  },
  {
    name: "Corner Orientation Case 7 (Sune)",
    type: "CO",
    setup: "R U2' R' U' R U' R'",
    algorithm: "R U R' U R U2 R'",
    image: "image/cfop/oll/oll-27.PNG",
    image2: "image/roux/cmll/oll-27-simpler.PNG",
    source: "https://speedcubedb.com/a/3x3/OLL/OLL_27"
  },
  // Corner Permutation (CP)
  {
    name: "Corner Permutation Case 1 (Headlight on the left)",
    type: "CP",
    setup: "R U R2' F' R U R U' R' F R U' R'",
    algorithm: "<b>(Jb-perm):</b>\nR U2 R' U' R U2 L' U R' U' L",
    algorithm2: "<b>(T-perm):</b>\nR U R' U' R' F R2 U' R' U' R U R' F'",
    recognize: "If there is a headlight, put it on the left, then do the Jb-perm or T-perm",
    image: "image/roux/cmll/cp-1.PNG",
    source: "https://cube.rider.biz/visualcube.php"
  },
  {
    name: "Corner Permutation Case 2 (No headlight)",
    type: "CP",
    setup: "F R' F' R U R U' R' F R U' R' U R U R' F'",
    algorithm: "<b>(Y-perm):</b>\nF R U' R' U' R U R' F' R U R' U' R' F R F'",
    recognize: "If there is no headlight, then do the Y-perm",
    image: "image/roux/cmll/cp-2.PNG",
    source: "https://cube.rider.biz/visualcube.php"
  },
];

const source2 = "https://docs.google.com/document/d/1SUdgNugJtM4l644jfR90J0nxvSdpq0nNMO-k492S2ik/";
