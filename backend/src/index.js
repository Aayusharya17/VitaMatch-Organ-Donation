const express = require('express');
const app = express();

setUpAndStartServer = () => {
    app.listen(3000 , ()=> {
        console.log("Server started on PORT 3000");
    })
}