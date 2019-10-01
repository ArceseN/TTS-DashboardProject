package com.tts.ttsdashboard.entities;

import com.tts.ttsdashboard.entities.Category;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "Categories", types = Category.class)
public interface Categories {
    int getCategoryId();
    String getCategoryName();
}