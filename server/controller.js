const houses = require("./db.json")
let id = houses.length

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {
            address,
            price,
            imageURL
        } = req.body
        let newHouse = {
            id,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {
            id,
            type
        } = req.body
        const index = houses.findIndex(elem => elem.id === +req.params.id)

        if (type === "plus") {
            houses[index].price += 10000
        } else if (type === "minus") {
            houses[index].price -= 10000
        } else {
            res.status(400).send("Bad request")
            return
        }
        res.status(200).send(houses)
    },
    deleteHouses: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }

}