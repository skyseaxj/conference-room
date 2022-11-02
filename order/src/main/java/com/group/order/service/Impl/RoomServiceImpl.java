package com.group.order.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;


import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.group.order.entity.Order1;
import com.group.order.entity.Room;

import com.group.order.mapper.OrderMapper;
import com.group.order.mapper.RoomMapper;
import com.group.order.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import static java.time.format.DateTimeFormatter.ISO_DATE;

@Service
public class RoomServiceImpl extends ServiceImpl<RoomMapper, Room> implements RoomService {
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private OrderMapper orderMapper;

    /**
     *
     * @param room
     * @param day
     * @return
     */
    public void updateTimeFormOrders(Room room, String day){
        if (null==day)return;
        LambdaQueryWrapper<Order1> lqw = new LambdaQueryWrapper<Order1>();
        lqw.eq(StringUtils.isNotEmpty(room.getName()),Order1::getRoom, room.getName());
        lqw.eq( Order1::getOneday, LocalDate.parse(day,ISO_DATE));
        List<Order1> order1s = orderMapper.selectList(lqw);
        if(null== order1s)return ;

        char[] roomTimes = room.getTimes().toCharArray();//只有0表示不可用，1表示可用
        for (Order1 order1 : order1s) {
            if(null== order1.getTimes())continue;
            char[] orderTimes = order1.getTimes().toCharArray();//只有1表示可用，2表示已被使用
            for (int i = 0; i < roomTimes.length; i++) {//均只有012
                if (orderTimes[i]=='2') {
                    roomTimes[i]=orderTimes[i];
                }
            }
        }
        room.setTimes(new  String(roomTimes));
    }
}
