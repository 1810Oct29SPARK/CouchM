package com.revature.projekt.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Value("${cors.allowed.site}")
	private String allowedOrigins;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		System.out.println("WebMvcConfigurer:::::::" + allowedOrigins);
		registry.addMapping("/**").allowedOrigins(allowedOrigins)
				.allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE").allowCredentials(true)
				.allowedHeaders("Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method",
						"Access-Control-Request-Headers", "Authorization", "AUTH_USER", "REMOTE-USER", "AUTH-USER",
						"AUTHUSER", "X-CSRF-Token", "*")
				.exposedHeaders("Content-Type", "X-Requested-With", "X-CSRF-Token", "accept", "Origin",
						"Access-Control-Request-Method", "Access-Control-Request-Headers", "Authorization", "AUTH_USER",
						"REMOTE-USER", "AUTH-USER", "AUTHUSER")
				.maxAge(4800);
	}

}