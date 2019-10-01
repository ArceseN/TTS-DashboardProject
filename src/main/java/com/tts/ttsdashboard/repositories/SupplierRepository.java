package com.tts.ttsdashboard.repositories;


import com.tts.ttsdashboard.entities.Supplier;
import com.tts.ttsdashboard.entities.Suppliers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = Suppliers.class)
public interface SupplierRepository extends JpaRepository<Supplier, Integer> {
}
