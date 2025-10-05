const Router = require('express')
const bookController = require('../controllers/books.controller')
const authntication = require('../middlewares/auth') // Middlewre
const router = Router()


router.post('/api/books', authntication,  bookController.addOneBook) // Private add new book
router.get('/api/books', authntication, bookController.getAllBooks) // Private get all books
router.delete('/api/books/:id', authntication, bookController.deleteOneBook) // Private delete one book
router.get('/api/books/:id', authntication, bookController.getOneBook) // Private get one book
router.put('/api/books/:id', authntication, bookController.updateOneBook) // Private update one book


module.exports = router