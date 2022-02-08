const express = require("express")
const cors = require("cors")
const controller = require("./controller")

const app = express()
app.use(express.json())
app.use(cors())


/***********************
 * ENDPOINTS
 *************************/
app.get("/api/houses", controller.getHouses)
app.post("/api/houses", controller.createHouse)
app.put("/api/houses/:id", controller.updateHouse)
app.delete("/api/houses/:id", controller.deleteHouses)


/***********************
 * PORT
 *************************/
const SERVER_NODE = 4004
app.listen(SERVER_NODE, () => console.log(`Listening on port ${SERVER_NODE}`))