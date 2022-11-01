'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            'items',
            [
                {
                    stock: 100,
                    brand_id: 2,
                    price: 18000,
                    name: 'Magnum',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    stock: 50,
                    brand_id: 2,
                    price: 14000,
                    name: 'Cornetto',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    stock: 50,
                    brand_id: 2,
                    price: 10000,
                    name: 'Dungdung',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('items');
    },
};
