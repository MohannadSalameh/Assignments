import https from "https";
import express from "express";
import bodyParser from "body-parser";
import process from "node:process";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    const options = {
        hostname: "https://api.wheretheiss.at/v1/satellites/25544",
        method: "GET",
    };

    const request = https.get(options.hostname, (response) =>{
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            try {
                const result = JSON.parse(data);
                res.render("index.ejs", result);
            }
            catch (error) {
                console.log("res error");
                res.status(500).send("Failed to fetch data");
            }
        });
});

}) 

app.listen(port, () => {});