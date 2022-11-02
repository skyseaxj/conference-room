$(function () {
    //会议室数据，模拟后端拿到数据
    var meeting_room = [{
        name: "2号会议室",
        site: "五楼",
        num: "100",
        time: [true, true, true]
    }, {
        name: "3号会议室",
        site: "五楼",
        num: "200",
        time: [true, false, true]
    }, {
        name: "4号会议室",
        site: "五楼",
        num: "300",
        time1:1 
    },];

    // 添加获取数据已有的会议室信息到页面表格中
    function get_meetingRoom() {
        // 发起Ajax请求会议室信息数据
        $.get('http://localhost/rooms',function(res){
            // 判断是否获取成功     
            console.log(res);
            console.log(res.data.rooms.length);
         
            

            if(!res.success)return alert('获取会议室信息失败');
            var string="";
        for (var i = 0; i <res.data.rooms.length; i++) {
            string = string+"<tr><td>" +res.data.rooms[i]['name'] +
                "</td><td>" +res.data.rooms[i]['location'] +
                "</td><td>" +res.data.rooms[i]['num'] +
                "</td><td>"
                var times=res.data.rooms[i]['times'].split("");
            if (times[0]) string = string + "早上";
            if (times[1]) string = string + "下午";
            if (times[2]) string = string + "晚上";
            string = string + "</td><td>" + '<input type="button" class="btn btn-info" value="修改">' +
                '<input type="button" class="btn btn-danger del" value="删除" data-id="'+res.data.rooms[i]['id']+'">' +
                "</td></tr>";
            var $tr = $(string);
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').empty().append($tr);
        }
    })
    }
    get_meetingRoom();

    // 表格删除操作,需要通过父类代理事件才能绑定
    $('#meetingRoomItem').on('click','.del',function () {
        // 获取被删除数据的id值
        var id=$(this).attr('data-id')
        $ajax({
            type:'',//请求方式
            url:'',
            data:{},
            success:function(res){
                if(res.staus!=200)return alert('删除信息信息失败');
                // 重新获取会议室列表
                get_meetingRoom();
            }
        })
    })
    // 打开添加界面
    $('#add').click(function () {
        // 打开添加界面
        $('#j_formAdd').show();
        // 打开遮罩层
        $('#j_mask').show();
    })
    // 关闭添加界面
    $('#j_hideFormAdd').click(function () {
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();
    })

    // 添加界面添加数据
    $('#j_btnAdd').on('click',function () {
        // 获取用户输入内容,trim为去除空格
        var txtName = $('#j_name').val().trim();
        var txtSite = $('#j_site').val().trim();
        var txtNum = $('#j_num').val().trim();
        var time = [$('#j_time1').prop('checked'), $('#j_time2').prop('checked'), $('#j_time3').prop('checked')];
        console.log(time);

        // 如果填写内容有为空的弹出提示
        if(txtName.length<=0||txtSite.length<=0||txtNum.length<=0||(!time[0]&&time[1]&&time[2])){
            return alert('请填写完整的会议室信息');
        }
        
        // 向服务器提交数据
        $ajax({
            type:'',//请求方式
            url:'',
            data:{},
            success:function(res){
                if(res.staus!=200)return alert('添加失败');
                // 重新获取会议室列表
                get_meetingRoom();
            }
        })
        // 把数据添加到会议室信息里
        meeting_room.push({ 'name': txtName, site: txtSite, num: txtNum });
        var string = "<tr><td>" + txtName +
            "</td><td>" + txtSite +
            "</td><td>" + txtNum +
            "</td><td>"
        if (time[0] == true) string = string + "早上";
        if (time[1] == true) string = string + "下午";
        if (time[2] == true) string = string + "晚上";
        string = string + "</td><td>" + '<input type="button" class="btn btn-info" value="修改">' +
            '<input type="button" class="btn btn-danger del" value="删除">' +
            "</td></tr>";
        var $tr = $(string);

        // 为新的删除按钮添加删除事件
        $tr.find('.del').click(function () {
            $tr.remove();
        })
        // 将信息添加到表格当中显示
        $('#meetingRoomItem').append($tr);
        //数据面板和遮罩层隐藏
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();
    })
})