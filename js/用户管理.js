$(function(){
    // 获取用户信息
    function get_meetingRoom() {
        // 发起Ajax请求用户信息数据
        $.get('http://localhost/users',function(res){
            // 判断是否获取成功
            if(res.code!=20000)return alert('获取用户信息失败');
            var string="";
            console.log(res)
        for (var i = 0; i < res.data.users.length; i++) {
            string = string+"<tr><td>" + res.data.users[i]['username'] +
                "</td><td>" + res.data.users[i]['email'] +
                "</td><td>" + res.data.users[i]['phone'] +
                "</td><td>"
            
            string = string  + '<input type="button" class="btn btn-info" value="修改">' +
                "</td></tr>";
            var $tr = $(string);
            //把创建出来的$tr追加到tbody中去.
            $('#UserItem').empty().append($tr);
        }
    })
    }
    get_meetingRoom()
})