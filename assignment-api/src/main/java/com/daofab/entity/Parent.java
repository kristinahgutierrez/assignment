package com.daofab.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Parent {
  
  private long id;
  
  private String sender;
  
  private String receiver;
  
  private BigDecimal totalAmount = BigDecimal.ZERO;
  private BigDecimal totalPaidAmount = BigDecimal.ZERO;
  private List<Child> child = new ArrayList<>();
  
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }
  public String getSender() {
    return sender;
  }
  public void setSender(String sender) {
    this.sender = sender;
  }
  public String getReceiver() {
    return receiver;
  }
  public void setReceiver(String receiver) {
    this.receiver = receiver;
  }
  public BigDecimal getTotalAmount() {
    return totalAmount;
  }
  public void setTotalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
  }
  public BigDecimal getTotalPaidAmount() {
    return totalPaidAmount;
  }
  public void setTotalPaidAmount(BigDecimal totalPaidAmount) {
    this.totalPaidAmount = totalPaidAmount;
  }
  public List<Child> getChild() {
    return child;
  }
  public void setChild(List<Child> child) {
    this.child = child;
  }
  
  
  
}
