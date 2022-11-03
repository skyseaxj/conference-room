$(function () {
   

    // 添加获取数据已有的会议室信息到页面表格中
    function get_meetingRoom() {
        // 发起Ajax请求会议室信息数据
        $.get('http://localhost/rooms',function(res){
            // 判断是否获取成功     

            if(!res.success)return alert('获取会议室信息失败');
            var string="";
        for (var i = 0; i <res.data.rooms.length; i++) {
            string = string+"<tr><td>" +res.data.rooms[i]['name'] +
                "</td><td>" +res.data.rooms[i]['site'] +
                "</td><td>" +res.data.rooms[i]['num'] +
                "</td><td>"
                var times=res.data.rooms[i]['times'].split("");
            if (times[0]==1) string = string + "8:00-11:30"+"</br>";
            if (times[1]==1) string = string + "14:00-17:30"+"</br>";
            if (times[2]==1) string = string + "18:00-21:00";
            string = string + "</td><td>" + '<input type="button" class="btn btn-info set" value="修改" data-id="'+res.data.rooms[i]['id']+'">' +
                '<input type="button" class="btn btn-danger del" value="删除" data-id="'+res.data.rooms[i]['id']+'">' +
                "</td></tr>";
            var $tr = $(string);
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').empty().append($tr);
        }
    })
    }
    get_meetingRoom();

    
    // 会议室修改
    $('#meetingRoomItem').on('click','.set',function () {
        // 删除按钮
        $('.notButton').remove();
        var string='<input type="button" value="确认" id="alter" class="notButton">';
         //修改确认按键

        var $tr=$(string);
        $('.form-submit').empty().append($tr);
        $('#alter').on('click',function(){
            $('.notButton').attr('id','j_btnAdd');
            var txtName = $('#j_name').val().trim();
            var txtSite = $('#j_site').val().trim();
            var txtNum = $('#j_num').val().trim();
            var times = [Number($('#j_time1').prop('checked')), Number($('#j_time2').prop('checked')), Number($('#j_time3').prop('checked'))].join('');
            console.log(times)
            $.ajax({
                type:'put',//请求方式
                url:'http://localhost/rooms',
                data:JSON.stringify({ 
                'id':id,
                'name': txtName,
                'num': txtNum,
                'site': txtSite,
                'times': times
                }),
                contentType:"application/json",
                success:function(res){
                    if(res.code!=20000)return alert('修改会议室信息失败');
                    // 重新获取会议室列表
                }
            })
            get_meetingRoom();
            //数据面板和遮罩层隐藏
            // 关闭添加界面
            $('#j_formAdd').hide();
            // 关闭遮罩层
            $('#j_mask').hide();
        })
        // 打开添加界面
        $('#j_formAdd').show();
        // 打开遮罩层
        $('#j_mask').show();
        // 获取修改会议室数据的id值
        var id=$(this).attr('data-id')
        var txtName ;
        var txtSite ;
        var txtNum ;
        $.ajax({
            type:'get',//请求方式
            url:'http://localhost/rooms/'+id,
            success:function(res){
                res.room
                if(res.code!=20000)return alert('获取当前信息失败');
                //添加该会议室信息到文本框位置
                $('#j_name').val(res.data.room['name']);
                $('#j_site').val(res.data.room['site']);
                $('#j_num').val(res.data.room['num']);
                txtName = $('#j_name').val().trim();
                txtSite = $('#j_site').val().trim();
                txtNum = $('#j_num').val().trim();
                var times=res.data.room['times'].split("");
                if (times[0]==1)  $("#j_time1").prop("checked",true);
                else $("#j_time1").prop("checked",false);
                if (times[1]==1)  $("#j_time2").prop("checked",true);
                else $("#j_time2").prop("checked",false);
                if (times[2]==1)  $("#j_time3").prop("checked",true);
                else $("#j_time3").prop("checked",false);
            }

        })
               
        
    })
    //修改确认按键
    $('#alter').on('click',function(){
        $('.notButton').attr('id','j_btnAdd');
        var txtName = $('#j_name').val().trim();
        var txtSite = $('#j_site').val().trim();
        var txtNum = $('#j_num').val().trim();
        var times = [Number($('#j_time1').prop('checked')), Number($('#j_time2').prop('checked')), Number($('#j_time3').prop('checked'))].join('');
        console.log(times)
        $.ajax({
            type:'put',//请求方式
            url:'http://localhost/rooms',
            data:JSON.stringify({ 
            'id':id,
            'name': txtName,
            'num': txtNum,
            'site': txtSite,
            'times': times
            }),
            contentType:"application/json",
            success:function(res){
                if(res.code!=20000)return alert('修改会议室信息失败');
                // 重新获取会议室列表
            }
        })
    })
    // 表格删除操作,需要通过父类代理事件才能绑定
    $('#meetingRoomItem').on('click','.del',function () {
        // 获取被删除数据的id值
        var id=$(this).attr('data-id')
        $.ajax({
            type:'delete',//请求方式
            url:'http://localhost/rooms/'+id,
            success:function(res){
                if(res.code!=20000)return alert('删除信息信息失败');
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
        $('#j_name').val("");
        $('#j_site').val("");
        $('#j_num').val("");
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
        var times = [Number($('#j_time1').prop('checked')), Number($('#j_time2').prop('checked')), Number($('#j_time3').prop('checked'))].join('');
        // 如果填写内容有为空的弹出提示
        // if(txtName.length<=0||txtSite.length<=0||txtNum.length<=0||(!times[0]&&times[1]&&times[2])){
        //     return alert('请填写完整的会议室信息');
        // }
        
        // 向服务器提交数据
        $.ajax({
            type:'post',//请求方式
            url:'http://localhost/rooms',
            data:JSON.stringify({ 'name': txtName,
            'num': txtNum,
            'site': txtSite,
            'times': times
            }),
            contentType:"application/json",
            success:function(res){
                console.log(res);
                if(res.code!=20000)return alert('添加失败');
                // 重新获取会议室列表
                get_meetingRoom();
            }
        })
        $('#j_name').val("");
        $('#j_site').val("");
        $('#j_num').val("");
        //数据面板和遮罩层隐藏
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();
    })
})