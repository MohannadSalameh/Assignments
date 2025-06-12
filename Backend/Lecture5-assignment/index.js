import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3200;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const today = new Date();
    const seconds = today.getSeconds();
    const data = {
        title: "Second Checker",
        seconds: seconds,
        items: ["apple", "banana", "cherry"],
        htmlContent: "<h2>some content</h2>",
    };
    res.render("index.ejs", data);
});

app.listen(port,()=>{
    console.log("Server")
})