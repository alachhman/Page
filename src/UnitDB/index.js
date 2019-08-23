export const unitList=[
    {
        id: 0,
        name: "MC",
        type: "Electric",
        rarity: 3,
        role: "Striker",
        weakness: "Ground",
        passives: ["Endurance"],
        pokemon: {
            name:"Pikachu",
            stats:[399,194,83,255,110,210]
        },
        moves: [
            {
                name: "Thunder Shock",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 20,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Potion",
                type: "0",
                effect: "Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Thunderbolt",
                type: "Spec",
                effect: "PAR",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Jump Start!",
                type: "0",
                effect: "SAtk2 | Spd1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 1,
        name: "Brock",
        type: "Rock",
        rarity: 3,
        role: "Tech",
        weakness: "Grass",
        passives: ["Stoic 2"],
        pokemon: {
            name:"Onix",
            stats:[465,161,144,52,115,194]
        },
        moves: [
            {
                name: "Rock Throw",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 27,
                accuracy: 90,
                cost: 1
            },
            {
                name: "Potion",
                type: "0",
                effect: "Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rock Tomb",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "Rock-Hard Determination",
                type: "0",
                effect: "Atk2 | Def2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 2,
        name: "Sygna Suit Brock",
        type: "Rock",
        rarity: 3,
        role: "Striker",
        weakness: "Fighting",
        passives: ["Sand Fortress"],
        pokemon: {
            name:"Tyranitar",
            stats:[419,207,143,101,66,111]
        },
        moves: [
            {
                name: "Rock Tomb",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rock Slide",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 126,
                accuracy: 90,
                cost: 3
            },
            {
                name: "Rock-Solid Finisher",
                type: "0",
                effect: "Def1 | Focus",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 3,
        name: "Misty",
        type: "Water",
        rarity: 3,
        role: "Support",
        weakness: "Electric",
        passives: ["Helping Hand 2"],
        pokemon: {
            name:"Starmie",
            stats:[462,97,151,159,161,177]
        },
        moves: [
            {
                name: "Bubble Beam",
                type: "Spec",
                effect: "Spd-1",
                chance: 10.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Def All",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Catch Us If You Can!",
                type: "0",
                effect: "Evd2 | HoT",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Hydro Pump",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 150,
                accuracy: 80,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 4,
        name: "Lt. Surge",
        type: "Electric",
        rarity: 3,
        role: "Tech",
        weakness: "Ground",
        passives: ["Last Word"],
        pokemon: {
            name:"Voltorb",
            stats:[382,116,113,156,113,334]
        },
        moves: [
            {
                name: "Thunderbolt",
                type: "Spec",
                effect: "PAR",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Eerie Impulse",
                type: "0",
                effect: "SAtk-2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 2
            },
            {
                name: "A Surge of Power!",
                type: "0",
                effect: "SAtk2 | Evd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 5,
        name: "Erika",
        type: "Grass",
        rarity: 3,
        role: "Tech",
        weakness: "Fire",
        passives: ["Piercing Gaze"],
        pokemon: {
            name:"Vileplume",
            stats:[507,41,115,159,192,160]
        },
        moves: [
            {
                name: "Energy Ball",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Def",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Stun Spore",
                type: "Status",
                effect: "PAR",
                chance: 0.0,
                power: 0,
                accuracy: 90,
                cost: 2
            },
            {
                name: "Pour it On!",
                type: "0",
                effect: "SAtk3 | Def1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 6,
        name: "Blaine",
        type: "Fire",
        rarity: 4,
        role: "Tech",
        weakness: "Fire",
        passives: ["Hostile Environment 1"],
        pokemon: {
            name:"Ponyta",
            stats:[492,151,119,119,122,358]
        },
        moves: [
            {
                name: "Flame Wheel",
                type: "Phys",
                effect: "BURN",
                chance: 10.0,
                power: 50,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Fire Spin",
                type: "Spec",
                effect: "Trapped",
                chance: 100.0,
                power: 45,
                accuracy: 85,
                cost: 2
            },
            {
                name: "Raging Inferno!",
                type: "0",
                effect: "Atk3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Sunny Day",
                type: "0",
                effect: "Sunny",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 7,
        name: "Lorelei",
        type: "Ice",
        rarity: 4,
        role: "Tech",
        weakness: "Grass",
        passives: ["Hostile Environment 1"],
        pokemon: {
            name:"Lapras",
            stats:[500,103,137,188,186,207]
        },
        moves: [
            {
                name: "Ice Beam",
                type: "Spec",
                effect: "FRZ",
                chance: 10.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Blizzard",
                type: "Spec",
                effect: "FRZ",
                chance: 10.0,
                power: 151,
                accuracy: 90,
                cost: 3
            },
            {
                name: "Brace Yourself!",
                type: "0",
                effect: "HoT | Def~HP",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 8,
        name: "Bruno",
        type: "Fighting",
        rarity: 4,
        role: "Sttriker",
        weakness: "Flying",
        passives: ["Critical Strike 2"],
        pokemon: {
            name:"Machamp",
            stats:[495,256,108,150,90,154]
        },
        moves: [
            {
                name: "Karate Chop",
                type: "Phys",
                effect: "CRIT",
                chance: 12.5,
                power: 19,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Cross Chop",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 120,
                accuracy: 80,
                cost: 3
            },
            {
                name: "Hoo Hah!",
                type: "0",
                effect: "Atk2 | SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 9,
        name: "Agatha",
        type: "Ghost",
        rarity: 4,
        role: "Tech",
        weakness: "Dark",
        passives: ["Wide Awake"],
        pokemon: {
            name:"Gengar",
            stats:[417,119,102,283,137,307]
        },
        moves: [
            {
                name: "Lick",
                type: "Phys",
                effect: "PAR",
                chance: 30.0,
                power: 14,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Hypnosis",
                type: "Status",
                effect: "SLEEP",
                chance: 0.0,
                power: 0,
                accuracy: 75,
                cost: 2
            },
            {
                name: "Run Along Now!",
                type: "0",
                effect: "Spd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Shadow Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 10.0,
                power: 118,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 10,
        name: "Agatha",
        type: "Ghost",
        rarity: 4,
        role: "Tech",
        weakness: "Dark",
        passives: ["Wide Awake"],
        pokemon: {
            name:"Mega Gengar",
            stats:[417,119,102,339,150,337]
        },
        moves: [
            {
                name: "Hex",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 45,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Hypnosis",
                type: "Status",
                effect: "SLEEP",
                chance: 0.0,
                power: 0,
                accuracy: 75,
                cost: 2
            },
            {
                name: "Run Along Now!",
                type: "0",
                effect: "Spd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Shadow Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 10.0,
                power: 118,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 11,
        name: "Kris",
        type: "Water",
        rarity: 5,
        role: "Striker",
        weakness: "Grass",
        passives: ["Endurance","Water Shift"],
        pokemon: {
            name:"Totodile",
            stats:[522,199,108,90,96,234]
        },
        moves: [
            {
                name: "Waterfall",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 54,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Mega Kick",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 200,
                accuracy: 75,
                cost: 3
            },
            {
                name: "Pick Up the Pace!",
                type: "0",
                effect: "Spd2 | Focus | Lock-on",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 12,
        name: "Kris",
        type: "Water",
        rarity: 5,
        role: "Striker",
        weakness: "Grass",
        passives: ["Endurance","Water Shift"],
        pokemon: {
            name:"Croconaw",
            stats:[537,220,111,95,99,255]
        },
        moves: [
            {
                name: "Waterfall",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 54,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Mega Kick",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 200,
                accuracy: 75,
                cost: 3
            },
            {
                name: "Pick Up the Pace!",
                type: "0",
                effect: "Spd2 | Focus",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 13,
        name: "Kris",
        type: "Water",
        rarity: 5,
        role: "Striker",
        weakness: "Grass",
        passives: ["Endurance","Water Shift"],
        pokemon: {
            name:"Feraligatr",
            stats:[560,229,116,104,103,265]
        },
        moves: [
            {
                name: "Waterfall",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 54,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Mega Kick",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 200,
                accuracy: 75,
                cost: 3
            },
            {
                name: "Pick Up the Pace!",
                type: "0",
                effect: "Spd2 | Focus",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 14,
        name: "Bugsy",
        type: "Bug",
        rarity: 3,
        role: "Striker",
        weakness: "Rock",
        passives: ["Critical Strike 2"],
        pokemon: {
            name:"Beedrill",
            stats:[370,270,70,99,85,255]
        },
        moves: [
            {
                name: "Fell Stinger",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 52,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Sure Crit",
                type: "0",
                effect: "Focus",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Twineedle",
                type: "Phys",
                effect: "PSN",
                chance: 21.0,
                power: 48,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Beehold My Research!",
                type: "0",
                effect: "Spd1 | Evd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 15,
        name: "Bugsy",
        type: "Bug",
        rarity: 3,
        role: "Striker",
        weakness: "Rock",
        passives: ["Critical Strike 2"],
        pokemon: {
            name:"Mega Beedrill",
            stats:[370,323,70,99,85,305]
        },
        moves: [
            {
                name: "Fell Stinger",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 52,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Sure Crit",
                type: "0",
                effect: "Focus",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Twineedle",
                type: "Phys",
                effect: "PSN",
                chance: 21.0,
                power: 48,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Beehold My Research!",
                type: "0",
                effect: "Spd1 | Evd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 16,
        name: "Whitney",
        type: "Normal",
        rarity: 4,
        role: "Tech",
        weakness: "Fighting",
        passives: ["Mad Strength 2"],
        pokemon: {
            name:"Miltank",
            stats:[507,244,93,102,109,223]
        },
        moves: [
            {
                name: "Body Slam",
                type: "Phys",
                effect: "PAR",
                chance: 30.0,
                power: 63,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Stomp",
                type: "Phys",
                effect: "Flinch",
                chance: 30.0,
                power: 63,
                accuracy: 100,
                cost: 2
            },
            {
                name: "I'm All Kinds of Strong",
                type: "0",
                effect: "Def2 | Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 17,
        name: "Pryce",
        type: "Ice",
        rarity: 3,
        role: "Tech",
        weakness: "Electric",
        passives: ["SuperDuper Effective 2"],
        pokemon: {
            name:"Seel",
            stats:[487,194,58,194,112,128]
        },
        moves: [
            {
                name: "Ice Beam",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Icy Wind",
                type: "Spec",
                effect: "Spd-1",
                chance: 100.0,
                power: 110,
                accuracy: 95,
                cost: 3
            },
            {
                name: "I'll Teach You a Lesson",
                type: "0",
                effect: "SAtk2 | SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 18,
        name: "Clair",
        type: "Dragon",
        rarity: 4,
        role: "Striker",
        weakness: "Dragon",
        passives: ["Racing Rain 2"],
        pokemon: {
            name:"Kingdra",
            stats:[475,204,121,258,112,202]
        },
        moves: [
            {
                name: "Dragon Breath",
                type: "Spec",
                effect: "PAR",
                chance: 30.0,
                power: 50,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Draco Meteor",
                type: "Spec",
                effect: "SAtk-2 (self)",
                chance: 100.0,
                power: 163,
                accuracy: 90,
                cost: 3
            },
            {
                name: "Victory is Mine!",
                type: "0",
                effect: "Crit1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 19,
        name: "Janine",
        type: "Poison",
        rarity: 3,
        role: "Tech",
        weakness: "Fire",
        passives: ["Hostile Environment 1"],
        pokemon: {
            name:"Araidos",
            stats:[387,172,133,100,128,189]
        },
        moves: [
            {
                name: "Cross Poison",
                type: "Phys",
                effect: "PSN",
                chance: 10.0,
                power: 45,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Venom Drench",
                type: "Status",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 100,
                cost: 0
            },
            {
                name: "Move Like the Wind!",
                type: "0",
                effect: "Spd2 | Evd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 20,
        name: "Will",
        type: "Psychic",
        rarity: 4,
        role: "Tech",
        weakness: "Electric",
        passives: ["Impervious"],
        pokemon: {
            name:"Xatu",
            stats:[405,151,168,201,168,304]
        },
        moves: [
            {
                name: "Stored Power",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 15,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Confuse Ray",
                type: "0",
                effect: "Confuse",
                chance: 0.0,
                power: 0,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Our Power Is Limitless!",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Air Slash",
                type: "Spec",
                effect: "Flinch",
                chance: 30.0,
                power: 54,
                accuracy: 95,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 21,
        name: "Karen",
        type: "Dark",
        rarity: 5,
        role: "Stirker",
        weakness: "Fighting",
        passives: ["Flameproof","Wide Awake"],
        pokemon: {
            name:"Houndoom",
            stats:[460,268,141,306,141,288]
        },
        moves: [
            {
                name: "Bite",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 50,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Snarl",
                type: "Spec",
                effect: "SAtk-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "Entertain Me!",
                type: "0",
                effect: "SAtk3~HP",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 22,
        name: "Karen",
        type: "Dark",
        rarity: 5,
        role: "Stirker",
        weakness: "Fighting",
        passives: ["Flameproof","Wide Awake"],
        pokemon: {
            name:"Mega Houndoom",
            stats:[460,268,155,336,141,345]
        },
        moves: [
            {
                name: "Snarl",
                type: "Spec",
                effect: "SAtk-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Dark Pulse",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 114,
                accuracy: 100,
                cost: 3
            },
            {
                name: "Entertain Me!",
                type: "0",
                effect: "SAtk3~HP",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 23,
        name: "Brendan",
        type: "Grass",
        rarity: 5,
        role: "Stirker",
        weakness: "Poison",
        passives: ["Haste","Lithe"],
        pokemon: {
            name:"Treeko",
            stats:[430,306,123,306,123,340]
        },
        moves: [
            {
                name: "Bullet Seed",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 63,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Leaf Storm",
                type: "Spec",
                effect: "SAtk-2 (self)",
                chance: 100.0,
                power: 163,
                accuracy: 90,
                cost: 3
            },
            {
                name: "No Turning Back!",
                type: "0",
                effect: "Atk(1+X) | SAtk(1+X)",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 24,
        name: "Roxanne",
        type: "Rock",
        rarity: 3,
        role: "Support",
        weakness: "Fighting",
        passives: ["Surging Sand 5"],
        pokemon: {
            name:"Nosepass",
            stats:[299,96,160,101,160,85]
        },
        moves: [
            {
                name: "Ancient Power",
                type: "Spec",
                effect: "All+1",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Def All",
                type: "0",
                effect: "Def2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Study Buddies!",
                type: "0",
                effect: "SAtk2 | Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Wide Guard",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 25,
        name: "Brawly",
        type: "Fighting",
        rarity: 3,
        role: "Tech",
        weakness: "Flying",
        passives: ["Power Reserves 2"],
        pokemon: {
            name:"Makuhita",
            stats:[599,160,71,52,82,147]
        },
        moves: [
            {
                name: "Rock Smash",
                type: "Phys",
                effect: "Def-1",
                chance: 50.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Potion",
                type: "0",
                effect: "Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Brick Break",
                type: "Phys",
                effect: "0",
                chance: 100.0,
                power: 42,
                accuracy: 100,
                cost: 2
            },
            {
                name: "A Rain of Fists!",
                type: "0",
                effect: "Atk2 | Def1 | SDef1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 26,
        name: "Flannery",
        type: "Fire",
        rarity: 3,
        role: "Tech",
        weakness: "Water",
        passives: ["Impervious"],
        pokemon: {
            name:"Torkoal",
            stats:[382,67,162,173,144,160]
        },
        moves: [
            {
                name: "Ember",
                type: "Spec",
                effect: "BURN",
                chance: 10.0,
                power: 20,
                accuracy: 100,
                cost: 1
            },
            {
                name: "X Sp Atk",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Will-O-Wisp",
                type: "0",
                effect: "BURN",
                chance: 0.0,
                power: 0,
                accuracy: 90,
                cost: 2
            },
            {
                name: "Too Hot to Handle!",
                type: "0",
                effect: "Def2 | Crit 2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 27,
        name: "Norman",
        type: "Normal",
        rarity: 3,
        role: "Striker",
        weakness: "Fighting",
        passives: ["Power Reserves 2"],
        pokemon: {
            name:"Slaking",
            stats:[445,272,110,31,110,100]
        },
        moves: [
            {
                name: "Body Slam",
                type: "Phys",
                effect: "PAR",
                chance: 30.0,
                power: 63,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Double Edge",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 200,
                accuracy: 100,
                cost: 3
            },
            {
                name: "All-Out Effort",
                type: "0",
                effect: "Heal | Move 2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 300,
            maxPower: 360
        }
    },
    {
        id: 28,
        name: "Winona",
        type: "Flying",
        rarity: 3,
        role: "Tech",
        weakness: "Electric",
        passives: ["Racing Rain 2"],
        pokemon: {
            name:"Pelipper",
            stats:[390,156,113,156,143,192]
        },
        moves: [
            {
                name: "Air Slash",
                type: "Spec",
                effect: "Flinch",
                chance: 30.0,
                power: 54,
                accuracy: 95,
                cost: 2
            },
            {
                name: "Rain Dance",
                type: "0",
                effect: "Rain",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Graceful Aerobatics!",
                type: "0",
                effect: "Def2 | Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Hurricane",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 151,
                accuracy: 70,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 29,
        name: "Tate",
        type: "Psychic",
        rarity: 3,
        role: "Striker",
        weakness: "Dark",
        passives: ["Power Chain 3","Headstrong","Unbending"],
        pokemon: {
            name:"Solrock",
            stats:[419,270,147,83,99,128]
        },
        moves: [
            {
                name: "Zen Headbutt",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 61,
                accuracy: 90,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rock Tomb",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "All as One!",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 30,
        name: "Liza",
        type: "Psychic",
        rarity: 3,
        role: "Support",
        weakness: "Bug",
        passives: ["Power Chain 3","Dauntless","Stalwart"],
        pokemon: {
            name:"Lunatone",
            stats:[519,95,99,128,130,112]
        },
        moves: [
            {
                name: "Confusion",
                type: "Spec",
                effect: "Confuse",
                chance: 10.0,
                power: 21,
                accuracy: 100,
                cost: 1
            },
            {
                name: "X Sp Def All",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Of One Mind!",
                type: "0",
                effect: "Atk2 | SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Psychic",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 118,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 31,
        name: "Phoebe",
        type: "Ghost",
        rarity: 5,
        role: "Support",
        weakness: "Dark",
        passives: ["Pass It On","Vigilance"],
        pokemon: {
            name:"Dusclops",
            stats:[477,181,197,130,214,148]
        },
        moves: [
            {
                name: "Shadow Punch",
                type: "Phys",
                effect: "Lock-on",
                chance: 100.0,
                power: 54,
                accuracy: 0,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Unbreakable Bonds!",
                type: "0",
                effect: "Move/Atk~HP",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Double Edge",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 200,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 32,
        name: "Drake",
        type: "Dragon",
        rarity: 4,
        role: "Support",
        weakness: "Fairy",
        passives: ["Terrify 1"],
        pokemon: {
            name:"Salamence",
            stats:[425,218,159,214,158,157]
        },
        moves: [
            {
                name: "Dragon Claw",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 60,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Def All",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Hard to Starboard!",
                type: "0",
                effect: "Def2 | Move2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Dragon Breath",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 50,
                accuracy: 100,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 33,
        name: "Noland",
        type: "Bug",
        rarity: 4,
        role: "Striker",
        weakness: "Flying",
        passives: ["Headstrong"],
        pokemon: {
            name:"Pinsir",
            stats:[477,305,118,71,118,251]
        },
        moves: [
            {
                name: "Fury Cutter",
                type: "Phys",
                effect: "0",
                chance: 100.0,
                power: 9,
                accuracy: 95,
                cost: 1
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "X-Scissor",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 60,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Bring it On!",
                type: "0",
                effect: "Spd2 | Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 34,
        name: "Noland",
        type: "Bug",
        rarity: 4,
        role: "Striker",
        weakness: "Flying",
        passives: ["Headstrong"],
        pokemon: {
            name:"Mega Pinsir",
            stats:[477,365,141,71,118,251]
        },
        moves: [
            {
                name: "Fury Cutter",
                type: "Phys",
                effect: "0",
                chance: 100.0,
                power: 9,
                accuracy: 95,
                cost: 1
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "X-Scissor",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 60,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Bring it On!",
                type: "0",
                effect: "Spd2 | Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 35,
        name: "Barry",
        type: "Water",
        rarity: 3,
        role: "Striker",
        weakness: "Grass",
        passives: ["Power Flux 5"],
        pokemon: {
            name:"Piplup",
            stats:[399,160,110,255,110,161]
        },
        moves: [
            {
                name: "Bubble",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 22,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Full Heal",
                type: "0",
                effect: "Cleanse",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Bubble Beam",
                type: "Spec",
                effect: "Spd-1",
                chance: 10.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "No Hesitation!",
                type: "0",
                effect: "Spd2 | Crit1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 36,
        name: "Barry",
        type: "Water",
        rarity: 3,
        role: "Striker",
        weakness: "Grass",
        passives: ["Power Flux 5"],
        pokemon: {
            name:"Prinplup",
            stats:[412,164,113,276,113,168]
        },
        moves: [
            {
                name: "Bubble",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 22,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Full Heal",
                type: "0",
                effect: "Cleanse",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Bubble Beam",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "No Hesitation!",
                type: "0",
                effect: "Spd2 | Crit1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 37,
        name: "Barry",
        type: "Water",
        rarity: 3,
        role: "Striker",
        weakness: "Grass",
        passives: ["Power Flux 5"],
        pokemon: {
            name:"Empoleon",
            stats:[429,170,117,286,117,190]
        },
        moves: [
            {
                name: "Bubble",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 22,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Full Heal",
                type: "0",
                effect: "Cleanse",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Bubble Beam",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "No Hesitation!",
                type: "0",
                effect: "Spd2 | Crit1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 38,
        name: "Roark",
        type: "Rock",
        rarity: 3,
        role: "Striker",
        weakness: "Water",
        passives: ["Headstrong"],
        pokemon: {
            name:"Cranidos",
            stats:[655,257,80,80,79,157]
        },
        moves: [
            {
                name: "Smack Down",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 24,
                accuracy: 100,
                cost: 1
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Head Smash",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 225,
                accuracy: 80,
                cost: 3
            },
            {
                name: "You're Gonna Need a Helmet!",
                type: "0",
                effect: "Move +3 | Lock-on",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 39,
        name: "Gardenia",
        type: "Grass",
        rarity: 4,
        role: "Striker",
        weakness: "Flying",
        passives: ["Speeding Sun 2"],
        pokemon: {
            name:"Roserade",
            stats:[354,102,84,304,175,252]
        },
        moves: [
            {
                name: "Absorb",
                type: "Spec",
                effect: "Absorb",
                chance: 100.0,
                power: 22,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Leaf Storm",
                type: "Spec",
                effect: "SAtk-2 (self)",
                chance: 100.0,
                power: 163,
                accuracy: 90,
                cost: 3
            },
            {
                name: "Trust in Nature!",
                type: "0",
                effect: "Move +2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 40,
        name: "Maylene",
        type: "Fighting",
        rarity: 3,
        role: "Support",
        weakness: "Fairy",
        passives: ["On the Ropes 3"],
        pokemon: {
            name:"Meditite",
            stats:[402,102,145,95,145,186]
        },
        moves: [
            {
                name: "Rock Smash",
                type: "Phys",
                effect: "Def-1",
                chance: 50.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack All",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Gloves Off!",
                type: "0",
                effect: "Crit1 | Lock-on",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Drain Punch",
                type: "Phys",
                effect: "Absorb",
                chance: 100.0,
                power: 109,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 41,
        name: "Crasher Wake",
        type: "Water",
        rarity: 3,
        role: "Striker",
        weakness: "Grass",
        passives: ["Racing Rain 2","Aggravation 1"],
        pokemon: {
            name:"Floatzel",
            stats:[375,182,116,182,126,316]
        },
        moves: [
            {
                name: "Waterfall",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 54,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Water Pulse",
                type: "Spec",
                effect: "Confuse",
                chance: 20.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "CRASH!",
                type: "0",
                effect: "Atk3 | SAtk1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 42,
        name: "Candice",
        type: "Ice",
        rarity: 3,
        role: "Tech",
        weakness: "Fire",
        passives: ["Antifreeze","Snow Shelter"],
        pokemon: {
            name:"Abomasnow",
            stats:[437,182,103,127,105,192]
        },
        moves: [
            {
                name: "Ice Punch",
                type: "Phys",
                effect: "FRZ",
                chance: 10.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Hail",
                type: "0",
                effect: "Hail",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "It's All About Focus!",
                type: "0",
                effect: "AtkX | SDefX",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 43,
        name: "Flint",
        type: "Fire",
        rarity: 4,
        role: "Striker",
        weakness: "Water",
        passives: ["Power Reserves 2"],
        pokemon: {
            name:"Infernape",
            stats:[427,275,104,275,104,208]
        },
        moves: [
            {
                name: "Fire Punch",
                type: "Phys",
                effect: "BURN",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Fire Blast",
                type: "Spec",
                effect: "BURN",
                chance: 10.0,
                power: 139,
                accuracy: 85,
                cost: 3
            },
            {
                name: "We're on Fire!",
                type: "0",
                effect: "Atk2 | SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 44,
        name: "Thorton",
        type: "Steel",
        rarity: 4,
        role: "Tech",
        weakness: "Fire",
        passives: ["Aggravation 1"],
        pokemon: {
            name:"Bronzong",
            stats:[379,200,187,198,185,152]
        },
        moves: [
            {
                name: "Gyro Ball",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 52,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Zen Headbutt",
                type: "Phys",
                effect: "Flinch",
                chance: 20.0,
                power: 61,
                accuracy: 90,
                cost: 2
            },
            {
                name: "Analysis Complete!",
                type: "0",
                effect: "Def1 | SDef1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Telekinesis",
                type: "0",
                effect: "Lock-on",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 45,
        name: "Cheryl",
        type: "Normal",
        rarity: 3,
        role: "Support",
        weakness: "Fighting",
        passives: ["Healing Hand 2"],
        pokemon: {
            name:"Blissey",
            stats:[612,67,38,143,164,110]
        },
        moves: [
            {
                name: "Hyper Voice",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 75,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk All",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "All Out of Patience!",
                type: "0",
                effect: "Heal | Def2 | SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Flamethrower",
                type: "Spec",
                effect: "BURN",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 300,
            maxPower: 360
        }
    },
    {
        id: 46,
        name: "Marley",
        type: "Fire",
        rarity: 3,
        role: "Support",
        weakness: "Ground",
        passives: ["Haste"],
        pokemon: {
            name:"Arcanine",
            stats:[519,141,159,140,145,177]
        },
        moves: [
            {
                name: "Flame Wheel",
                type: "Phys",
                effect: "BURN",
                chance: 10.0,
                power: 50,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed All",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "We're Standing Strong!",
                type: "0",
                effect: "Cleanse",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Flamethrower",
                type: "Spec",
                effect: "BURN",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 47,
        name: "Rosa",
        type: "Grass",
        rarity: 5,
        role: "Support",
        weakness: "Flying",
        passives: ["Stalwart"],
        pokemon: {
            name:"Snivy",
            stats:[512,74,162,96,183,148]
        },
        moves: [
            {
                name: "Energy Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 10.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk All",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Time to Energize!",
                type: "0",
                effect: "Move6",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Giga Drain",
                type: "Spec",
                effect: "Absorb",
                chance: 100.0,
                power: 109,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 48,
        name: "Rosa",
        type: "Grass",
        rarity: 5,
        role: "Support",
        weakness: "Flying",
        passives: ["Stalwart"],
        pokemon: {
            name:"Servine",
            stats:[535,76,166,99,204,152]
        },
        moves: [
            {
                name: "Energy Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 10.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk All",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Time to Energize!",
                type: "0",
                effect: "Move6",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Giga Drain",
                type: "Spec",
                effect: "Absorb",
                chance: 100.0,
                power: 109,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 49,
        name: "Rosa",
        type: "Grass",
        rarity: 5,
        role: "Support",
        weakness: "Flying",
        passives: ["Stalwart"],
        pokemon: {
            name:"Serperior",
            stats:[595,79,172,104,224,158]
        },
        moves: [
            {
                name: "Energy Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 10.0,
                power: 58,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk All",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Time to Energize!",
                type: "0",
                effect: "Move6",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Giga Drain",
                type: "Spec",
                effect: "Absorb",
                chance: 100.0,
                power: 109,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 50,
        name: "Clay",
        type: "Ground",
        rarity: 3,
        role: "Tech",
        weakness: "Grass",
        passives: ["Antitoxin"],
        pokemon: {
            name:"Palpitoad",
            stats:[385,163,114,127,129,190]
        },
        moves: [
            {
                name: "Mud Shot",
                type: "Spec",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "X Sp Defense",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Bulldoze",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 96,
                accuracy: 100,
                cost: 3
            },
            {
                name: "It Ain't Over!",
                type: "0",
                effect: "Spd2 | Endure",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 51,
        name: "Skyla",
        type: "Flying",
        rarity: 3,
        role: "Support",
        weakness: "Rock",
        passives: ["Haste"],
        pokemon: {
            name:"Swanna",
            stats:[502,158,134,174,134,177]
        },
        moves: [
            {
                name: "Gust",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 24,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Potion",
                type: "0",
                effect: "Heal",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Take Flight!",
                type: "0",
                effect: "Def2 | Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Aerial Ace",
                type: "Phys",
                effect: "Lock-on",
                chance: 100.0,
                power: 54,
                accuracy: 0,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 52,
        name: "Brycen",
        type: "Ice",
        rarity: 3,
        role: "Tech",
        weakness: "Fighting",
        passives: ["Snow Shelter","Healing Hail 1"],
        pokemon: {
            name:"Cryogonal",
            stats:[414,162,92,162,116,282]
        },
        moves: [
            {
                name: "Ice Beam",
                type: "Spec",
                effect: "FRZ",
                chance: 10.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Ancient Power",
                type: "Spec",
                effect: "All+1",
                chance: 10.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Stone-Cold Endurance!",
                type: "0",
                effect: "SDef2 | Endure",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Haze",
                type: "Status",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 53,
        name: "Iris",
        type: "Dragon",
        rarity: 3,
        role: "Striker",
        weakness: "Ice",
        passives: ["Power Reserves 2"],
        pokemon: {
            name:"Haxorus",
            stats:[355,213,110,53,83,134]
        },
        moves: [
            {
                name: "Dragon Claw",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 60,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Outrage",
                type: "Phys",
                effect: "Confuse (self)",
                chance: 100.0,
                power: 138,
                accuracy: 100,
                cost: 3
            },
            {
                name: "You're Going Down!",
                type: "0",
                effect: "Spd1 | Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 54,
        name: "Roxie",
        type: "Poison",
        rarity: 4,
        role: "Striker",
        weakness: "Psychic",
        passives: ["Hit and Run 2"],
        pokemon: {
            name:"Whirlipede",
            stats:[400,255,134,100,104,297]
        },
        moves: [
            {
                name: "Cross Poison",
                type: "Phys",
                effect: "PSN",
                chance: 10.0,
                power: 45,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Poison Jab",
                type: "Phys",
                effect: "PSN",
                chance: 30.0,
                power: 110,
                accuracy: 100,
                cost: 3
            },
            {
                name: "Time to Rock!",
                type: "0",
                effect: "SDef2 | Crit1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 55,
        name: "Marlon",
        type: "Water",
        rarity: 3,
        role: "Tech",
        weakness: "Grass",
        passives: ["Unbending"],
        pokemon: {
            name:"Carracosta",
            stats:[369,179,135,79,99,109]
        },
        moves: [
            {
                name: "Aqua Tail",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 67,
                accuracy: 90,
                cost: 2
            },
            {
                name: "X Def All",
                type: "0",
                effect: "Def2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rough Seas Ahead!",
                type: "0",
                effect: "Follow Me | Endure",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rock Tomb",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 56,
        name: "Shauntal",
        type: "Ghost",
        rarity: 4,
        role: "Striker",
        weakness: "Rock",
        passives: ["Unhindered","Power Reserves 2"],
        pokemon: {
            name:"Chandelure",
            stats:[392,96,88,298,124,187]
        },
        moves: [
            {
                name: "Hex",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 45,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Shadow Ball",
                type: "Spec",
                effect: "SDef-1",
                chance: 20.0,
                power: 118,
                accuracy: 100,
                cost: 3
            },
            {
                name: "A Tale of Triumph!",
                type: "0",
                effect: "Spd3 | Evd2 | BURN (self)",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 57,
        name: "Marshal",
        type: "Fighting",
        rarity: 4,
        role: "Striker",
        weakness: "Psychic",
        passives: ["Gritty 5"],
        pokemon: {
            name:"Conkeldurr",
            stats:[440,254,110,104,68,109]
        },
        moves: [
            {
                name: "Rock Smash",
                type: "Phys",
                effect: "Def-1",
                chance: 50.0,
                power: 55,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Drain Punch",
                type: "Phys",
                effect: "Absorb",
                chance: 100.0,
                power: 109,
                accuracy: 100,
                cost: 3
            },
            {
                name: "It's All Down to This!",
                type: "0",
                effect: "Move2 | Def3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 58,
        name: "Grant",
        type: "Rock",
        rarity: 4,
        role: "Tech",
        weakness: "Steel",
        passives: ["Snow Shelter","Sand Shelter","Aggravation 1"],
        pokemon: {
            name:"Amaura",
            stats:[495,152,125,87,139,225]
        },
        moves: [
            {
                name: "Rock Tomb",
                type: "Phys",
                effect: "Spd-1",
                chance: 100.0,
                power: 46,
                accuracy: 95,
                cost: 2
            },
            {
                name: "X Sp Def",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Rock Slide",
                type: "Phys",
                effect: "Flinch",
                chance: 30.0,
                power: 126,
                accuracy: 90,
                cost: 3
            },
            {
                name: "Over the Wall!",
                type: "0",
                effect: "Move2 | Acc1 | HoT",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 59,
        name: "Korrina",
        type: "Fighting",
        rarity: 3,
        role: "Striker",
        weakness: "Fire",
        passives: ["Unflappable"],
        pokemon: {
            name:"Lucario",
            stats:[362,271,99,255,83,138]
        },
        moves: [
            {
                name: "Vacuum Wave",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 24,
                accuracy: 100,
                cost: 1
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Close Combat",
                type: "Phys",
                effect: "Def/SDef-1 (self)",
                chance: 100.0,
                power: 148,
                accuracy: 100,
                cost: 3
            },
            {
                name: "Skate on Through!",
                type: "0",
                effect: "Atk1 | Spd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 60,
        name: "Korrina",
        type: "Fighting",
        rarity: 3,
        role: "Striker",
        weakness: "Fire",
        passives: ["Unflappable"],
        pokemon: {
            name:"Mega Lucario",
            stats:[362,325,99,255,83,165]
        },
        moves: [
            {
                name: "Power-up Punch",
                type: "Phys",
                effect: "Atk+1",
                chance: 100.0,
                power: 36,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Dire Hit",
                type: "0",
                effect: "Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Close Combat",
                type: "Phys",
                effect: "Def/SDef-1 (self)",
                chance: 100.0,
                power: 148,
                accuracy: 100,
                cost: 3
            },
            {
                name: "Skate on Through!",
                type: "0",
                effect: "Atk1 | Spd3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 160,
            maxPower: 192
        }
    },
    {
        id: 61,
        name: "Ramos",
        type: "Grass",
        rarity: 3,
        role: "Tech",
        weakness: "Ice",
        passives: ["Defense Crush 2"],
        pokemon: {
            name:"Weepinbell",
            stats:[395,173,102,127,112,192]
        },
        moves: [
            {
                name: "Bullet Seed",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 63,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Speed",
                type: "0",
                effect: "Spd2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Sleep Powder",
                type: "Status",
                effect: "SLEEP",
                chance: 0.0,
                power: 0,
                accuracy: 75,
                cost: 2
            },
            {
                name: "Not Too Late to Bloom!",
                type: "0",
                effect: "Atk2 | HoT",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 62,
        name: "Wulfric",
        type: "Ice",
        rarity: 3,
        role: "Striker",
        weakness: "Fire",
        passives: ["Clearheaded"],
        pokemon: {
            name:"Avalugg",
            stats:[419,254,100,34,82,84]
        },
        moves: [
            {
                name: "Ice Fang",
                type: "Phys",
                effect: "FRZ | Flinch",
                chance: 10.0,
                power: 55,
                accuracy: 95,
                cost: 2
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Avalanche",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 90,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Outstanding!",
                type: "0",
                effect: "Follow Me | Def3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 63,
        name: "Siebold",
        type: "Water",
        rarity: 4,
        role: "Striker",
        weakness: "Electric",
        passives: ["Critical Focus 1"],
        pokemon: {
            name:"Clawitzer",
            stats:[444,118,134,286,134,205]
        },
        moves: [
            {
                name: "Water Pulse",
                type: "Spec",
                effect: "Confuse",
                chance: 20.0,
                power: 56,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Atk",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Aura Sphere",
                type: "Spec",
                effect: "Lock-on",
                chance: 100.0,
                power: 54,
                accuracy: 0,
                cost: 2
            },
            {
                name: "The Definition of Art!",
                type: "0",
                effect: "Heal | Focus | HoT",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 64,
        name: "Wikstrom",
        type: "Steel",
        rarity: 4,
        role: "Tech",
        weakness: "Fire",
        passives: ["Stance Change","Vigilance"],
        pokemon: {
            name:"Aegislash-Shield",
            stats:[467,73,186,73,186,221]
        },
        moves: [
            {
                name: "Gyro Ball",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 52,
                accuracy: 100,
                cost: 2
            },
            {
                name: "King's Shield",
                type: "Status",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "En Garde!",
                type: "0",
                effect: "Def2 | SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Iron Head",
                type: "Phys",
                effect: "Flinch",
                chance: 30.0,
                power: 110,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 65,
        name: "Wikstrom",
        type: "Steel",
        rarity: 4,
        role: "Tech",
        weakness: "Fire",
        passives: ["Stance Change","Vigilance"],
        pokemon: {
            name:"Aegislash-Blade",
            stats:[467,219,55,219,55,221]
        },
        moves: [
            {
                name: "Gyro Ball",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 52,
                accuracy: 100,
                cost: 2
            },
            {
                name: "King's Shield",
                type: "Status",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "En Garde!",
                type: "0",
                effect: "Atk2 | Crit2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Iron Head",
                type: "Phys",
                effect: "Flinch",
                chance: 30.0,
                power: 110,
                accuracy: 100,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 66,
        name: "Hau",
        type: "Electric",
        rarity: 4,
        role: "Striker",
        weakness: "Ground",
        passives: ["First Aid 4"],
        pokemon: {
            name:"Raichu-Alolan",
            stats:[352,74,120,271,140,208]
        },
        moves: [
            {
                name: "Thunder Shock",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 20,
                accuracy: 100,
                cost: 1
            },
            {
                name: "X Sp Atk",
                type: "0",
                effect: "SAtk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Discharge",
                type: "Spec",
                effect: "PAR",
                chance: 30.0,
                power: 110,
                accuracy: 100,
                cost: 3
            },
            {
                name: "Feel the Alolan Breeze!",
                type: "0",
                effect: "Spd3 | Evd1",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 67,
        name: "Sophocles",
        type: "Electric",
        rarity: 4,
        role: "Tech",
        weakness: "Ground",
        passives: ["Endurance"],
        pokemon: {
            name:"Togedemaru",
            stats:[422,184,117,119,134,303]
        },
        moves: [
            {
                name: "Zing Zap",
                type: "Phys",
                effect: "Flinch",
                chance: 30.0,
                power: 50,
                accuracy: 100,
                cost: 2
            },
            {
                name: "X Sp Def",
                type: "0",
                effect: "SDef2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Nuzzle",
                type: "Phys",
                effect: "PAR",
                chance: 100.0,
                power: 24,
                accuracy: 100,
                cost: 3
            },
            {
                name: "The Power of Science!",
                type: "0",
                effect: "Atk3 | Spd3 | Def-2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 68,
        name: "Mina",
        type: "Fairy",
        rarity: 3,
        role: "Tech",
        weakness: "Steel",
        passives: ["Impervious"],
        pokemon: {
            name:"Granbull",
            stats:[419,178,112,127,86,159]
        },
        moves: [
            {
                name: "Dazzling Gleam",
                type: "Spec",
                effect: "0",
                chance: 0.0,
                power: 60,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Charm",
                type: "0",
                effect: "Atk-2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "What Great Composition!",
                type: "0",
                effect: "0",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Play Rough",
                type: "Phys",
                effect: "Atk-1",
                chance: 10.0,
                power: 133,
                accuracy: 90,
                cost: 3
            }
        ],
        syncMove: {
            basePower: 200,
            maxPower: 240
        }
    },
    {
        id: 69,
        name: "Olivia",
        type: "Rock",
        rarity: 5,
        role: "Striker",
        weakness: "Grass",
        passives: ["Amped Up 1"],
        pokemon: {
            name:"Lycanroc-Midnight",
            stats:[472,357,130,72,130,216]
        },
        moves: [
            {
                name: "Rock Throw",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 27,
                accuracy: 90,
                cost: 1
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Stone Edge",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 120,
                accuracy: 80,
                cost: 3
            },
            {
                name: "Hard as Diamonds!",
                type: "0",
                effect: "Acc2 | Crit2 | SDef-2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 70,
        name: "Hapu",
        type: "Ground",
        rarity: 3,
        role: "Striker",
        weakness: "Grass",
        passives: ["Clearheaded"],
        pokemon: {
            name:"Mudsdale",
            stats:[399,198,146,192,67,128]
        },
        moves: [
            {
                name: "Mud-Slap",
                type: "Spec",
                effect: "Acc-1",
                chance: 100.0,
                power: 15,
                accuracy: 90,
                cost: 1
            },
            {
                name: "X Accuracy",
                type: "0",
                effect: "Acc2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "High Horsepower",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 127,
                accuracy: 95,
                cost: 3
            },
            {
                name: "Stand Strong!",
                type: "0",
                effect: "Atk1 | Def3",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    },
    {
        id: 71,
        name: "Kahili",
        type: "Flying",
        rarity: 4,
        role: "Striker",
        weakness: "Ice",
        passives: ["Piercing Gaze"],
        pokemon: {
            name:"Toucannon",
            stats:[447,334,136,123,124,203]
        },
        moves: [
            {
                name: "Peck",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 24,
                accuracy: 100,
                cost: 1
            },
            {
                name: "X Attack",
                type: "0",
                effect: "Atk2",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            },
            {
                name: "Beak Blast",
                type: "Phys",
                effect: "0",
                chance: 0.0,
                power: 90,
                accuracy: 100,
                cost: 2
            },
            {
                name: "Second Wind!",
                type: "0",
                effect: "Focus | Endure",
                chance: 0.0,
                power: 0,
                accuracy: 0,
                cost: 0
            }
        ],
        syncMove: {
            basePower: 250,
            maxPower: 300
        }
    }
];
