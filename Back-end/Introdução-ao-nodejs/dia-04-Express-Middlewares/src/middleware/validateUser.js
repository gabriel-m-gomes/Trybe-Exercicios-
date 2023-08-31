const validateUser = (req, res, next) => {
    const { email, senha, primeiroNome, telefone } = req.body
    const verify = [email, senha, primeiroNome, telefone].some((prop ) => prop === '')
    if (verify) return res.status(400).json({ message: "Campos ausentes!"  })
        
    next()
}

module.exports = validateUser;