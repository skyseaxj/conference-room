
$(function () {
    var user = sessionStorage.getItem('user')

    //    private String message;
    //    private String room;
    //    private String builder;
    //    private String phone;
    //    private LocalDate oneday;
    //    private String times;//222  0不可用，1可用，2已被使用
    // 添加获取数据已有的预订信息到页面表格中
    function get_myOrders() {
        // 发起Ajax请求预订信息数据
        $.get('http://localhost/orders/0?builder=' + user, function (res) {
            // 判断是否获取成功     

            if (!res.success) return alert('获取预订信息失败');
            var string = "";
            for (var i = 0; i < res.data.orders.length; i++) {
                string = string + "<tr><td>" + res.data.orders[i]['room'] +
                    "</td><td>" + res.data.orders[i]['message'] +
                    "</td><td>" + res.data.orders[i]['oneday'] +
                    "</td><td>" + res.data.orders[i]['phone'] +
                    "</td><td>"
                var times = res.data.orders[i]['times'].split("");
                if (times[0] == 2) string = string + "8:00-11:30" + "</br>";
                if (times[1] == 2) string = string + "14:00-17:30" + "</br>";
                if (times[2] == 2) string = string + "18:00-21:00";
                string = string + "</td><td>" +
                    '<input type="button" class="btn btn-danger del" value="删除" data-id="' + res.data.orders[i]['id'] + '">' +
                    "</td></tr>";
                var $tr = $(string);
                //把创建出来的$tr追加到tbody中去.
                $('#reserveItem').empty().append($tr);
            }
        })
    }
    get_myOrders();




    // 表格删除操作,需要通过父类代理事件才能绑定
    $('#reserveItem').on('click', '.del', function () {
        // 获取被删除数据的id值
        var id = $(this).attr('data-id')
        $.ajax({
            type: 'delete',//请求方式
            url: 'http://localhost/orders/' + id,
            success: function (res) {
                if (res.code != 20000) return alert('删除信息信息失败');
                // 重新获取预订列表
                get_myOrders();
            }
        })
    })

    $('#find').on('click', function () {
        $('#reserveItem').empty();
        var textMsg=$('#textMsg').val().trim();
        // 发起Ajax请求预订信息数据
        $.get('http://localhost/orders/0?builder=' + user+'&message='+textMsg, function (res) {
            // 判断是否获取成功     

            if (!res.success) return alert('获取预订信息失败');
            var string = "";
            for (var i = 0; i < res.data.orders.length; i++) {
                string = string + "<tr><td>" + res.data.orders[i]['room'] +
                    "</td><td>" + res.data.orders[i]['message'] +
                    "</td><td>" + res.data.orders[i]['oneday'] +
                    "</td><td>" + res.data.orders[i]['phone'] +
                    "</td><td>"
                var times = res.data.orders[i]['times'].split("");
                if (times[0] == 2) string = string + "8:00-11:30" + "</br>";
                if (times[1] == 2) string = string + "14:00-17:30" + "</br>";
                if (times[2] == 2) string = string + "18:00-21:00";
                string = string + "</td><td>" +
                    '<input type="button" class="btn btn-danger del" value="删除" data-id="' + res.data.orders[i]['id'] + '">' +
                    "</td></tr>";
                var $tr = $(string);
                //把创建出来的$tr追加到tbody中去.
                $('#reserveItem').empty().append($tr);
            }
        })
    })




})