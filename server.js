const express = require('express');
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});



// Section
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
//Section

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});