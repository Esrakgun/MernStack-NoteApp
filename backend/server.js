const express = require("express");

require("dotenv").config();

// 3.Routeri çağırmak için :

const notRoute = require("./routes/notlar");

const app = express();

// ?Mongoose ile veritabanına bağlanıcam:
const mongoose = require("mongoose");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//4. Post işlemi için kullanılan bilginin/verinin json olmasına dikkat ediyorum:Express için de json kullanıcagımı belirtmek adına yapıyorum bu kodu:jsonında expresi tanıması adına tanımlama yapıyoruz..Post işleminde verileri json olarak yapmış olucaz .

app.use(express.json());

// app.listen(process.env.PORT , () => {
//             console.log(`${process.env.PORT}. port dinleniyor`);

// });

mongoose.connect((process.env.MONGO_URI))
.then(() => {
  console.log("Veritabanı bağlandı");

  app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. port dinleniyor`);
  });
})
.catch(err=>{
            console.log(err);
            
})

//1. GET Methodu:________________________________________________________________________________

// app.get('/' , (req,res)=>{
//             res.json({mesaj:"Merhaba Esra Deniyor!"})
// })___________________________________________________________________________________________

// ! 2. NotRoute kullanmak içim üsteki Get methodunu yorum satırına aldım:

// app.use(notRoute);
// burda notRoute kulanırken bunun için geçerli olucak bir URL de verebiliriz..

app.use("/api/notlar", notRoute);
