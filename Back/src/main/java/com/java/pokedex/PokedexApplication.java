package com.java.pokedex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class PokedexApplication {

	public static void main(String[] args) {
		

		// Charger les variables d'environnement depuis .env
        Dotenv dotenv = Dotenv.configure().load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        // lance l'aplicaiton
		SpringApplication.run(PokedexApplication.class, args);
      	 System.out.println("Back Pokedex running..");
	
	}

}
