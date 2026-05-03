import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    symbol: {
        type: String,
        required: [true, 'Symbol is required'],
        uppercase: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    priceChange24h: {
        type: Number,
        required: [true, '24h Change is required'],
    }
}, { timestamps: true });

export default mongoose.model('Crypto', cryptoSchema);
