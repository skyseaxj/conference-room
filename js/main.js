$(function () {
   
    var i=1;
    console.log(user);
    // 导航栏点击移除其他选项的active类，给点击的选项添加active类
    $('.nav>.nav_item').click(function () {
        // 选取点击对象添加类，再选取其兄弟对象移除类
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    // 添加获取数据已有的会议室信息到页面表格中
   
    $('#menuButton').on('click',function(){
        $('#nav').fadeToggle();
        if(i){
            $('#mainFrame').removeClass('col-lg-12');
            $('#mainFrame').removeClass('col-xs-12');
            $('#mainFrame').addClass('col-lg-10');
            $('#mainFrame').addClass('col-xs-10');
            i=0;

        }else
        {
            $('#mainFrame').removeClass('col-lg-10');
            $('#mainFrame').removeClass('col-xs-10');
            $('#mainFrame').addClass('col-lg-12');
            $('#mainFrame').addClass('col-xs-12');
            i=1;
        }
    })
})