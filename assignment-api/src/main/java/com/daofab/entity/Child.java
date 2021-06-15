package com.daofab.entity;

import java.math.BigDecimal;

public class Child {
  
  private long id;
  private long parentId;
  private BigDecimal paidAmount;
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }
  public long getParentId() {
    return parentId;
  }
  public void setParentId(long parentId) {
    this.parentId = parentId;
  }
  public BigDecimal getPaidAmount() {
    return paidAmount;
  }
  public void setPaidAmount(BigDecimal paidAmount) {
    this.paidAmount = paidAmount;
  }
}
