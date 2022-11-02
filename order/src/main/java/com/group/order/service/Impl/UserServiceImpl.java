package com.group.order.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.group.order.entity.User;
import com.group.order.mapper.UserMapper;
import com.group.order.service.UserService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//extends ServiceImpl<BookMapper, Book>implements IBookService
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public Page getPage(int currentPage, int pageSize, String username) {
        Page page = new Page(currentPage,pageSize);
        //构造条件构造器
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<User>();
        queryWrapper.like(StringUtils.isNotEmpty(username),User::getUsername,username);
        userMapper.selectPage(page,queryWrapper);




        return page;
    }
}
