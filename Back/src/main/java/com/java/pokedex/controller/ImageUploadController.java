package com.java.pokedex.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.java.pokedex.service.CloudinaryService;


@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ImageUploadController {
  private final CloudinaryService cloudinaryService;
   
     public ImageUploadController(CloudinaryService cloudinaryService) {
            this.cloudinaryService = cloudinaryService;
        }
   
        @PostMapping("/upload")
        public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
            if (file.isEmpty()) {
                return new ResponseEntity<>("Veuillez sélectionner un fichier.",
      HttpStatus.BAD_REQUEST);
            }
            try {
                String imageUrl = cloudinaryService.uploadFile(file, "Pokedex");
                // Ici, vous pouvez sauvegarder `imageUrl` dans votre BDD
                // avant de renvoyer la réponse.
                return new ResponseEntity<>(imageUrl, HttpStatus.OK);
            } catch (RuntimeException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
       }
}