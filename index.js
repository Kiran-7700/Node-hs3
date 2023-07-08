const express = require("express");

const app = express();

const loginMiddleware = (req,res,next)=>{
    console.log("loginMiddleware verifies before giving the access to all other routes");
    next();
}

const courseMiddleWare = (req,res,next) =>{
    console.log("courseMiddleware verifies before giving the access to Course");
    next();
} 

app.use(loginMiddleware);

app.get("/",(req,res)=>{
    console.log("This response is coming after being verified by the login middleware");
    res.send("User is Logged in");
});

app.get("/coursedetails",courseMiddleWare,(req,res)=>{
    console.log("This response is coming after being verified by the course middleware");
    res.send("Course Details");
});

app.get("/assessments",courseMiddleWare,(req,res)=>{
    console.log("This response is coming after being verified by the course middleware");
    res.send("Assessments");
});
app.get("/projects",courseMiddleWare,(req,res)=>{
    console.log("This response is coming after being verified by the course middleware");
    res.send("Projects");
});
app.get("/recordedlectures",courseMiddleWare,(req,res)=>{
    console.log("This response is coming after being verified by the course middleware");
    res.send("Recorded Lectures");
});



app.listen(7000,()=>{
    console.log("Server is running at port 7000");
});