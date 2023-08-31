const validateName = (req, res, next) => {
  const { name, price } = req.body
  if (!name || name === '') return res.status(400).json({ message: "O campo name é obrigatório" })
  const validateName = name.length > 4
  if (!validateName) return res.status(400).json({ message: "O campo name deve ter pelo menos 5 caracteres " })
  else {
    next()
  }
}

module.exports = validateName;