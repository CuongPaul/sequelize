const { item, brand, Sequelize } = require('./../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            let data = await item.findAll({
                attributes: ['id', 'name', 'brand_id', 'price', 'stock'],
                include: [
                    {
                        model: brand,
                        as: 'brand',
                        attributes: ['id', 'name'],
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
            let data = await item.findOne({
                attributes: ['id', 'name', 'brand_id', 'price', 'stock'],
                include: [
                    {
                        model: brand,
                        as: 'brand',
                        attributes: ['id', 'name'],
                    },
                ],
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
            let data = await item.findAll({
                attributes: ['id', 'name', 'brand_id', 'price', 'stock'],
                include: [
                    {
                        model: brand,
                        as: 'brand',
                        attributes: ['id', 'name'],
                    },
                ],
                where: {
                    [Sequelize.Op.or]: {
                        name: {
                            [Sequelize.Op.like]: '%' + text + '%',
                        },
                        //search by name of brands
                        '$brand.name$': {
                            [Sequelize.Op.like]: '%' + text + '%',
                        },
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
            let data = await item.create(body);
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
            let data = await item.update(body, {
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
            let data = await item.destroy({
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
