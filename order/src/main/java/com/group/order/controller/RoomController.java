package com.group.order.controller;


import com.group.order.common.Result;
import com.group.order.entity.Room;

import com.group.order.service.Impl.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {
    @Autowired
    private RoomServiceImpl roomService;
    @GetMapping
    public Result getByDay(  String day){

        List<Room> list = roomService.list();

        if (null!=day) {
            for (Room room : list) {
                roomService.updateTimeFormOrders(room,day);
            }
        }
        return Result.ok().data("rooms",list );
    }



    @PostMapping
    public Result save(@RequestBody Room room){

        return Result.ok().success(roomService.save(room));
    }

    @PutMapping
    public Result update(@RequestBody Room room){
        return Result.ok().success(roomService.updateById(room));
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable Integer id){
        return  Result.ok().success(roomService.removeById(id));
    }



    @GetMapping("/{id}")
    public Result getByIdAndDay(@PathVariable Integer id,  String day){
        Room one = roomService.getById(id);
        if (null!=day) roomService.updateTimeFormOrders(one,day);
        return Result.ok().data("room",one );
    }

}
