$(function(){
    //将表单换为可编辑状态，并且将修改按钮换成提交
    $('#change').click(function(){
        //取消禁用状态
        $("#user").removeAttr("disabled");
        $("#pass").removeAttr("disabled");
        $("#phone").removeAttr("disabled");
        $("#email").removeAttr("disabled");

        //修改按钮的样式
        $("#change").attr('class','btn-success btn');
        //修改按钮的值
        $("#change").val('提交');
        //将id修改为submit
        $("#change").attr('id','submit');
    })
})