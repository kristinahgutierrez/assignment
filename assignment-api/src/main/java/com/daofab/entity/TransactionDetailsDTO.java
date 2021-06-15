package com.daofab.entity;

import java.util.List;

public class TransactionDetailsDTO {

  private List<Parent> parent;
  private List<Child> child;
  
  public List<Parent> getParent() {
    return parent;
  }
  public void setParent(List<Parent> parent) {
    this.parent = parent;
  }
  public List<Child> getChild() {
    return child;
  }
  public void setChild(List<Child> child) {
    this.child = child;
  }
  
  
  
}
