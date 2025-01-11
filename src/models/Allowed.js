import mongoose from 'mongoose';

const AllowedSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    simpleUrl: {
        type: String,
        required: false,
    },
});

export default mongoose.model('Allowed', AllowedSchema, 'allowed');
