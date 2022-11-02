package com.group.order.service;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.group.order.entity.User;

public interface UserService extends IService< User> {
    Page<User> getPage(int currentPage, int pageSize, String username);

}
