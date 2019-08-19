'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('category', [
            {
                title: 'sport',
                description: 'again description about category sport',
                created_at: '2016-06-21 16:00:00.000000',
                updated_at: '2016-06-21 16:00:00.000000',
            },
            {
                title: 'music',
                description: 'again description about category music',
                created_at: '2016-06-21 16:00:00.000000',
                updated_at: '2016-06-21 16:00:00.000000',
            },
            {
                title: 'IT',
                description: 'again description about category IT',
                created_at: '2016-06-21 16:00:00.000000',
                updated_at: '2016-06-21 16:00:00.000000',
            },
            {
                title: 'world',
                description: 'again description about category world',
                created_at: '2016-06-21 16:00:00.000000',
                updated_at: '2016-06-21 16:00:00.000000',
            },
            {
                title: 'style',
                description: 'again description about category style',
                created_at: '2016-06-21 16:00:00.000000',
                updated_at: '2016-06-21 16:00:00.000000',
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('category', null, {});
    }
};
