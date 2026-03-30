const { Router } = require('express');
const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /usuario/token:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Autentica um usuário e retorna um token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: 'Login bem-sucedido.'
 *       '400':
 *         description: 'Credenciais inválidas.'
 */
router.post('/token', authController.generateToken);

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Busca um usuário pelo seu ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: 'Sucesso.'
 *       '404':
 *         description: 'Usuário não encontrado.'
 */
router.get('/:id', userController.getById);

/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       '201':
 *         description: 'Usuário criado com sucesso.'
 *       '400':
 *         description: 'Dados inválidos.'
 */
router.post('/', userController.create);

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Usuários
 *     summary: Atualiza os dados de um usuário.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Usuário atualizado.'
 *       '404':
 *         description: 'Usuário não encontrado.'
 */
router.put('/:id', authMiddleware, userController.update);

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Usuários
 *     summary: Deleta um usuário.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Usuário deletado.'
 *       '404':
 *         description: 'Usuário não encontrado.'
 */
router.delete('/:id', authMiddleware, userController.delete);

module.exports = router;