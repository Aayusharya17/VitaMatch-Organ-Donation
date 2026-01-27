const mongoose =require("mongoose");

function dbConnect(){
    try{
    mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    }
    catch(e){
        console.log("Error Connecting Database");
    }
}

module.exports = dbConnect();