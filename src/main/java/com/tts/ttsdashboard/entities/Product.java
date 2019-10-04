package com.tts.ttsdashboard.entities;

import org.hibernate.annotations.Formula;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "id")
    private int id;

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    @Column(name = "productname")
    private String productName;
    @ManyToOne
    @JoinColumn(name = "category")
    private Category category;
    @Column(name = "fullprice")
    private double fullPrice;
    @Column(name = "saleprice")
    private double salePrice;
    @Column(name = "availability")
    private boolean availability;
    @ManyToOne
    @JoinColumn(name = "supplier")
    private Supplier supplier;
    @Formula(value = "(fullprice - saleprice) / fullprice")
    private Double discount;
    public Product() {
    }

    public Product( String productName, Category category, double fullPrice, double salePrice, boolean availability, Supplier supplier) {
        this.productName = productName;
        this.category = category;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.availability = availability;
        this.supplier = supplier;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public double getFullPrice() {
        return fullPrice;
    }

    public void setFullPrice(double fullPrice) {
        this.fullPrice = fullPrice;
    }

    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

 //ternary to return zero if the discount is null; otherwise return the discount value
    public Double getDiscount() {
        return discount == null ? 0.0 : discount;
    }
}
