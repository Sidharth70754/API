const express = require ("express");
const fs = require ("fs");
const users = require ("./MOCK_DATA.json")
const app = express();

const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended: false   }));

//Routes
app.get("/api/users", (req , res) => {
    return res.json(users);
});


app
.route("/api/users/:id")
.get( (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})

.patch((req, res) => {
    // todo : edit the user with id
    return res.json({status: "pending"});
    })

.delete((req, res) =>{
    // todo : delete the user with id
    return res.json({status: "pending"});
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    //todoo to create a new user
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length +1 });
    });
});

app.listen(PORT, ()  =>  console.log (`Server is running on port 8000`))