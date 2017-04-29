var express = require('express');
var app = express();
var port = process.env.port || 8080;
app.use(express.static('./public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
    console.log("Server started at port " + port);
});
