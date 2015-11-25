define('services/listService', function (require) {
    var app = require('js/app');

    app.service('listService', function () {
        return {
            list: function () {
                return [
                    {
                        name: 'user-1',
                        email: 'user-1@email.com'
                    }, 
                    {
                        name: 'user-2',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-3',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-4',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-5',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-6',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-7',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-8',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-1',
                        email: 'user-1@email.com'
                    }, 
                    {
                        name: 'user-2',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-3',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-4',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-5',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-6',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-7',
                        email: 'user-2@email.com'
                    },
                    {
                        name: 'user-8',
                        email: 'user-2@email.com'
                    }
                ];
            }
        };
    });
});