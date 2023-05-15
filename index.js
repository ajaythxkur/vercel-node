import express from "express";
const app = express();
app.use(express.json());
import http from "http"

app.use('/', async (req, res) => {
    res.status(200).send({ status: "working" });
    res.end();
})

const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})