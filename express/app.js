const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require('cors')
const uuid = require("uuid")
const db = require("./db")
const multer = require("multer")

const app = express()

const PORT = process.env.PORT || 3001


app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
// app.use(cors({
// //     // origin: "https://mr-home-rental.onrender.com",
//     origin: ["http://127.0.0.1:5501"],
//     credentials: true
// }))

const storage = multer.memoryStorage();
const upload = multer({ storage })

app.get("/get-property", async (req, res) => {
    let sql = `SELECT * FROM property`

    const [response] = await db.execute(sql)
    res.status(200).json({allProperty: response})
})

app.post("/submit-form", upload.single('image'),  async (req, res) => {

    const { name, address, price } = req.body
    const imageBuffer = req.file ? req.file.buffer : null;
    const id = uuid.v4()

    try {
       
        if (!name) throw Error('name must be included')
        if (!address) throw Error('address must be included')
        if (!price) throw Error('price must be included')

        let sql = `INSERT INTO property (id, name, address, price, image)
       VALUES ('${id}', '${name}','${address}', '${price}', '${imageBuffer}');`

        await db.execute(sql)

        res.status(200).json({ message: `Data inserted successfully` })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})