import Review from '../models/Review.js';
import Tour from '../models/Tour.js';

//create new tour
export const createReview = async(req,res)=>{
    const tourId = req.params.tourId
    const newReview = new Review({...req.body});
    try {
        const savedReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedReview._id}
        })
        res.status(200).json({success:true, message:'Succesfully review submitted', data:savedReview})
    } catch (error) {
        res.status(500).json({success:false, message:'failed submission. Try again',})
    }
};