const validatePrice = (req, res, next) => {
  const { price } = req.body
  if (price === undefined) return res.status(400).json({ message: "O campo price é obrigatório" })
  if (price < 0) return res.status(400).json({ message: "O campo price é deve ser maior ou igual a zero" })
  else {
    next()
  }
}

module.exports = validatePrice;