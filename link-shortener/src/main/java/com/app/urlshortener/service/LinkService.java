package com.app.urlshortener.service;

import com.app.urlshortener.model.Link;
import com.app.urlshortener.repository.LinkRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LinkService {

    private final LinkRepository repository;
    private @Value("${urlshortener.host}") String host;

    public String generate(@RequestBody String url){
        if (!url.startsWith("http")){
            url = "http://" + url;
        }
        String shortUrl = generateHelper(url);
        Link link = new Link();
        link.setCreateDate(new Date());
        link.setId(UUID.randomUUID().toString());
        link.setShortUrl(shortUrl);
        link.setUrl(url);
        repository.save(link);
        return shortUrl;
    }

    public void get(HttpServletResponse response, @PathVariable("url") String url){
        Link get = repository.findByShortUrl(url);
        if (Objects.nonNull(get)) {
            response.setStatus(301);
            response.addHeader("Location", get.getUrl());
            return;
        }
        response.setStatus(301);
        response.addHeader("Location", "404");
    }

    public String getHost(){
        return host;
    }
    private String generateHelper(String url){

        String geneatedUrl = RandomStringUtils.random(6, "abcdefghjklmnoprstuvyzwx1234567890");
        boolean exists = repository.existsByShortUrl(geneatedUrl);
        if (exists){
            return generateHelper(url);
        }
        return geneatedUrl;

    }

}
