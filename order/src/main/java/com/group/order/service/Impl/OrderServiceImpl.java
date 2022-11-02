package com.group.order.service.Impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;


import com.group.order.entity.Order1;
import com.group.order.mapper.OrderMapper;
import com.group.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order1> implements OrderService {
    @Autowired
    private OrderMapper orderMapper;


}
