exports.config = {
    paused: false,
    maxClients: 16,
    armies: [
        {
            name: "Red",
            commander: "/pa/units/commanders/imperial_delta/imperial_delta.json",
            primary_color: [210, 50, 44],
            secondary_color: [51, 151, 197],
            econ_rate: 1
        },
        {
            name: "Blue",
            commander: "/pa/units/commanders/imperial_delta/imperial_delta.json",
            primary_color: [59, 54, 182],
            secondary_color: [219, 217, 37],
            econ_rate: 1
        }
    ],
    system: {
        name: "Droplet Test Tropical System",
        planets: [
            {
                name: "Droplet Tropical Planet",
                mass: 1000,
                starting_planet: true,
                position: [20000, 0],
                velocity: [0, 158.114],
                generator: {
                    seed: 21542,
                    radius: 400,
                    heightRange: 35,
                    biomeScale: 1,
                    waterHeight: 34,
                    temperature: 80,
                    biome: "tropical"
                }
            }
        ]
    }
};
