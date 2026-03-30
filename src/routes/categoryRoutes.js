const { Router } = require('express');
const categoryController = require('../controllers/CategoryController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /categoria/pesquisa:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: 'Busca por categorias.'
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 12
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *       - in: query
 *         name: use_in_menu
 *         schema:
 *           type: boolean
 *     responses:
 *       '200':
 *         description: 'Lista de categorias.'
 *       '400':
 *         description: 'Falha na busca.'
 */
router.get('/pesquisa', categoryController.search);

/**
 * @swagger
 * /categoria/{id}:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: 'Busca uma categoria pelo ID.'
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
 *         description: 'Categoria não encontrada.'
 */
router.get('/:id', categoryController.getById);

/**
 * @swagger
 * /categoria:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Categorias
 *     summary: 'Cria uma nova categoria.'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               slug:
 *                 type: string
 *               use_in_menu:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: 'Categoria criada.'
 *       '400':
 *         description: 'Dados inválidos.'
 */
router.post('/', authMiddleware, categoryController.create);

/**
 * @swagger
 * /categoria/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Categorias
 *     summary: 'Atualiza uma categoria.'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Categoria atualizada.'
 *       '404':
 *         description: 'Categoria não encontrada.'
 */
router.put('/:id', authMiddleware, categoryController.update);

/**
 * @swagger
 * /categoria/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Categorias
 *     summary: 'Deleta uma categoria.'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Categoria deletada.'
 *       '404':
 *         description: 'Categoria não encontrada.'
 */
router.delete('/:id', authMiddleware, categoryController.delete);

module.exports = router;