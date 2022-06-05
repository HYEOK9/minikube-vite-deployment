const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3001;

app.get('/req', (req, res) => {
    res.send('response from another container');
});

app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
});
