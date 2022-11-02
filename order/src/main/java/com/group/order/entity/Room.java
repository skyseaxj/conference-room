package com.group.order.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.time.LocalTime;
import java.util.List;

@Data
public class Room {
    private Integer id;

    private String location;
    private String name;
    private String site;
    private Integer num;
    private String times;//222



}
