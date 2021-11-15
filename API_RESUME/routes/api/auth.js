const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');
const bcrypt = require('bcryptjs');

//@route  GET api/auth
//@desc   Test route
//@access Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ status: 1, msg: 'Logged in successfully', data: { user } });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 0, msg: 'Something went wrong' });
    }
});

//@route  POST api/auth
//@desc   Authenticate User and Get token
//@access Public
router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ status: 0, msg: errors.array(0)[0].msg });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ status: 0, msg: 'Invalid Credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ status: 0, msg: 'Invalid Credentials' });
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        status: 1,
                        msg: 'Logged in successfully',
                        data: { token },
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).json({ status: 0, msg: 'Something went wrong' });
        }
    }
);

module.exports = router;
