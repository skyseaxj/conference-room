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
    // 添加获取数据已有的会议室信息到页面表格中
    function get_meetingRoom() {
       
        for (var i = 0; i < meeting_room.length; i++) {
            var $tr = $("<tr><td>" + meeting_room[i]['name'] +
            "</td><td>" + meeting_room[i]['site'] + 
            "</td><td>" + meeting_room[i]['num'] + 
            "</td><td>" +'<button type="button" class="btn btn-info">修改</button>'+
            '<button type="button" class="btn btn-danger del" width>删除</button>'+
            "</td></tr>");
            console.log($tr)
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').append($tr);
        }
    }
    get_meetingRoom();
})