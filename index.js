import express from 'express';

const app = express();

app.get("/", (req, res) => {
    const nodeVer = process.version;

    res.send("Hola mundo con Node " + nodeVer + ", Express, PM2, ");
});

app.listen(3003, () => {
    console.log('server listening on port 3000');
});