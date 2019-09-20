package com.tts.ttsdashboard.entities;


import javax.persistence.*;

@Entity
@Table(name = "suppliers")
public class Supplier {
    @Id
    @Column(name = "supplierid")
    private int supplierId;
    @Column(name = "suppliername")
    private String supplierName;

    public Supplier() {
    }

    public Supplier(int supplierId, String supplierName) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
    }

    public int getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(int supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }
}

