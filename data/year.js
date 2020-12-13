let Payments = [
    {
        year: '2020',
        income: [
            {
                name: "Ivan",
                Apartment: "17",
                Payment: [{
                    mount: "April",
                    sum: 125.00,
                    date: "25.04.2020"
                },
                {
                    mount: "May",
                    sum: 130,
                    date: "25.04.2020"
                },
                {
                    mount: "June",
                    sum: 120.00,
                    date: "25.04.2020"
                },]
            },
            {
                name: "Petar",
                Apartment: "18",
                Payment: [{
                    mount: "April",
                    sum: 12.00,
                    date: "25.04.2020"
                },
                {
                    mount: "May",
                    sum: 13.00,
                    date: "25.04.2020"
                },
                {
                    mount: "June",
                    sum: 10.00,
                    date: "25.04.2020"
                },]
            },
        ],
        cost: [
            {
                name: 'Почистване',
                cost: 20
            },
            {
                name: 'Ток',
                cost: 30
            },
            {
                name: 'Асансьор',
                cost: 40
            },
            {
                name: 'Асансьор Ел',
                cost: 0
            },
        ]
    },
    {
        year: '2021',
        income: [
            {
                name: "Ivan",
                Apartment: "17",
                Payment: [{
                    mount: "April",
                    sum: 12.00,
                    date: "25.04.2020"
                },
                {
                    mount: "May",
                    sum: 13,
                    date: "25.04.2020"
                },
                {
                    mount: "June",
                    sum: 12.00,
                    date: "25.04.2020"
                },]
            },
            {
                name: "Petar",
                Apartment: "18",
                Payment: [{
                    mount: "April",
                    sum: 122.00,
                    date: "25.04.2020"
                },
                {
                    mount: "May",
                    sum: 133.00,
                    date: "25.04.2020"
                },
                {
                    mount: "June",
                    sum: 101.00,
                    date: "25.04.2020"
                },]
            },
        ],
        cost: [
            {
                name: 'Почистване',
                cost: 200
            },
            {
                name: 'Ток',
                cost: 300
            },
            {
                name: 'Асансьор',
                cost: 400
            },
        ]
    }
]

module.exports = {
    Payments
}