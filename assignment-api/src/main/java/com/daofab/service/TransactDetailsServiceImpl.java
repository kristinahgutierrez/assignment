package com.daofab.service;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.daofab.entity.Child;
import com.daofab.entity.Parent;
import com.daofab.entity.TransactionDetailsDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TransactDetailsServiceImpl implements TransactionDetailsService {

  @Override
  public TransactionDetailsDTO getTransactionDetails() throws IOException {
    /**
     * getTransactionDetails
     * - reads the file from Json
     * - Parent contains Child list object so that only one API will be used to retrieve the data
     */
    TransactionDetailsDTO transactionDetails = new TransactionDetailsDTO();
    List<Parent> parentList = new ArrayList<>();
    ObjectMapper objectMapper = new ObjectMapper();
    ClassLoader classLoader = getClass().getClassLoader();
    InputStream inputParent = classLoader.getResourceAsStream("data/Parent.json");
    InputStream inputChild = classLoader.getResourceAsStream("data/Child.json");
    TransactionDetailsDTO parentDetails = objectMapper.readValue(inputParent, TransactionDetailsDTO.class);
    TransactionDetailsDTO childDetails = objectMapper.readValue(inputChild, TransactionDetailsDTO.class);
    
    for(Parent parent : parentDetails.getParent()) {
      List<Child> child = childDetails.getChild().stream().filter(c -> c.getParentId() == parent.getId()).collect(Collectors.toList());
      parent.setChild(child);
      
      BigDecimal totalPaidAmount = child.stream().map(c -> c.getPaidAmount()).reduce(BigDecimal.ZERO, BigDecimal::add);
      parent.setTotalPaidAmount(totalPaidAmount);
      parentList.add(parent);
    }
    
    transactionDetails.setParent(parentList);
    
    return transactionDetails;
  }

}
