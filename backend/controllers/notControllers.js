

const NotModel = require('../models/notModel');
const mongoose=require('mongoose');

const notOlustur=async(req,res)=>{
            const {title ,description}=req.body;
            try{
                        const note=await NotModel.create({title,description})
                        res.status(200).json(note)
            }catch(err){
                        res.status(400).json({Hata:err.message})
            }
}


// ________________________________________________________________________//

const notlarGetir=async(req,res)=>{
            const notlar=await NotModel.find().sort({createdAt:-1})
            res.status(200).json(notlar);

}

// ______________________id'li__________________________________________//


const notGetir=async(req,res)=>{
        const {id}=req.params;  

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({Hata:'Id Geçersiz'})
        }

        const note=await NotModel.findById(id);

        if(!note){
            return res.status(404).json({Hata:'Not Bulunamadı'})
        } 

        res.status(200).json(note)
}

// ____________________DELETE__id'li__________________________________________//

const notSil=async(req,res)=>{
        const {id}=req.params;  

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({Hata:'Id Geçersiz'})
        }

        const note=await NotModel.findOneAndDelete({_id:id});

        if(!note){
            return res.status(404).json({Hata:'Not Bulunamadı'})
        } 

        res.status(200).json(note)
}

// ____________________GÜNCELLE__id'li__________________________________________//

const notGüncelle=async(req,res)=>{
        const {id}=req.params;  

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({Hata:'Id Geçersiz'})
        }

        const note=await NotModel.findOneAndUpdate({_id:id}, {...req.body}, {new:true});

        if(!note){
            return res.status(404).json({Hata:'Not Bulunamadı'})
        } 

        res.status(200).json(note)
}




module.exports={notOlustur,notlarGetir,notGetir ,notGüncelle,notSil,}