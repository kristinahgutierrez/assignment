package com.daofab.assigment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.daofab.web", "com.daofab.service"})
public class TransactionDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TransactionDetailsApplication.class, args);
	}

}
