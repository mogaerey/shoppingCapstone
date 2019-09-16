package com.company.glamazon;


import com.company.glamazon.dto.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GoodsController {
    @Autowired
    GoodsService goodsService;

    @RequestMapping(value="/goods", method = RequestMethod.GET)
    public List<Goods>getAllGoods(){
        return goodsService.getAllGoods();
    }

    @RequestMapping(value="/goods", method = RequestMethod.POST)
    public Goods addGoods(@RequestBody @Valid Goods goods){
        return goodsService.addGoods(goods);
    }
    @RequestMapping(value="/goods/{id}", method = RequestMethod.PUT)
    public Goods updateGoods(@RequestBody @Valid Goods goods, @PathVariable int id){
        return goodsService.updateGoods(goods, id);
    }

    @RequestMapping(value="/goods/{id}", method = RequestMethod.DELETE)
    public void deleteGoods(@PathVariable int id){
        goodsService.deleteGoods(id);
    }

    @RequestMapping(value = "/purchase", method = RequestMethod.POST)
    public void purchase(@RequestBody @Valid Goods[] goods) {
        goodsService.purchase(goods);
    }

}
