import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const exitSchema = new Schema({
    exit_time: {
        type: String,
        required: true
    },
    exit_date: {
        type: String,
        required: true
    },
    exit_day: {
        type: String,
        required: true
    },
});

const Exit = model('Exit', exitSchema);
export default Exit;
