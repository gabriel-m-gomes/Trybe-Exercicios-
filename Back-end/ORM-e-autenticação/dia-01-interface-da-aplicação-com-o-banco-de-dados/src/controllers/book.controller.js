const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const { status, data } = await bookService.getAll();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await bookService.getById(id);
  return res.status(status).json(data);
};

const createBook = async (req, res) => {
  const book = req.body;
  const { status, data } = await bookService.createBook(book);
  return res.status(status).json(data);
};

const updateBook = async (req, res) => {
  const book = req.body;
  const { id } = req.params;
  const { status, data } = await bookService.updateBook(id, book);
  return res.status(status).json(data);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const bookRemove = await bookService.deleteBook(id);
  return res.status(204).json(bookRemove);
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
