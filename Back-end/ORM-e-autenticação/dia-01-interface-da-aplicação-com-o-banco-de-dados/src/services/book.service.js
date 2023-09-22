const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return { status: 200, data: books };
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) {
    return { status: 404, data: { message: 'Book not found' } };
  }
  return { status: 200, data: book };
};

const createBook = async (book) => {
  const { title, author, pageQuantity } = book;
  const newBook = await Book.create({ title, author, pageQuantity });
  return { status: 201, data: newBook };
};

const updateBook = async (id, book) => {
  const { title, author, pageQuantity } = book;

  const [updateBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );
  if (!updateBook) {
    return { status: 400, data: { message: 'Book not found' } };
  }
  return { status: 200, data: { message: 'Book updated' } };
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });

  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
