const game = {
  // Generic Game Info
  info: {
    title: "1868",
    subtitle: "Uruguay",
    designer: "Eddie Robbins",
    background: "gray",
    width: 150,
    color_10: "orange",
    titleX: 900,
    hexCoords: true,
    currency: "UYU"
  },

  links: {
    bgg: "https://boardgamegeek.com/boardgame/228373/1868"
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "$9,000",

  players: [
    {
      number: 3,
      certLimit: 13,
      capital: "$700"
    },
    {
      number: 4,
      certLimit: 10,
      capital: "$550"
    },
    {
      number: 5,
      certLimit: 8,
      capital: "$430"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Montevideo Railway",
      abbrev: "M",
      tokens: ["Free", "$20", "$30", "$40", "$50", "$60"],
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
      name: "Noroeste Railway",
      abbrev: "NO",
      tokens: ["Free", "$20", "$30", "$40", "$50", "$60"],
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
    },
    {
      name: "Norte Railway",
      abbrev: "N",
      tokens: ["Free", "$20", "$30", "$40", "$50", "$60"],
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
      name: "Central Railway",
      abbrev: "C",
      tokens: ["Free", "$20", "$30", "$40", "$50", "$60"],
      color: "green",
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
      name: "Oeste Railway",
      abbrev: "O",
      tokens: ["Free", "$20", "$30", "$40", "$50", "$60"],
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
    }
  ],
  trains: [
    {
      name: "2",
      quantity: 5,
      price: "$80",
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
      quantity: 4,
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
          color: "gray",
          note: "Rusted by D"
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
      price: "$630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "D",
      quantity: 6,
      price: "$1100",
      color: "gray",
      description: "Cost $800 when trading in a 4T, 5T or 6T",
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
      name: "Midland Uruguay Railway",
      price: "$20",
      revenue: "$5",
      description:
        "Owning corporation may place a YELLOW track tile, paying all costs, in addition to their normal track placement. This action immediately closes the Private."
    },
    {
      name: "Central Uruguay Railway",
      price: "$40",
      revenue: "$10",
      description:
        "Owning corporation may upgrade a YELLOW track tile to GREEN, paying all costs, in addition to their normal track placement. This action immediately closes the Private."
    },
    {
      name: "North Western of Uruguay Railway",
      price: "60",
      revenue: "$15",
      description:
        "Owning corporation may place a station token in Tucarembo (H14) or Melo (F7), paying all costs, if there are no existing tokens in the hex. This action applies to the one token placement limit per operating round. This action immediately closes the Private."
    },
    {
      name: "Uruguay Northern Railway",
      price: "$80",
      revenue: "$20",
      description:
        "Owning corporation may place a GREEN track tile (as a direct placement, not an upgrade), paying all costs. This action applies to the two track placement limit per operating round. This action immediately closes the Private."
    },
    {
      name: "Uruguay East Coast Railway",
      price: "$100",
      revenue: "$25",
      description:
        "Allows owning corporation to continue operating a 2 Train until the first 5 train is purchased."
    },
    {
      name: "Frey Bentos Corned Beef",
      price: "$120",
      revenue: "$30",
      description:
        "Owning corporation receives an additional $20 bonus income for one run to Mercedes/Fray Bentos (D1) every operating round. After purchase of first 5 train, this Private closes but $20 bonus run income remains with owning corporation."
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains may be purchased"
    },
    {
      name: "D",
      limit: "2",
      number: "6",
      rust: "4",
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
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
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
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
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
      values: [100, 90, 82, 76, 71, 67]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        67,
        71,
        76,
        82,
        90,
        { value: 100, label: 100, par: true },
        112,
        126,
        142,
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        325,
        350
      ],
      [
        { value: 53, label: 53, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        66,
        70,
        76,
        82,
        { value: 90, label: 90, par: true },
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        220,
        240,
        260,
        280,
        { value: 300, label: 300, arrow: "up" }
      ],
      [
        { value: 46, label: 46, legend: 0, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        70,
        76,
        { value: 82, label: 82, par: true },
        90,
        100,
        111,
        125,
        140,
        155,
        170,
        185,
        { value: 200, label: 200, arrow: "up" }
      ],
      [
        { value: 39, label: 39, legend: 1, arrow: "down" },
        { value: 48, label: 48, legend: 0 },
        { value: 54, label: 54, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        67,
        71,
        { value: 76, label: 76, par: true },
        82,
        90,
        100,
        110,
        120,
        { value: 130, label: 130, arrow: "up" }
      ],
      [
        { value: 32, label: 32, legend: 1, arrow: "down" },
        { value: 41, label: 41, legend: 1 },
        { value: 48, label: 48, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        62,
        67,
        { value: 71, label: 71, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up" }
      ],
      [
        { value: 25, label: 25, legend: 2, arrow: "down" },
        { value: 34, label: 34, legend: 1 },
        { value: 42, label: 42, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 58, label: 58, legend: 0 },
        65,
        { value: 67, label: 67, par: true },
        71,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 18, label: 18, legend: 2, arrow: "down" },
        { value: 27, label: 27, legend: 2 },
        { value: 36, label: 36, legend: 1 },
        { value: 45, label: 45, legend: 1 },
        { value: 54, label: 54, legend: 0 },
        63,
        66,
        69,
        { value: 70, label: 70, arrow: "up" }
      ],
      [
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        { value: 68, label: 68, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
          "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "orange",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      },
      {
        color: "brown",
        description:
          "Players may purchase any number of shares of this corporation in one stock action",
        icon: "money-bill-wave"
      }
    ]
  },

  tiles: {
    "7": 6,
    "57": 4,
    "9": 9,
    "8": 10,
    "16": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "15": 2,
    "53": 2,
    "59": 2,
    "14": 3,
    "23": 3,
    "24": 3,
    "39": 1,
    "40": 1,
    "44": 1,
    "47": 1,
    "64": 1,
    "65": 1,
    "66": 1,
    "67": 1,
    "68": 1,
    "70": 1,
    "41": 2,
    "42": 2,
    "43": 2,
    "45": 2,
    "46": 2,
    "61": 2,
    "63": 3
  },

  map: {
    print: "landscape",
    hexes: [
      {
        color: "plain",
        hexes: [
          "B6",
          "B8",
          "C3",
          "C5",
          "C7",
          "C11",
          "D2",
          "D4",
          "D6",
          "D8",
          "D10",
          "E5",
          "E7",
          "E11",
          "E13",
          "F2",
          "F4",
          "F6",
          "F8",
          "F10",
          "F12",
          "F14",
          "F16",
          "G5",
          "G7",
          "G9",
          "G11",
          "G13",
          "G17",
          "H2",
          "H4",
          "H6",
          "H10",
          "H12",
          "H14",
          "H16",
          "I5",
          "I7",
          "I9",
          "I11",
          "I13",
          "I15",
          "J2",
          "J4",
          "J6",
          "J10",
          "J14",
          "J16",
          "J18",
          "K3",
          "K7",
          "K9",
          "K11",
          "K13",
          "K15",
          "K17",
          "L6",
          "L10",
          "L14"
        ]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Argentina"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 5,
            type: "offboard"
          }
        ],
        hexes: ["A3"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Argentina"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 6,
            type: "offboard"
          }
        ],
        hexes: ["A5"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Brazil"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 6,
            type: "offboard"
          }
        ],
        hexes: ["B10"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Brazil"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 6,
            type: "offboard"
          }
        ],
        hexes: ["C13"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Brazil"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 1,
            type: "offboard"
          }
        ],
        hexes: ["D14"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Argentina"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 4,
            type: "offboard"
          }
        ],
        hexes: ["E1"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Brazil"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "60"
            }
          ]
        },
        track: [
          {
            side: 6,
            type: "offboard"
          }
        ],
        hexes: ["H18"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "0"
            },
            {
              color: "brown",
              cost: "10"
            }
          ]
        },
        track: [
          {
            side: 4,
            type: "offboard"
          }
        ],
        hexes: ["G1"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "0"
            },
            {
              color: "brown",
              cost: "10"
            }
          ]
        },
        track: [
          {
            side: 4,
            type: "offboard"
          }
        ],
        hexes: ["I1"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "0"
            },
            {
              color: "brown",
              cost: "10"
            }
          ]
        },
        track: [
          {
            side: 3,
            type: "offboard"
          }
        ],
        hexes: ["L4"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 3,
            type: "offboard"
          }
        ],
        hexes: ["M7"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 2,
            type: "offboard"
          }
        ],
        hexes: ["M9"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "10"
            },
            {
              color: "brown",
              cost: "20"
            }
          ]
        },
        track: [
          {
            side: 3,
            type: "offboard"
          }
        ],
        hexes: ["M11"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "10"
            },
            {
              color: "brown",
              cost: "20"
            }
          ]
        },
        track: [
          {
            side: 2,
            type: "offboard"
          }
        ],
        hexes: ["M13"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 3,
            type: "offboard"
          }
        ],
        hexes: ["M7"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 3,
            type: "offboard"
          }
        ],
        hexes: ["M15"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 1,
            type: "offboard"
          }
        ],
        hexes: ["L18"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {
            name: "Port"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            }
          ]
        },
        track: [
          {
            side: 2,
            type: "offboard"
          }
        ],
        hexes: ["M17"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 75,
            percent: 0.55,
            name: { name: "Caseros" }
          },
          {
            angle: 285,
            percent: 0.55,
            name: { name: "Bella Union" }
          }
        ],
        hexes: ["B4"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 75,
            percent: 0.55,
            name: { name: "Livramento" }
          },
          {
            angle: 285,
            percent: 0.55,
            name: { name: "Rivera" }
          }
        ],
        hexes: ["D12"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 75,
            percent: 0.55,
            name: { name: "Salto" }
          },
          {
            angle: 285,
            percent: 0.55,
            name: { name: "Concordia" }
          }
        ],
        hexes: ["E3"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        cities: [
          {
            angle: 75,
            percent: 0.55,
            name: { name: "Mercedes" }
          },
          {
            angle: 285,
            percent: 0.55,
            name: { name: "Fray Bentos" }
          }
        ],
        hexes: ["I3"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Artigas"
            }
          }
        ],
        hexes: ["C9"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Tucarembo"
            }
          }
        ],
        hexes: ["E9"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Paysandu"
            }
          }
        ],
        hexes: ["G3"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Melo"
            }
          }
        ],
        hexes: ["G15"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Durzano"
            }
          }
        ],
        hexes: ["H8"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Florida"
            }
          }
        ],
        hexes: ["J8"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "San Jose"
            }
          }
        ],
        hexes: ["K5"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Minas"
            }
          }
        ],
        hexes: ["J12"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Maldonado"
            }
          }
        ],
        hexes: ["L12"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "B",
            percent: 0.75
          }
        ],
        values: [
          {
            value: 30,
            angle: 270,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Treinta y Tres",
              reverse: true
            }
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 3
          }
        ],
        hexes: ["I17"]
      },
      {
        color: "yellow",
        labels: [
          {
            label: "B",
            angle: 290,
            percent: 0.667
          }
        ],
        values: [
          {
            value: 30,
            angle: 235,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Rocha"
            }
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 5
          }
        ],
        hexes: ["L16"]
      },
      {
        color: "gray",
        labels: [
          {
            label: "Monte-",
            size: 10,
            angle: 180,
            percent: 0.94
          },
          {
            label: "video",
            size: 10,
            angle: 180,
            percent: 0.81
          }
        ],
        cities: [
          {
            size: 4
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 2
          },
          {
            side: 3
          },
          {
            side: 4
          },
          {
            side: 5
          },
          {
            side: 6
          }
        ],
        hexes: ["L8"]
      }
    ]
  }
};

export default game;
