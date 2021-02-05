package com.app.urlshortener.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Link {
    @Id
    private String id;
    private String url;
    private String shortUrl;
    @CreatedDate
    private Date createDate;
    private String createdBy;

}
