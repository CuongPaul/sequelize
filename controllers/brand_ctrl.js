const { item, brand, Sequelize } = require('./../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await brand.findAll({
                attributes: ['id', 'name'],
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    getWithItems: async (req, res) => {
        try {
            let data = await brand.findAll({
                attributes: ['id', 'name'],
                include: [
                    {
                        model: item,
                        as: 'items',
                        attributes: ['id', 'name', 'price', 'stock'],
                    },
                ],
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    get: async (req, res) => {
        try {
            let id = req.params.id;
            let data = await brand.findOne({
                attributes: ['id', 'name'],
                where: {
                    id: id,
                },
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    search: async (req, res) => {
        try {
            let text = req.query.text;
            let data = await brand.findAll({
                attributes: ['id', 'name'],
                where: {
                    name: {
                        [Sequelize.Op.like]: '%' + text + '%',
                    },
                },
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    save: async (req, res) => {
        try {
            let body = req.body;
            let data = await brand.create(body);
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    update: async (req, res) => {
        try {
            let id = req.params.id;
            let body = req.body;
            let data = await brand.update(body, {
                where: {
                    id: id,
                },
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },

    delete: async (req, res) => {
        try {
            let id = req.params.id;
            let data = await brand.destroy({
                where: {
                    id: id,
                },
            });
            return res.json({
                status: 'ok',
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: error,
            });
        }
    },
};
