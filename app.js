console.log("server runs")

const express = require("express")
const app = express()
const port = process.env.PORT || 3000 //3306
// const async = require("async")

app.listen(port, () => console.log(`listening at port ${port}`))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
