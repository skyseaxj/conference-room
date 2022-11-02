package com.group.order.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.group.order.common.Result;
import com.group.order.entity.Order1;
import com.group.order.service.Impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping
    public Result getByDay(LocalDate day, Order1 order1){

        LambdaQueryWrapper<Order1> lqw = new LambdaQueryWrapper<>();
        lqw.like(StringUtils.isNotEmpty(order1.getBuilder()),Order1::getBuilder,order1.getBuilder());
        lqw.like(StringUtils.isNotEmpty(order1.getMessage()), Order1::getMessage, order1.getMessage());
        lqw.like(StringUtils.isNotEmpty(day.toString()),Order1::getOneday,day);
        return Result.ok().data("orders", orderService.list(lqw) );
    }
    @GetMapping("/0")
    public Result getByMessage( String day, Order1 order1){

        LambdaQueryWrapper<Order1> lqw = new LambdaQueryWrapper<>();
        lqw.eq(StringUtils.isNotEmpty(order1.getBuilder()),Order1::getBuilder,order1.getBuilder());
        lqw.like(StringUtils.isNotEmpty(order1.getMessage()), Order1::getMessage, order1.getMessage());
        lqw.like(StringUtils.isNotEmpty(day),Order1::getOneday,day);
        return Result.ok().data("orders", orderService.list(lqw) );
    }




    @PostMapping
    public Result save(@RequestBody Order1 order1){

        return Result.ok().success(orderService.save(order1));
    }

    @PutMapping
    public Result update(@RequestBody Order1 order1){
        return Result.ok().success(orderService.updateById(order1));
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id){
        return  Result.ok().success(orderService.removeById(id));
    }

    @GetMapping("/{id}")
    public Result getById(@PathVariable Integer id){
        return Result.ok().data( "order", orderService.getById(id));
    }


}
