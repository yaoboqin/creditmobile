define('services/productService', function (require) {
    var app = require('js/app');

    app.service('productService', function () {
        var list = [
            {
                amount: 150000,
                beginTime: "2015-11-24",
                currentAmount: "51201.00",
                financialType: 1,
                financialor: "胡**",
                itemId: 1448358594126,
                percent: "34%",
                rate: "12.00",
                repayType: "一次还清",
                span: 360,
                status: 2,
                title: "XG-个人贷-1102"
            }, 
            {
                amount: 500000,
                beginTime: "2015-11-11",
                currentAmount: "500000.00",
                financialType: 0,
                financialor: "杭州环望电气科技有限公司",
                itemId: 1447223401862,
                percent: "100%",
                rate: "15.00",
                repayType: "一次还清",
                span: 180,
                status: 3,
                title: "XG15-11-002"
            }
        ]
        return {
            items: function () {
                for(var i=0;i<list.length;i++){ 
                    list[i].amounts = parseInt(list[i].amount/10000);
                    list[i].percent = list[i].percent.replace(/%/g,'');
                }
                return list;
            }
        };
    });
});