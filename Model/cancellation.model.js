import mongoose from "mongoose";


const cancellationSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'userId is required']

    },
    cancellationDate:{
        type:String,
        required:[true,'Cancellation date is required']

    },
    cancellationStatus:{
        type:String,
      default:'Pending'

    },
    comments:{
        type:String,
        required:[true,'Comment is required']

    },
    orderId:{
        type:String,
        required:[true,'OrderId is required']

    },
    productImage:{
        type:String,
        required:[true,'Productimage is required']

    },
    productName:{
        type:String,
        required:[true,'Productname is required']

    },
    reason:{
        type:String,
        required:[true,'Reason is required']

    },
    refundAmount:{
        type:String,


    },
});



const cancellationModel = mongoose.model('Cancellation',cancellationSchema);

export default cancellationModel;