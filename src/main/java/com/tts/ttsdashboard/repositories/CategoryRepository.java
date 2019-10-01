package com.tts.ttsdashboard.repositories;

import com.tts.ttsdashboard.entities.Categories;
import com.tts.ttsdashboard.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = Categories.class)
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
