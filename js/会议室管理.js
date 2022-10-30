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
    },];
    // 添加获取数据已有的会议室信息到页面表格中
    function get_meetingRoom() {
       
        for (var i = 0; i < meeting_room.length; i++) {
            var $tr = $("<tr><td>" + meeting_room[i]['name'] +
            "</td><td>" + meeting_room[i]['site'] + 
            "</td><td>" + meeting_room[i]['num'] + 
            "</td><td>" +'<input type="button" class="btn btn-info" value="修改">'+
            '<input type="button" class="btn btn-danger del" value="删除">'+
            "</td></tr>");
            //把创建出来的$tr追加到tbody中去.
            $('#meetingRoomItem').append($tr);
        }
    }
    get_meetingRoom();

    // 表格删除操作
    $('#meetingRoomItem .del').click(function(){
        // 删除父元素的父元素
        $(this).parent().parent().remove();
    })
// 打开添加界面
    $('#add').click(function(){
        // 打开添加界面
        $('#j_formAdd').show();
        // 打开遮罩层
        $('#j_mask').show();
    })
    // 关闭添加界面
    $('#j_hideFormAdd').click(function(){
        // 关闭添加界面
        $('#j_formAdd').hide();
        // 关闭遮罩层
        $('#j_mask').hide();
    })

    // 添加界面添加数据
    $('#j_btnAdd').click(function(){
        // 获取用户输入内容
        var txtName=$('#j_name').val();
        var txtSite=$('#j_site').val();
        var txtNum=$('#j_num').val();
        // 把数据添加到会议室信息里
        meeting_room.push({'name':txtName,site:txtSite,num: txtNum});
        var $tr = $("<tr><td>" + txtName+
            "</td><td>" + txtSite + 
            "</td><td>" + txtNum + 
            "</td><td>" +'<input type="button" class="btn btn-info" value="修改">'+
            '<input type="button" class="btn btn-danger del" value="删除">'+
            "</td></tr>");

        // 为新的删除按钮添加删除事件
        $tr.find('.del').click(function(){
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