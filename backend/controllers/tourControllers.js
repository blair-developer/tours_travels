import Tour from '../models/Tour.js';

//create new tour
export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save()
        res.status(200).json({success:true, message:'Succesfully created', data:savedTour})
    } catch (error) {
        res.status(500).json({success:false, message:'failed creation. Try again',})
    }
};

//update tour
export const updateTour = async(req,res) => {
    const id = req.params.id
    try {
       const updateTour = await Tour.findByIdAndUpdate(id,{
         $set: req.body
       }, {new:true})
       res.status(200).json({success:true, message:'Succesfully updated', data:updateTour})
        
    } catch (error) {
        res.status(500).json({success:false, message:'failed to update'})
    }
}

export const deleteTour = async(req,res) => {
    const id = req.params.id
    try {
       await Tour.findByIdAndDelete(id);
       res.status(200).json({success:true, message:'Succesfully deleted'})
        
    } catch (error) {
        res.status(500).json({success:false, message:'failed to delete'})
    }
}

export const getSingleTour = async(req,res) => {
    const id = req.params.id
    try {
       const tour = await Tour.findById(id).populate("reviews");
       res.status(200).json({success:true, message:'Succesfull'})
        
    } catch (error) {
        res.status(500).json({success:false, message:'not found'})
    }
}

export const getAllTour = async(req,res) => {
    const page = parseInt(req.query.page);
    try {
      const tours = await Tour.find({}).skip(page * 8).limit(8);
       res.status(200).json({success:true, count:tours.length, message:'successful',data:tours})
        
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    } 
}

//get by searchResultlist 
 export const getTourBySearch = async(req, res)=>{

    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        //gte means greater than equal
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}}).populate("reviews");
        res.status(200).json({success:true, message:'Succesfull',data: tours})
    } catch (error) {
        res.status(500).json({success:false, message:'not found'})
    }
 }

 export const getFeaturedTour = async(req,res)=> {
    const page = parseInt(req.query.page);
    try {
      const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
       res.status(200).json({success:true, message:'successful',data:tours})
        
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    } 
}

export const getTourCount = async(req, res)=>{
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({success:true, data:tourCount})
    } catch (error) {
        res.status(500).json({success: false, message: "failed to fetch"});
    }
}