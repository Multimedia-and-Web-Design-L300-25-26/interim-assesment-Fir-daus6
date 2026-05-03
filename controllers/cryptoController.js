import Crypto from '../models/Crypto.js';

// GET /api/crypto
export const getCryptos = async (req, res) => {
    try {
        const cryptos = await Crypto.find({});
        res.status(200).json({ success: true, data: cryptos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// GET /api/crypto/gainers
export const getTopGainers = async (req, res) => {
    try {
        // Sort by priceChange24h descending
        const gainers = await Crypto.find({}).sort({ priceChange24h: -1 }).limit(10);
        res.status(200).json({ success: true, data: gainers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// GET /api/crypto/new
export const getNewListings = async (req, res) => {
    try {
        // Sort by createdAt descending
        const newListings = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
        res.status(200).json({ success: true, data: newListings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// POST /api/crypto
export const addCrypto = async (req, res) => {
    try {
        const { name, symbol, price, image, priceChange24h } = req.body;

        if (!name || !symbol || price === undefined || !image || priceChange24h === undefined) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        const crypto = await Crypto.create({
            name,
            symbol,
            price,
            image,
            priceChange24h
        });

        res.status(201).json({ success: true, data: crypto });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
