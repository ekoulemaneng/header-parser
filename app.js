const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => res.send("/public/index.html"));

app.get('/api/whoami', (req, res) => res.json({"ipaddress": req.ip, "language": req.get("Accept-Language"), "software": req.get("User-Agent")}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

app.listen(3000);