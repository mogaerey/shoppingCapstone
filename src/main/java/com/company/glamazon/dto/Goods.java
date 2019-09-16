package com.company.glamazon.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "shoppingCart")
public class Goods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotEmpty
    private String name;
    @NotNull
    private Double price;
    @NotEmpty
    private String importType;
    @NotEmpty
    private String category;
    @NotNull
    private Integer quantity;
    @NotEmpty
    private String imageUrl;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImportType() {
        return importType;
    }

    public void setImportType(String importType) {
        this.importType = importType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Goods(@NotEmpty String name, @NotNull Double price, @NotEmpty String importType, @NotEmpty String category, @NotNull Integer quantity, @NotEmpty String imageUrl) {
        this.name = name;
        this.price = price;
        this.importType = importType;
        this.category = category;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    public Goods() {
    }

    @Override
    public String toString() {
        return "Goods{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", importType='" + importType + '\'' +
                ", category='" + category + '\'' +
                ", quantity=" + quantity +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Goods)) return false;
        Goods goods = (Goods) o;
        return getId().equals(goods.getId()) &&
                getName().equals(goods.getName()) &&
                getPrice().equals(goods.getPrice()) &&
                getImportType().equals(goods.getImportType()) &&
                getCategory().equals(goods.getCategory()) &&
                getQuantity().equals(goods.getQuantity()) &&
                getImageUrl().equals(goods.getImageUrl());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getPrice(), getImportType(), getCategory(), getQuantity(), getImageUrl());
    }
}