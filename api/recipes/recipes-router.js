const router = require('express').Router()

router.get('/:recipe_id', (req,res,next) => {
    
})
router.use('*', (req,res) => {
    res.json({api: 'up'})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: "something went wrong inside recipe router", 
        message: err.message, 
        stack: err.stack,
        })
})
module.exports = router