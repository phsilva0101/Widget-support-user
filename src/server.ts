import express, { request, response } from "express";

const app = express();

/*
GET, 
POST, 
PUT, 
DELETE, 
PATCH
*/

app.get("/",(request, response) => {
    return response.json({
        message: "Olá Pexual",
    })
})

app.post("/",(request, response) => {
    return response.json({
        message: "Usuario salvo som sucesso!",
    })
})


app.listen(3333, () => console.log("Server is running on port 3333"));



