const validateRating = (req, res, next) => {
    const { rating } = req.body.description

    const verifyRating = Number.isInteger(rating) && rating >= 1 && rating <= 5
    
    if (!verifyRating) return res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" })
        
    
    
    next()
}

module.exports = validateRating