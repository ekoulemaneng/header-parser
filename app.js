const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => res.send("/public/index.html"));

app.get('/api/whoami', (req, res) => {
  let ipadress = req.get("X-Forwarded-For").split(",")[0]; 
  let languages = req.acceptsLanguages();
  let user_agent = req.get("User-Agent");
  res.json({"ipaddress": ipadress, "language": languages, "software": user_agent})
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

app.listen(3000);