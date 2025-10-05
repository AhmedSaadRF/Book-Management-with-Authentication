const Router = require('express')
const userController = require('../controllers/users.controller')

const router = Router()


router.post('/api/users/register', userController.register) // Public
router.post('/api/users/login', userController.login) // Public
router.get('/api/users', userController.getUsers) // Private
router.get('/api/users/:id', userController.getUser) // Private
router.delete('/api/users/:id', userController.deleteUser) // Private

module.exports = router