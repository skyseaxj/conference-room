$(function () {
    //预约数据，模拟后端拿到数据
     // 添加获取数据已有的预订信息到页面表格中
 function get_Orders() {
    // 发起Ajax请求预订信息数据
    $.get('http://localhost/orders/' , function (res) {
        // 判断是否获取成功     
        console.log(res);
        if (!res.success) return alert('获取预订信息失败');
        var string = "";
        for (var i = 0; i < res.data.orders.length; i++) {
            string = string + "<tr><td>" + res.data.orders[i]['builder']+
            "</td><td>" + res.data.orders[i]['room'] +
                "</td><td>" + res.data.orders[i]['message'] +
                "</td><td>" + res.data.orders[i]['oneday'] +
                "</td><td>" + res.data.orders[i]['phone'] +
                "</td><td>"
            var times = res.data.orders[i]['times'].split("");
            if (times[0] == 2) string = string + "8:00-11:30" + "</br>";
            if (times[1] == 2) string = string + "14:00-17:30" + "</br>";
            if (times[2] == 2) string = string + "18:00-21:00";
            string = string + "</td><td>";
            var $tr = $(string);
            //把创建出来的$tr追加到tbody中去.
            $('#reserveItem').empty().append($tr);
        }
    })
}
get_Orders();
})

 