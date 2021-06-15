import { transactionTypes } from "./types";


export function loadTransactionDetails(state = { }, action) {
    switch (action.type) {
      case transactionTypes.LOAD_TRANSACTION_DETAILS_SUCCESS:
        return {
          ...state
        };
  
      default: 
        return state;
    }
  }
