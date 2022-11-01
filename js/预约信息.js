$(function () {
    //预约数据，模拟后端拿到数据
    var reserve = [{
        name: "张三",
        num: "会议室2",
        date: "2022-11-2",
        time: "晚上",
        tele: "12345678"
    }, {
        name: "赵四",
        num: "会议室3",
        date: "2022-11-3",
        time: "早上",
        tele: "12345678"
    }, {
        name: "李五",
        num: "会议室4",
        date: "2022-11-4",
        time: "下午",
        tele: "12345678"
    }];
    // 添加获取数据已有的预约信息到页面表格中
    function get_reserve() {
        //发起ajax请求预约信息数据
        $.get('http', function (res) {

            for (var i = 0; i < reserve.length; i++) {
                var $tr = $("<tr><td>" + reserve[i]['name'] +
                    "</td><td>" + reserve[i]['num'] +
                    "</td><td>" + reserve[i]['date'] +
                    "</td><td>" + reserve[i]['time'] +
                    "</td><td>" + reserve[i]['tele'] +
                    "</td></tr>");
                //把创建出来的$tr追加到tbody中去.
                $('#reserveItem').append($tr);
            }
        })
    }
    get_reserve();
})