$(function () {
    //预约数据，模拟后端拿到数据
    var reserve= [{
        name: "张三",
        num: "会议室2",
        date: "2022-11-2",
        start:"8:00",
        end:"10:00",
        tele:"12345678"
    }, {
        name: "赵四",
        num: "会议室3",
        date: "2022-11-3",
        start:"8:00",
        end:"10:00",
        tele:"12345678"
    }, {
        name: "李五",
        num: "会议室4",
        date: "2022-11-4",
        start:"8:00",
        end:"10:00",
        tele:"12345678"
    }];
    // 添加获取数据已有的预约信息到页面表格中
    function get_reserve() {
       
        for (var i = 0; i < reserve.length; i++) {
            var $tr = $("<tr><td>" + reserve[i]['name'] +
            "</td><td>" + reserve[i]['num'] + 
            "</td><td>" + reserve[i]['date'] + 
            "</td><td>" + reserve[i]['start'] +
            "</td><td>" + reserve[i]['end'] +
            "</td><td>" + reserve[i]['tele'] +
            "</td></tr>");
            //把创建出来的$tr追加到tbody中去.
            $('#reserveItem').append($tr);
        }
    }
    get_reserve();
})