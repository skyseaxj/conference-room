$(function(){
    $('#reg').on('click',function(){
        $('.mag').remove();
        var name=$('#zcname').val().trim();//id
        var pass=$('#zcpass').val().trim();//密码
        var repass=$('#zcrpass').val().trim();//重复密码
        var email=$('#zcemail').val().trim();//邮箱
        var tele=$('#zcpgone').val().trim();//手机号
        var test=true;
        if(name.length<=0||pass.length<=0||repass.length<=0||email.length<=0||tele.length<=0){
            return alert('请填写完整的注册信息');
        }
        var  natt=/^\w{3,8}$/;
        if(name!='1'){
            test=false;
            var $tr=$("<div class='mag' style='color:red'>"+"用户名不符合要求"+"</div>")
            $('#fromName').append($tr);
        }

        //验证密码
        natt=/^(\w){6,20}$/;
        if(!natt.test(pass))
        {
            test=false;
            var $tr=$("<div class='mag' style='color:red'>"+"密码格式有误"+"</div>")
            $('#formPass').append($tr);
        }else
        {
            if(pass!=repass)
            {
                test=false;
                var $tr=$("<div class='mag' style='color:red'>"+"两次密码不一致"+"</div>")
                $('#formRepass').append($tr);
            }
        }
        // 判断邮箱格式
        //以数字字母开头，中间可以是多个数字字母下划线或者'-'，加@符合，后面是数字字母，然后加'.',在加2-4个字母
        natt = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!natt.test(email))
        {
            test=false;
            var $tr=$("<div class='mag' style='color:red'>"+"邮箱格式错误"+"</div>")
            $('#formEmail').append($tr);
        }

        // 判断电话号码
        //1开头第二位为3到9中的一个数字再加9位数字
        natt=/^1[3456789]\d{9}$/
        if(!natt.test(tele))
        {
            test=false;
            var $tr=$("<div class='mag' style='color:red'>"+"电话号码格式有误"+"</div>")
            $('#formTele').append($tr);
        }
    })
})