import { Router } from "express";
import { handleGenerateNewShortURL, handleGetAnalytics, handleShortURL } from "../controllers/url.js";


const router = Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleShortURL);
router.get('/analytics/:shortId', handleGetAnalytics);


export default router;