package com.group.order.entity;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Order1 {

        private Integer id;

        private String message;
        private String room;
        private String builder;
        private LocalDate oneday;
        private String times;//222  0不可用，1可用，2已被使用

}
