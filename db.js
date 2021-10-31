const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku");

const db=mongoose.connection;

db.on("eror",console.error.bind(console,"Koneksi Gagal"));

db.once("open",() => {
    console.log("Koneksi Berasil");
});