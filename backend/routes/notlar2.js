

// ____________PART1_________________
// 1.GET methodu:________________________________-------------------------------------
// router.get('/', (req,res)=>{
//             res.json({msg:'Bütün Notlar için Çaliş..'})
// });

// 2.GET methodu:İd'si belli olan için get isteği..________________________________--------------
// router.get('/:id', (req, res) => {
//     res.json({ msg: `${req.params.id} id'li notu getir` });
// });

// 3.POST methodu:_____________________________________________---------------------------------
// router.post('/' , (req, res)=>{
//             res.json({msg:'Yeni Not Ekle'})
// });

// 4.DELETE methodu:__________________________________________-------------------------------------
// router.delete('/:id' , (req, res)=>{
//             res.json ({msg:`${req.params.id} id'li Veriler Silindi'`})
// })

// 5.GÜNCELLEME methotları: A)Patch || B)PUT____________________---------------------------------
// A)Patch methodu:
// router.patch('/:id' ,(req, res)=>{
//             res.json({msg:`${req.params.id} id'li Veri Güncellendi.`})
// });

// B)Patch methodu:
// router.put('/:id' ,(req, res)=>{
//             res.json({msg:`${req.params.id} id'li Veri Güncellendi.`})
// })


// ________PART2________________________
// const express = require('express');
// const router = express.Router();

// const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notControllers');

// 1- Tüm notları getir
// router.get('/', notlarGetir);

// 2- Tek not getir
// router.get('/:id', notGetir);

// 3- Not oluştur
// router.post('/', notOlustur);

// 4- Not sil
// router.delete('/:id', notSil);

// 5- Güncelle (PATCH)
// router.patch('/:id', notGuncelle);

// 6- Güncelle (PUT) → İstersen kullan
// router.put('/:id', notGuncelle);

// module.exports = router;


// _____PART3_________________-
// const express = require('express');
// const router = express.Router();

// const NotModel=require('../models/notModel');
// const { notOlustur, notlarGetir, notGetir, notSil, notGüncelle } = require('../controllers/notControllers');

// 1.GET methodu:________________________________-------------------------------------
// !router.get('/', (req,res)=>{
//             res.json({msg:'Bütün Notlar için Çaliş..'})
// });

// router.get('/',notlarGetir);

// 2.GET methodu:İd'si belli olan için get isteği..________________________________--------------
// !router.get('/:id', (req, res) => {
//     res.json({ msg: `${req.params.id} id'li notu getir` });
// });

//  router.get('/:id',notGetir);
 

// 3.POST methodu:_____________________________________________---------------------------------
// router.post('/' , (req, res)=>{
//             res.json({msg:'Yeni Not Ekle'})
// });

// ______________notolusturdan alıp kullnaıcam gunceledim
// !router.post('/' , async(req, res)=>{
//   const {title, description}=req.body
//   try {
//         const note=await NotModel.create({title,description})
//         res.status(200).json(note)
//   }catch(err){
//   res.status(400).json({Hata:err.message})
//   }
  
// !});

// Ekle:
// router.post('/',notOlustur)



// 4.DELETE methodu:__________________________________________-------------------------------------
// router.delete('/:id' , (req, res)=>{
//             res.json ({msg:`${req.params.id} id'li Veriler Silindi'`})
// })

// router.delete('/:id',notSil);

// 5.GÜNCELLEME methotları: A)Patch || B)PUT____________________---------------------------------
// A)Patch methodu:
// router.patch('/:id' ,(req, res)=>{
//             res.json({msg:`${req.params.id} id'li Veri Güncellendi.`})
// });


// router.patch('/:id',notGüncelle);

// B)Patch methodu:
// router.put('/:id' ,(req, res)=>{
//             res.json({msg:`${req.params.id} id'li Veri Güncellendi.`})
// })

// module.exports = router;



