const { Router } = require('express');
const productController = require('../controllers/ProductController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /produto/pesquisa:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: 'Busca por produtos.'
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
 *         name: match
 *         schema:
 *           type: string
 *       - in: query
 *         name: category_ids
 *         schema:
 *           type: string
 *       - in: query
 *         name: price-range
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: 'Lista de produtos.'
 *       '400':
 *         description: 'Falha na busca.'
 */
router.get('/pesquisa', productController.search);

/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: 'Busca um produto pelo ID.'
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
 *         description: 'Produto não encontrado.'
 */
router.get('/:id', productController.getById);

/**
 * @swagger
 * /produto:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Produtos
 *     summary: 'Cria um novo produto.'
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
 *               preco:
 *                 type: number
 *               price_with_discount:
 *                 type: number
 *               stock:
 *                 type: integer
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: 'Produto criado.'
 *       '400':
 *         description: 'Dados inválidos.'
 */
router.post('/', authMiddleware, productController.create);

/**
 * @swagger
 * /produto/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Produtos
 *     summary: 'Atualiza um produto.'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Produto atualizado.'
 *       '404':
 *         description: 'Produto não encontrado.'
 */
router.put('/:id', authMiddleware, productController.update);

/**
 * @swagger
 * /produto/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Produtos
 *     summary: 'Deleta um produto.'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: 'Produto deletado.'
 *       '404':
 *         description: 'Produto não encontrado.'
 */
router.delete('/:id', authMiddleware, productController.delete);

module.exports = router;