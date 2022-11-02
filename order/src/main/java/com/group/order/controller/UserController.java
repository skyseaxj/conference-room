package com.group.order.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.group.order.common.JwtUtils;
import com.group.order.common.Result;
import com.group.order.entity.User;
import com.group.order.service.Impl.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/login")
    // querystring: username=zhangsan&password=123   String username,String password
    // json: {username:zhangsan,password:123}
    public Result login(@RequestBody User user){
        //1.查询数据库username
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getUsername,user.getUsername());
        User user1 = userService.getOne(queryWrapper);
        if( null==user1){
            return Result.error().message("无此用户");
        }

        if(!user1.getPassword().equals(user.getPassword())){
            return Result.error().message("密码错误");
        }

        String token = JwtUtils.generateToken(user.getUsername());
        return Result.ok().data("token",token).data("status",user1.getStatus());
    }

    @GetMapping("/info")  // "token:xxx"
    public Result info(String token){
        String username = JwtUtils.getClaimsByToken(token).getSubject();

        return Result.ok().data("name",username);
    }

    @PostMapping("/logout")  // "token:xxx"
    public Result logout(){
        return Result.ok();
    }

    @PostMapping("/register")
    public Result save1(@RequestBody User user){
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getUsername,user.getUsername());
        User user1 = userService.getOne(queryWrapper);
        if( null==user1){
            return Result.ok().success(userService.save(user));
        }

       return Result.error().message("用户名已存在");
    }

    @GetMapping
    public Result queryAll(){

        return Result.ok().data("users",userService.list());
    }

    @PostMapping
    public Result save(@RequestBody User user){

        return Result.ok().success(userService.save(user));
    }

    @PutMapping
    public Result update(@RequestBody User user){
        return Result.ok().success(userService.updateById(user));
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id){
        return  Result.ok().success(userService.removeById(id));
    }

    @GetMapping("/{id}")
    public Result getById(@PathVariable Integer id){
        return Result.ok().data( "user",userService.getById(id));
    }

    @GetMapping("{currentPage}/{pageSize}")
    public Result getPage(@PathVariable int currentPage, @PathVariable int pageSize,@PathVariable String username){
        IPage<User> page = userService.getPage(currentPage, pageSize,username);
        //如果当前页码值大于总页码数，那么重新执行查询操作，使用最大页码值作为当前页码值。
        if (currentPage > page.getPages()){
            page = userService.getPage((int)page.getPages(),pageSize,username);
        }
        return Result.ok().data("users", userService.getPage(currentPage,pageSize,username));
    }
}
