import express from 'express';
const router = express.Router();

// Import User model
import User from '../models/user';

// POST a new user
router.post('/new-user', async(req, res) => {
    const body = req.body;
    try {
        const userDB = await User.create(body);
        res.json(userDB);
    } catch (error) {
        return res.status(500).json({
            message: 'An error has occurred',
            error
        })
    }
})

module.exports = router;