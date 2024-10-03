import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const entrySchema = new Schema({
    entry_time: {
        type: String,
        required: true
    },
    entry_date: {
        type: String,
        required: true
    },
    entry_day: {
        type: String,
        required: true
    },
})
const Entry = model('entry', entrySchema);
export default Entry