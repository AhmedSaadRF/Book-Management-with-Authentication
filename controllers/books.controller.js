const bookModel = require('../models/books.model')
exports.getAllBooks = async function (req, res) {
    try {
        const books = await bookModel.find()
        res.json({ message: "Done", data: books })
    } catch (err) {
        res.status(400).send({
            message: err
        })
    }
}

exports.addOneBook = async function (req, res) {
    try {
        const createBook = await bookModel.create(req.body)
        res.json({ message: "Book Created", data: createBook })

    } catch (err) {
        res.status(400).send({
            message: err
        })
    }
}

exports.deleteOneBook = async function (req, res) {
    try {
        if (req.user.role === 'Admin') {
            await bookModel.findByIdAndDelete(req.params.id)
            res.json({ message: "Book deleted", data: [] })
        } else {
            res.status(403).send({
                message: 'You Dont have access to delete a book you need to be an admin'
            })
        }


    } catch (err) {
        res.status(400).send({
            message: err
        })
    }
}

exports.getOneBook = async function (req, res) {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book Found", data: book });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.updateOneBook = async function (req, res) {
    try {
        // Check if user has admin role
        if (req.user.role !== 'Admin') {
            return res.status(403).json({
                message: 'You need admin privileges to update a book'
            });
        }

        // Validate request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Update data cannot be empty"
            });
        }

        const book = await bookModel.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book Updated", data: book });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}