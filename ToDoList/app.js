// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = []; // (4) <-- this line of code is written to create the array variable before rendering it 

let works = [];

app.set("view engine", "ejs"); // (1) <--- this line of code should be used after the line "const app = express();"

app.use(bodyParser.urlencoded({ extended: true })); // ((7) <-- this part of the code is written to use the post request

app.use(express.static("public")); // (6) <-- this line of code tells  express to render the static file such as thed css file in this case   

app.get("/", function (req, res) {   // ** (3) <-- this is where the code flow will come after it goes through the res.redirect("/")

    let today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { listTitle: day, newlistItems: items }); // (4*)
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "work") {
        works.push(work);
        res.redirect("/work");
    } else {
        items.push(item); // (5) <-- this line of code is written to add the new item added by the user at the end of the array "items"
        res.redirect("/"); // <-- (2) this line of code redirects the code flow to the home route upon getting a post request .... i.e at the above **
    }

});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newlistItems: works });
});

app.listen(3000, function () {
    console.log("server started on Port 3000");
});