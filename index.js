const express = require("express")
const path = require("path")
const hbs = require("hbs")
const bodyParser = require("body-parser")

const Employee = require("./models/Employee")
require("./dbConnect")

const { error } = require("console")

const encoder = bodyParser.urlencoded()

const port = 5000

const app = express()
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "./views/public")))
hbs.registerPartials(path.join(__dirname, "./views/partils"))


app.get("/", async (req, res) => {
    try {
        let data = await Employee.find().sort({ _id: 1 })
        res.render("index", { data: data })
    } catch (error) {
        console.log(error);

    }

})
app.get("/add", (req, res) => {
    res.render("add")
})

app.post("/add", encoder, async (req, res) => {
    try {
        let data = new Employee(req.body)
        await data.save()
        res.redirect("/")
    }
    catch (error) {
        console.log(error)
    }
})
app.get("/delete/:_id", async (req, res) => {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        await data.deleteOne()

        // await Employee.daleteOne({_id:req.params._id})
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
})
app.get("/edit/:_id", async (req, res) => {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        res.render("edit", { data: data })
    } catch (error) {
        console.log(error);
    }
})
app.post("/edit/:_id", encoder,async (req, res) => {
    try {
        await Employee.updateOne({ _id: req.params._id }, req.body)
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
})

app.get("/search",async(req,res)=>{
    try {
        let search = req.query.search
        let data = await Employee.find({
            $or:[
                {name:{$regex:`/*${search}/*`,$options:"i"}},
                {email:{$regex:`/*${search}/*`,$options:"i"}},
                {phone:{$regex:`/*${search}/*`,$options:"i"}},
                {designation:{$regex:`/*${search}/*`,$options:"i"}},
                {sex:{$regex:`/*${search}/*`,$options:"i"}},
                {city:{$regex:`/*${search}/*`,$options:"i"}},
                {state:{$regex:`/*${search}/*`,$options:"i"}}
            ]
        })
        res.render("index",{data:data})
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
