package com.company.glamazon;


import com.company.glamazon.dao.GoodsRepository;
import com.company.glamazon.dto.Goods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GoodsService {
    @Autowired
    GoodsRepository goodsRepo;

    public List<Goods>getAllGoods(){
        return goodsRepo.findAll();
    }
    public Goods getGoodsById(int id){
        return goodsRepo.getOne(id);
    }
    public Goods addGoods(Goods goods){
        return goodsRepo.save(goods);
    }
    public Goods updateGoods(Goods goods, int id){
        if (goods.getId()==id){
            return goodsRepo.save(goods);
        }
        return null;
    }

    public void deleteGoods(int id){
        goodsRepo.deleteById(id);
    }

    public void purchase(Goods[] goods){
        for (Goods g: goods) {
            Goods currGoods=this.getGoodsById(g.getId());

            currGoods.setQuantity(currGoods.getQuantity()-g.getQuantity());
            this.updateGoods(currGoods, currGoods.getId());
        }
    }



}
