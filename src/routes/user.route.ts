import express from 'express';

const router = express.Router();

router.get('/getUser', (req, res) => {
    res.send({ name: 'John', age: 20 })
})
router.post('/register', (req, res) => {
    res.send('Register yourself')
})


export = router;