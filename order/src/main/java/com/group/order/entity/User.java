package com.group.order.entity;



import lombok.Data;

@Data
public class User {
    //    private static final long serialVersionUID = 1L;
    //    @TableId(type = IdType.AUTO)
    private Integer id;
    private String username;
    private String password;
    private String email;
    private String phone;
    //status=0表示用户，status=1表示管理员；
    private Integer status;
}
