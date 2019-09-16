package com.company.glamazon;
import com.company.glamazon.dto.Goods;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;


import java.util.Arrays;
import java.util.List;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class GoodsControllerTest {

    private MockMvc mockMvc;

    @Mock
    GoodsService mockGoodsService;

    @InjectMocks
    GoodsController goodsController;

    Goods g1;
    Goods g2;

    List<Goods> goodsList;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(goodsController).build();

        g1 = new Goods();
        g1.setName("Apples");
        g1.setCategory("food");
        g1.setPrice(1.49);
        g1.setQuantity(10);

        g2 = new Goods();
        g2.setName("Thriller");
        g2.setCategory("music");
        g2.setPrice(15.99);
        g2.setQuantity(12);

        goodsList = Arrays.asList(g1, g2);
    }

    @Test
    public void rootContext_ShouldRespondWith404() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void ShouldReturnAllGoods() throws Exception {
        when(mockGoodsService.getAllGoods()).thenReturn(goodsList);

        mockMvc.perform(get("/goods"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(goodsList.get(0).getName())));

        verify(mockGoodsService).getAllGoods();
    }



    @Test
    public void ShouldDeleteGoods() throws Exception {
        mockMvc.perform(delete("/goods/1"))
                .andExpect(status().isOk()).andReturn();

        verify(mockGoodsService).deleteGoods(1);
    }


}

