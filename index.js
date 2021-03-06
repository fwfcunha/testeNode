const express = require('express');
const routes = require('./routes');

const app = express();
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});