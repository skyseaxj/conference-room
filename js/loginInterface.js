$(function(){
   
    $('#log').on('click',function(){
        console.log(2);
        var idname = $('#te').val().trim();
        var pass = $('#pass').val().trim();
        // var status = $("#test1 option:selected").val();
        console.log(status)
        $.ajax({
            type:'post',//请求方式
            url:'http://localhost/users/login',
            data:JSON.stringify({ 
            "password": pass,
            "username": idname
            }),
            contentType:"application/json",
            success:function(res){
                console.log(res);
                if(res.code!=20000)return alert(res.message);
                else{
                    alert(res.message);
                    sessionStorage.setItem('user', idname);
                    sessionStorage.setItem('token', res.data.token);
                    
                    if(res.data.status==0)
                    window.location.href="用户系统.html";
                    else window.location.href="index.html";
                }
            }
        })
    })
})