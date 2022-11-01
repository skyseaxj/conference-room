$(function(){
    // 获取用户信息
    function get_meetingRoom() {
        // 发起Ajax请求用户信息数据
        $.get('',function(res){
            // 判断是否获取成功
            if(res.staus!=200)return alert('获取用户信息失败');
            var spring="";
        for (var i = 0; i < meeting_room.length; i++) {
            string = string+"<tr><td>" + meeting_room[i]['name'] +
                "</td><td>" + meeting_room[i]['site'] +
                "</td><td>" + meeting_room[i]['num'] +
                "</td><td>"
            if (meeting_room[i]['time'][0]) string = string + "早上";
            if (meeting_room[i]['time'][1]) string = string + "下午";
            if (meeting_room[i]['time'][2]) string = string + "晚上";
            string = string + "</td><td>" + '<input type="button" class="btn btn-info" value="修改">' +
                "</td></tr>";
            var $tr = $(string);
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').empty().append($tr);
        }
    })
    }
})