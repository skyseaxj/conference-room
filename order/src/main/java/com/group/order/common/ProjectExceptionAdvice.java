package com.group.order.common;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ProjectExceptionAdvice {
    @ExceptionHandler(Exception.class)
    public Result doOtherException(Exception ex){

        ex.printStackTrace();
//        return new Result(false,"系统错误，请稍后再试！");
        return Result.error();
    }
}