package com.company.glamazon;
import com.company.glamazon.GoodsService;
import com.company.glamazon.dao.GoodsRepository;
import com.company.glamazon.dto.Goods;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class GoodsServiceTest {
    @Mock
    @Autowired
    GoodsRepository goodsRepoMock;

    @InjectMocks
    GoodsService goodsService;

    Goods g1;
    Goods g2;

    List<Goods> goodsList;

    @Before
    public void setUp() {
        g1 = new Goods();
        g1.setId(1);
        g1.setName("Green Eggs and Ham");
        g1.setCategory("book");
        g1.setPrice(1.49);
        g1.setQuantity(15);

        g2 = new Goods();
        g2.setId(2);
        g2.setName("Jeans");
        g2.setCategory("clothing");
        g2.setPrice(40.99);
        g2.setQuantity(10);

        goodsList = Arrays.asList(g1, g2);
    }

    @Test
    public void shouldGetAllGoods() {
        when(goodsRepoMock.findAll()).thenReturn(goodsList);
        assertEquals(goodsList, goodsService.getAllGoods());
    }

    @Test
    public void shouldGetGoodsById() {
        when(goodsRepoMock.getOne(1)).thenReturn(g1);
        assertEquals(g1, goodsService.getGoodsById(1));
    }

    @Test
    public void shouldAddGoods() {
        when(goodsRepoMock.save(g1)).thenReturn(g1);
        assertEquals(g1, goodsService.addGoods(g1));
    }

    @Test
    public void shouldUpdateGoods() {
        when(goodsRepoMock.save(g1)).thenReturn(g1);
        assertEquals(g1, goodsService.updateGoods(g1, 1));
    }
}