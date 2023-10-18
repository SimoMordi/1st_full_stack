
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 4000;
const app = express();


const middleware = (req, res, next) => {
    console.log("doing stuff");
    next();
}

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(middleware);

app.use(express.json()); 

app.use(express.static(  path.join(__dirname, "dist")  ))



app.get("/", (req, res) => {
    res.send("Here is your valuable data")
    
})
app.get("/data", (req, res) => {
    console.log("in the route");
    res.send("Your valuable data")
    
})

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`)
});

