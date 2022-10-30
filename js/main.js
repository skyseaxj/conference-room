$(function () {
    //会议室数据，模拟后端拿到数据
    var meeting_room = [{
        name: "2号会议室",
        site: "五楼",
        num: "100"
    }, {
        name: "3号会议室",
        site: "五楼",
        num: "200"
    }, {
        name: "4号会议室",
        site: "五楼",
        num: "300"
    }];
    // 导航栏点击移除其他选项的active类，给点击的选项添加active类
    $('.nav>.nav_item').click(function () {
        // 选取点击对象添加类，再选取其兄弟对象移除类
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    // 添加获取数据已有的会议室信息到页面表格中
    function get_meetingRoom() {
       
        for (var i = 0; i < data.length; i++) {
            var $tr = $("<tr><td>" + data[i]['name'] +
            "</td><td>" + data[i]['site'] + 
            "</td><td>" + data[i]['num'] + 
            "</td><td>" +'<button type="button" class="btn btn-info">修改</button>'+
            "</td><td>" +'<button type="button" class="btn btn-danger">删除</button>'+
            "</td></tr>");
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').append($tr);
        }
    }
    get_meetingRoom();
})