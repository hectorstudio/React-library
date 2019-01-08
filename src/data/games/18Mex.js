const game = {
  // Generic Game Info
  info: {
    title: "18Mex",
    designer: "Mark Derrick",
    background: "brown",
    width: 150,
    color_5: "orange",
    color_10: "brown",
    orientation: "horizontal",
    titleRotate: -90,
    titleX: 175,
    titleY: 1550,
    hexCoords: true
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "$9,000",

  players: [
    {
      number: 3,
      certLimit: 19,
      capital: "$625"
    },
    {
      number: 4,
      certLimit: 14,
      capital: "$500"
    },
    {
      number: 5,
      certLimit: 11,
      capital: "$450"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Chihuahua Pacific Railway",
      abbrev: "CHI",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "National Railways of Mexicon",
      abbrev: "NdM",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "darkGreen",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Mexican Central Railway",
      abbrev: "MC",
      tokens: ["Free", "$40"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Pacific Railroad",
      abbrev: "PAC",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "yellow",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Texas-Mexican Railway",
      abbrev: "TM",
      tokens: ["Free", "$40"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Mexican Railway",
      abbrev: "MEX",
      tokens: ["Free", "$40", "$100"],
      color: "gray",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Southern Pacific Railroad of Mexico",
      abbrev: "SPM",
      tokens: ["Free", "$40", "$100"],
      color: "blue",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "United Railways of Yucatan",
      abbrev: "UdY",
      tokens: ["Free", "$40"],
      color: "purple",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 6,
      price: "$100",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 6,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 3,
      price: "$300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Phased Out by 4D"
        }
      ]
    },
    {
      name: "5",
      quantity: 2,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "$600",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "4D",
      quantity: 7,
      price: "$700",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "P1",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "P2",
      price: "$40",
      revenue: "$10",
      description:
      "Owning company may place the Copper Canyan tile in the named hex for $60 unless that hex is already built."
    },
    {
      name: "P3",
      price: "$50",
      description:
      "Immediately trade in for associated minor railroad"
    },
    {
      name: "P4",
      price: "$50",
      description:
      "Immediately trade in for associated minor railroad"
    },
    {
      name: "P5",
      price: "$50",
      description:
      "Immediately trade in for associated minor railroad"
    },
    {
      name: "P6",
      price: "$100",
      revenue: "$20",
      description:
      "Comes with 10% Chi"
    },
    {
      name: "P7",
      price: "$140",
      revenue: "$25",
      description:
      "Comes with President's Certificate of NdM. Owner must immediately set NdM's par price. Closes when NdM buys a train. May not be sold to a company."
    }
  ],

  phases: [
    {
      phase: "2",
      train: "2",
      limit: "-/3/1",
      number: "6",
      tiles: "yellow"
    },
    {
      phase: "3",
      train: "3",
      limit: "-/3/1",
      number: "6",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      phase: "3.5",
      limit: "4/3/-",
      tiles: "green",
      notes: "Minor companies are closed. NRM stock available."
    },
    {
      phase: "4",
      train: "4",
      rust: "2",
      limit: "3/2/-",
      number: "3",
      tiles: "green"
    },
    {
      phase: "5",
      train: "5",
      limit: "3/2/-",
      number: "2",
      tiles: "brown",
      notes: "Private companies are closed. NRM merges."
    },
    {
      phase: "6",
      train: "6",
      limit: "3/2/-",
      number: "2",
      rust: "3",
      tiles: "brown"
    },
    {
      phase: "6.5",
      limit: "3/2/-",
      tiles: "brown",
      rust: "4-O",
      notes: "4T's are phased out."
    },
    {
      phase: "4D",
      train: "4D",
      limit: "3/2/-",
      number: "7",
      tiles: "brown"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "5",
      color: "brown"
    },
    {
      name: "4",
      color: "green"
    },
    {
      name: "2",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share"
      ],
      ordered: false
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [
        {
          label: 90,
          width: "2.5in"
        },
        {
          label: 80,
          width: "2.25in"
        },
        {
          label: 75,
          width: "2.125in"
        },
        {
          label: 70,
          width: "2in"
        },
        {
          label: 60,
          width: "1.75in"
        }
      ]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 60, label: 60, arrow: "down" },
        65,
        70,
        75,
        { value: 80, label: 80, par: true },
        { value: 90, label: 90, par: true },
        100,
        110,
        120,
        130,
        140,
        150,
        165,
        180,
        200
      ],
      [
        { value: 55, label: 53, arrow: "down" },
        60,
        65,
        { value: 70, label: 70, par: true },
        { value: 75, label: 75, par: true },
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150,
        165,
        { value: 180, label: 180, arrow: "up" }
      ],
      [
        { value: 50, label: 53, arrow: "down" },
        55,
        { value: 60, label: 60, par: true },
        65,
        70,
        75,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        { value: 150, label: 150, arrow: "up" }
      ],
      [
        { value: 45, label: 45, arrow: "down" },
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        90,
        100,
        110,
        { value: 120, label: 120, arrow: "up" }
      ],
      [
        { value: 40, label: 40, legend: 0, arrow: "down" },
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 30, label: 30, legend: 0, arrow: "down" },
        { value: 40, label: 40, legend: 0 },
        { value: 45, label: 45, legend: 0 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, legend: 0, arrow: "up" },
      ],
      [
        { value: 20, label: 30, legend: 0, arrow: "down" },
        { value: 30, label: 30, legend: 0 },
        { value: 40, label: 40, legend: 0 },
        { value: 45, label: 45, legend: 0 },
        { value: 50, label: 50, legend: 0, arrow: "up" },
      ],
      [
        { value: 10, label: 10, legend: 0, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      }
    ]
  },

  tiles: {
    "3": 3, // Yellow
    "4": 3,
    "5": 2,
    "6": 2,
    "7": 5,
    "8": 13,
    "9": 9,
    "57": 4,
    "58": 4,
    "470": 1,
    "471": 1,
    "472": 1,
    "473": 1,
    "69": 1, // Brown
    "14": 4,
    "15": 4,
    "16": 1,
    "17": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "23": 4,
    "24": 4,
    "25": 3,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "141": 2,
    "142": 2,
    "143": 2,
    "144": 2,
    "474": 2,
    "475": 1,
    "476": 1,
    "477": 1,
    "478": 1,
    "479a": 1,
    "479b": 1,
    "39": 1, // Brown
    "40": 2,
    "41": 3,
    "42": 3,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 2,
    "63": 7,
    "70": 1,
    "480": 1,
    "481": 1,
    "482": 1,
    "483": 1,
    "484": 1,
    "485a": 1,
    "485b": 1,
    "486a": 1,
    "486b": 1,
    "455": 1 // Gray
  },

  map: {
    hexes: [
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Ciudad Juárez / El Paso"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "60"}
          ]
        },
        offBoardTrack: [{side: 1},{side:2}],
        hexes: ["F1"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Baja California"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "50"}
          ]
        },
        offBoardTrack: [{side: 6}],
        hexes: ["A2"]
      },
      {
        color: "gray",
        cities: [{
          companies: [{
            label: "PAC",
            color: "yellow"
          }]
        }],
        offBoardRevenue: {
          name: {name: "Nogales / Tuscon"},
          angle: 180,
          percent: 0.6,
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "50"}
          ]
        },
        track: [{side:1},{side:2}],
        hexes: ["C2"]
      },
      { // 120 Mountain
        color: "plain",
        terrain: [{
          type: "mountain",
          cost: "$120"
        }],
        hexes: ["E2","D3","G4","D5","G6","I6","H7","E8","F9","I14","I16"]
      },
      { // 60 Mountain
        color: "plain",
        terrain: [{ type: "mountain", cost: "$60" }],
        hexes: ["B3","K12","H17","L17"]
      },
      { // 10 Plants
        color: "plain",
        terrain: [{ type: "cactus", cost: "$10" }],
        hexes: ["B5"]
      },
      { // 20 Plants
        color: "plain",
        terrain: [{ type: "cactus", cost: "$20" }],
        hexes: ["F3", "E4", "H5", "J5","C6","F7","I8","I10","K10"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Hermosillo"}
        }],
        mountain: { percent: 0.667, cost: "$60" },
        hexes: ["C4"]
      },
      {
        color: "yellow",
        track: [{side:1},{side:2},{side:4}],
        values: [{
          value: 20,
          angle: 120,
          percent: 0.667
        }],
        cities: [{
          companies: [{
            label: "CHI",
            color: "red"
          }],
          name: {offset: 75, name: "Chihuahua"}
        }],
        hexes: ["F5"]
      },
      { // 20 Water
        color: "plain",
        terrain: [{type: "river", cost: "$20"}],
        hexes: ["I4","K8","G14","K20","M20"]
      },
      {
        color: "gray",
        offBoardRevenue: {
          name: {name: "San Antonio"},
          angle: 180,
          percent: 0.6,
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "60"}
          ]
        },
        cities: [{
          size: 2
        }],
        track: [{side:1},{side:2}],
        hexes: ["K4"]
      },
      {
        color: "plain",
        mountain: {
          cost: "$120"
        },
        names: [{
          name: "Copper Canyon",
          percent: 0.55
        }],
        hexes: ["E6"]
      },
      { // Plain
        color: "plain",
        hexes: ["K6","D7","G8","J11","G12","H13","I18"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Nuevo Laredo", reverse: true}
        }],
        terrain: [{
          type: "river",
          cost: "$20",
          angle: 180,
          percent: 0.65
        }],
        hexes: ["J7"]
      },
      { // 40 Swamp
        color: "plain",
        terrain: [{ type: "swamp", cost: "$40" }],
        hexes: ["L7","L11"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Los Mochis", reverse: true}
        }],
        terrain: [{
          type: "river",
          cost: "$20",
          angle: 180,
          percent: 0.65
        }],
        hexes: ["D9"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Torreón"},
          companies: [{
            label: "MC",
            color: "black"
          }]
        }],
        hexes: ["H9"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Monterrey"}
        }],
        hexes: ["J9"]
      },
      {
        color: "gray",
        cities: [{
          size: 2,
          name: {offset: 75, name: "Matamoros"},
          companies: [{
            label: "TM",
            color: "orange"
          }]
        }],
        offBoardRevenue: {
          angle: 180,
          percent: 0.667,
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "brown", cost: "40"}
          ]
        },
        track: [{side:1},{side:2},{side:3},{side:4}],
        hexes: ["L9"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"Culicán"}}],
        hexes: ["E10"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"Durango"}}],
        mountain: { percent: 0.6, cost: "$60" },
        hexes: ["G10"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"Zacatecas"}}],
        terrain: [{ type: "cactus", percent: 0.6, cost: "$20" }],
        hexes: ["H11"]
      },
      {
        color: "plain",
        values: [{
          value: 20,
          angle: 270,
          percent: 0.7
        },{
          value: 10,
          angle: 105,
          percent: 0.7
        }],
        cities: [{
          name: {offset: 55, name: "Mazatlán", reverse: true},
          companies: [{
            color: "black",
            label: "B"
          }]
        }],
        terrain: [{
          type: "river",
          cost: "$20",
          angle: 180,
          percent: 0.65
        }],
        towns: [{angle:60, percent: 0.58, rotate: 60}],
        track: [{side:2,type:"mid"}],
        hexes: ["F11"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"San Luis Potosí"}}],
        hexes: ["I12"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Querétaro"}
        }],
        terrain: [{ type: "mountain", percent: 0.667, cost: "$60" }],
        hexes: ["J13"]
      },
      {
        color: "plain",
        values: [{
          value: 20,
          angle: 90,
          percent: 0.7
        },{
          value: 10,
          angle: 285,
          percent: 0.7
        }],
        cities: [{
          name: {offset: 45, name: "Tampico"},
          companies: [{
            color: "black",
            label: "A"
          }]
        }],
        terrain: [{
          type: "swamp",
          cost: "$40",
          percent: 0.65
        }],
        towns: [{angle:240, percent: 0.58, rotate: 60}],
        track: [{side:5,type:"mid"}],
        hexes: ["L13"]
      },
      {
        color: "plain",
        cities: [{
          name: {name: "Guadalajara", reverse: true},
          companies: [{
            label: "SPM",
            color: "blue"
          }]
        }],
        terrain: [{
          type: "river",
          cost: "$20",
          angle: 180,
          percent: 0.65
        }],
        hexes: ["H15"]
      },
      {
        color: "plain",
        terrain: [{ type: "mountain", cost: "$60" }],
        borders: [{
          side: 1, dashed: true, color: "red"
        },{
          side: 2, dashed: true, color: "red"
        }],
        hexes: ["K14"]
      },
      {
        color: "yellow",
        cities: [{
          name: {offset: 40, name: "Mexico City", reverse: true},
          companies: [{
            label: "NdM",
            color: "darkGreen"
          }]
        }],
        values: [{
          value: 20,
          angle: 240,
          percent: 0.667
        }],
        centerTowns: [{
          name: {name: "Toluca"},
          angle: 135,
          percent: 0.6
        }],
        borders: [{color: "red", dashed: true, side: 5}],
        track: [{side:4},{side:6}],
        hexes: ["J15"]
      },
      {
        color: "plain",
        terrain: [{ type: "mountain", cost: "$60" }],
        borders: [{
          side: 6, dashed: true, color: "red"
        }],
        hexes: ["L15"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"Puerto Vallarta"}}],
        hexes: ["G16"]
      },
      {
        color: "yellow",
        terrain: [{ type: "mountain", cost: "$60", angle: 30, percent: 0.6}],
        values: [{
          value: 10,
          angle: 210,
          percent: 0.7
        }],
        towns: [{name:{name: "Puebla"}, rotate: -60}],
        borders: [
          {color: "red", dashed: true, side: 1},
          {color: "red", dashed: true, side: 2},
          {color: "red", dashed: true, side: 4}
        ],
        track: [{side: 3, type: "straight"}],
        hexes: ["K16"]
      },
      {
        color: "plain",
        cities: [{
          companies: [{
            label: "MEX",
            color: "gray"
          }],
          name: {name: "Veracruz"}
        }],
        centerTowns: [{ angle: 300, percent: 0.667}],
        terrain: [{ type: "swamp", cost: "$40", percent: 0.65 }],
        borders: [{color: "red", dashed: true, side: 3}],
        hexes: ["M16"]
      },
      {
        color: "plain",
        terrain: [{type: "mountain", cost: "$120"}],
        borders: [{color: "red", dashed: true, side: 5}],
        hexes: ["J17"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Mérida"},
          angle: 180,
          percent: 0.6,
          revenues: [
            {color: "yellow", cost: "10"},
            {color: "brown", cost: "50"}
          ]
        },
        cities: [{
          companies: [{
            color: "purple",
            label: "UdY"
          }]
        }],
        offBoardTrack: [{side: 2},{side:3}],
        hexes: ["N17"]
      },
      {
        color: "plain",
        terrain: [{type: "mountain", cost: "$120"}],
        borders: [{color: "red", dashed: true, side: 4}],
        hexes: ["K18"]
      },
      {
        color: "yellow",
        terrain: [{type: "mountain", angle: 150, percent: 0.6, cost: "$60"}],
        track: [{side: 2, type: "straight"}],
        hexes: ["M18"]
      },
      {
        color: "plain",
        centerTowns: [{name:{name:"Acapulco"}}],
        terrain: [{ type: "mountain", percent: 0.6, cost: "$120" }],
        hexes: ["J19"]
      },
      {
        color: "plain",
        values: [{
          value: 20,
          angle: 270,
          percent: 0.7
        }],
        cities: [{
          name: {offset: 40, name: "Oaxaca"},
          companies: [{
            color: "black",
            label: "C"
          }]
        }],
        terrain: [{
          type: "river",
          cost: "$20",
          percent: 0.65
        }],
        track: [{side:5}],
        hexes: ["L19"]
      },
      {
        color: "gray",
        track: [{side:4,type:"sharp"}],
        hexes: ["L21"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Guatemala"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "brown", cost: "40"}
          ]
        },
        offBoardTrack: [{side:3}],
        hexes: ["N21"]
      }
    ]
  }
};

export default game;
