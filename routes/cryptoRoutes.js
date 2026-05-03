import express from 'express';
import { getCryptos, getTopGainers, getNewListings, addCrypto } from '../controllers/cryptoController.js';

const router = express.Router();

router.get('/', getCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', addCrypto); // Assuming we might want to protect this in the future, for now it's public as per instructions

export default router;
