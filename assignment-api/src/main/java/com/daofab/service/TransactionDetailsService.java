package com.daofab.service;
import java.io.IOException;

import com.daofab.entity.TransactionDetailsDTO;

public interface TransactionDetailsService {

  public TransactionDetailsDTO getTransactionDetails() throws IOException;
  
}
