$(function () {
    var user=sessionStorage.getItem('user');
   
    console.log(user);
    // 导航栏点击移除其他选项的active类，给点击的选项添加active类
    $('.nav>.nav_item').click(function () {
        // 选取点击对象添加类，再选取其兄弟对象移除类
        $(this).addClass('active').siblings('li').removeClass('active');
    });
})