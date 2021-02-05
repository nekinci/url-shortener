package com.app.urlshortener.repository;

import com.app.urlshortener.model.Link;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends MongoRepository<Link, String> {
    Link findByShortUrl(String shortUrl);
    boolean existsByShortUrl(String shortUrl);
}
