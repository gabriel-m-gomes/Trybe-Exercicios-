const validateDifficulty = (req, res, next) => {
    const dificuldades = ['Fácil', 'Médio', 'Difícil']
    const { difficulty } = req.body.description

    const verify = dificuldades.some((diff) => diff === difficulty)
    if (!verify) return res.status(400).json({ message: "O campo difficulty deve ser Fácil, Médio ou Difícil" })
    next()
}

module.exports = validateDifficulty