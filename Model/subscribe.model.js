import mongoose from "mongoose";
const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required for subscription'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const subscribeModel = mongoose.model('Subscribers',subscribeSchema);

export default subscribeModel;