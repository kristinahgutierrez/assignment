package com.daofab.web;

import java.io.IOException;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daofab.entity.TransactionDetailsDTO;
import com.daofab.service.TransactionDetailsService;

@RestController
@RequestMapping("/transaction-details")
public class TransactionDetailsController {

  @Inject
  TransactionDetailsService transactionDetailsService;

  @GetMapping("/load-parent-details")
  public TransactionDetailsDTO loadParentDetails() throws IOException {
    return transactionDetailsService.getTransactionDetails();
  }

}
