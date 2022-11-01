$(function () {
    var meeting_room = [{
        time:"9:00-12:00",
        name: "2号会议室",
        site: "五楼",
        num: "100",
        value:"9:00-12:00",
        id:"ming"
        }, {
        time:"12:00-15:00",
        name: "3号会议室",
        site: "五楼",
        num: "200",
        value:"12:00-15:00",
        id:"ming"
        }, {
        time:"15:00-18:00",
        name: "4号会议室",
        site: "五楼",
        num: "300",
        value:"15:00-18:00",
        id:"ming"
        },{
        time:"18:00-21:00",
        name: "5号会议室",
        site: "五楼",
        num: "250",
        value:"18:00-21:00",
        id:"ming"
        },{
        time:"9:00-12:00",
        name: "2号会议室",
        site: "五楼",
        num: "100",
        value:"9:00-12:00",
        id:"hou"
        }, {
        time:"12:00-15:00",
        name: "3号会议室",
        site: "五楼",
        num: "200",
        value:"12:00-15:00",
        id:"hou"
        }, {
        time:"15:00-18:00",
        name: "4号会议室",
        site: "五楼",
        num: "300",
        value:"15:00-18:00",
        id:"hou"
        },{
        time:"18:00-21:00",
        name: "5号会议室",
        site: "五楼",
        num: "250",
        value:"18:00-21:00",
        id:"hou"
        },{
        time:"9:00-12:00",
        name: "2号会议室",
        site: "五楼",
        num: "100",
        value:"9:00-12:00",
        id:"dahou"
        }, {
        time:"12:00-15:00",
        name: "3号会议室",
        site: "五楼",
        num: "200",
        value:"12:00-15:00",
        id:"dahou"
        }, {
        time:"15:00-18:00",
        name: "4号会议室",
        site: "五楼",
        num: "300",
        value:"15:00-18:00",
        id:"dahou"
        },{
        time:"18:00-21:00",
        name: "5号会议室",
        site: "五楼",
        num: "250",
        value:"18:00-21:00",
        id:"dahou"
        },

    ];

    $('#find').click(function(){
        $("#findItem").empty();
        for(var i=0;i<meeting_room.length;i++){
            var options1=$("#test1 option:selected");
            var options2=$("#test2 option:selected");
            if(options1.val()==meeting_room[i]['id']&&options2.val()==meeting_room[i]['time']){
                var $tr = $("<tr><td>" + meeting_room[i]['name'] +
                "</td><td>" + meeting_room[i]['site'] + 
                "</td><td>" + meeting_room[i]['num'] + 
                "</td><td>" +'<input type="button" class="btn btn-info" value="预定">'+
                "</td></tr>");
                //把创建出来的$tr追加到tbody中去.
                $('#findItem').append($tr);
            }
        }

    })

})