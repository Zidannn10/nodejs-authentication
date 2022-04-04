const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customSchema = Schema({
    namadepan: {
        type:String,
        maxLength:50
    },
    namabelakang: {
        type:String,
        maxLength:50
    },
    notelepon:{
        type:String,
        maxLength:15
    },
    email:{
        type:String,
        unique:true,
        trim: true
    },
    password:{
        type:String,
        minLength:6
    },
    matauang:{
        type:String,
        unique:true,
        trim: true
    },
    npwp:{
        type:String,
        unique:true,
        trim: true
    },
});

const Customer = mongoose.model("customers", customSchema);
module.exports = {Customer};