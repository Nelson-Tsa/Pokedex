package com.java.pokedex.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;


@Service
public class CloudinaryService {

  private final Cloudinary cloudinary;
   
        public CloudinaryService(Cloudinary cloudinary) {
            this.cloudinary = cloudinary;
        }
   
        public String uploadFile(MultipartFile file, String folderName) {
            try {
                @SuppressWarnings("unchecked")
                Map<String, Object> options = ObjectUtils.asMap(
            "folder", folderName);

               // La méthode upload attend un File ou un tableau de bytes
               @SuppressWarnings("unchecked")
               Map<String, Object> uploadResult = (Map<String, Object>) cloudinary.uploader().upload(file.getBytes(), options);
     
            //    ObjectUtils.emptyMap());

               // uploadResult contient plein d'infos, dont l'URL sécurisée de l'image
               return (String) uploadResult.get("secure_url");
           } catch (IOException e) {
               // Il est préférable de logger l'erreur et de lancer une exception personnalisée
               throw new RuntimeException("Impossible d'uploader le fichier.", e);
           }
       }
}