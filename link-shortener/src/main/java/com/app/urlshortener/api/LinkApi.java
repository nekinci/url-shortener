package com.app.urlshortener.api;

import com.app.urlshortener.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/urlshortener")
@CrossOrigin
public class LinkApi {

    @Autowired private LinkService service;

    @PostMapping("/generate")
    public String generate(@RequestBody String url){
       return service.generate(url);
    }

    @GetMapping("/{url}")
    public void get(HttpServletResponse response, @PathVariable("url") String url){
      service.get(response, url);
    }

    @GetMapping("/host")
    public String getHost(){
        return service.getHost();
    }
}
