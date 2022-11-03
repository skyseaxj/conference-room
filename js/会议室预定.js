$(function () {
    var oneday;
    function get_date() {
        // 获取当前日期
        var date = new Date();
        // 获取当前月份

        var nowMonth = date.getMonth() + 1;
        // 获取当前是几号
        var strDate = date.getDate();

        // 添加分隔符“-”
        var seperator = "-";
        // 对月份进行处理，1-9月在前面添加一个“0”
        if (nowMonth >= 1 && nowMonth <= 9) {
            nowMonth = "0" + nowMonth;
        }

        var strDate = (Number(strDate) + Number(1))
        // 对riq进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
        var time1 = date.getFullYear() + seperator + nowMonth + seperator + strDate;

        var strDate = date.getDate();
        var strDate = (Number(strDate) + Number(2))
        // 对riq进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }


        var time2 = date.getFullYear() + seperator + nowMonth + seperator + strDate;

        var strDate = date.getDate();
        var strDate = (Number(strDate) + Number(3))
        // 对riq进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        } var time3 = date.getFullYear() + seperator + nowMonth + seperator + strDate;
        $('#time1').val(time1);
        $('#time2').val(time2);
        $('#time3').val(time3);
    }
    //初始化
    get_date()


    $('#find').click(function () {
        var options1 = $("#test1 option:selected").val();
        oneday=options1;
        console.log(options1)
        $('#findItem').empty();
        $.get('http://localhost/rooms?day=' + options1, function (res) {
            // 判断是否获取成功     

            if (!res.success) return alert('获取会议室信息失败');

            for (var i = 0; i < res.data.rooms.length; i++) {
                var times = res.data.rooms[i]['times'].split("");
                var str = "";
                str = str + "<tr><td>" + res.data.rooms[i]['name'] +
                    "</td><td>" + res.data.rooms[i]['site'] +
                    "</td><td>" + res.data.rooms[i]['num'] +
                    "</td><td>"
                if (times[0] == 1) str = str + "8:00-11:30" + "</br>";
                if (times[1] == 1) str = str + "14:00-17:30" + "</br>";
                if (times[2] == 1) str = str + "18:00-21:00";

                str = str + "</td><td>" + '<input type="button" class="btn btn-info order" value="预定" data-id="' + res.data.rooms[i]['id'] + '">' +
                    "</td></tr>";
                var $tr = $(str);
                console.log($tr);
                //把创建出来的$tr追加到tbody中去.
                $('#findItem').append($tr);

            }

        })

    })
    // 打开添加界面
    $('#meetingRoom').on('click', '.order', function () {
        // 打开添加界面
        $('#j_formAdd').show();
        // 打开遮罩层
        $('#j_mask').show();
        var id = $(this).attr('data-id')
       
        var txtName;

        $.ajax({
            type: 'get',//请求方式
            url: 'http://localhost/rooms/' + id+"?day="+oneday,
            success: function (res) {
                res.room
                if (res.code != 20000) return alert('获取当前信息失败');
                //添加该会议室信息到文本框位置
                $('#j_name').val(res.data.room['name']);
                txtName = $('#j_name').val().trim();

                var times = res.data.room['times'].split("");
                if (times[0] != 1) $("#j_time1").parent().hide();
                if (times[1] != 1) $("#j_time2").parent().hide();
                if (times[2] != 1) $("#j_time3").parent().hide();
            }

        })
        $("#j_time1").parent().show();
        $("#j_time2").parent().show();
        $("#j_time3").parent().show();
    })

    $('#j_btnAdd').on('click', function () {

        var txtName = $('#j_name').val().trim();
        var txtMsg = $('#j_msg').val().trim();
        var txtPhone = $('#j_phone').val().trim();
        var times = [0, 0, 0];
        if ($('#j_time1').prop('checked')) times[0] = 2;
        if ($('#j_time2').prop('checked')) times[1] = 2;
        if ($('#j_time3').prop('checked')) times[2] = 2;
        times = times.join('');
        // 如果填写内容有为空的弹出提示
        // if(txtName.length<=0||txtSite.length<=0||txtNum.length<=0||(!times[0]&&times[1]&&times[2])){
        //     return alert('请填写完整的会议室信息');
        // }

        // 向服务器提交数据
        $.ajax({
            type: 'post',//请求方式
            url: 'http://localhost/orders',
            data: JSON.stringify({
                "builder": sessionStorage.getItem('user'),
                "message": txtMsg,
                "oneday": oneday,
                "phone": txtPhone,
                "room": txtName,
                "times": times
            }),
            contentType: "application/json",
            success: function (res) {
                console.log(res);
                if (res.code != 20000) return alert('预订失败');
                else return alert('预订成功')
                

            }
        })
        $('#j_name').val("");
        $('#j_msg').val("");
        $('#j_phone').val("");
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();
    })
    // 关闭添加界面
    $('#j_hideFormAdd').click(function () {
        $('#j_name').val("");
        $('#j_msg').val("");
        $('#j_phone').val("");
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();

    })
    // {
    //     "builder": "string",
    //     "message": "string",
    //     "oneday": "string",
    //     "phone": "string",
    //     "room": "string",
    //     "times": "string"
    //   }
    // $('#findItem').on('click','.order',function () {

    //     var id=$(this).attr('data-id')
    //     $.ajax({
    //         type:'delete',//请求方式
    //         url:'http://localhost/rooms/'+id,
    //         success:function(res){
    //             if(res.code!=20000)return alert('删除信息信息失败');
    //             // 重新获取会议室列表
    //             get_meetingRoom();
    //         }
    //     })
    // })


})