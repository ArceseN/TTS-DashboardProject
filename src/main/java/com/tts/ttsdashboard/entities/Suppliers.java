package com.tts.ttsdashboard.entities;

import org.springframework.data.rest.core.config.Projection;

    @Projection(name = "Suppliers", types = Supplier.class)
    public interface Suppliers {
        int getSupplierId();
        String getSupplierName();
    }

