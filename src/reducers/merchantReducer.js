import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function merchantReducer(state = initialState.merchants, action) {
  switch(action.type) {
    case types.LOAD_MERCHANTS_SUCCESS:
      return action.merchants;

    case types.CREATE_MERCHANTS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.merchant)
      ];

    case types.UPDATE_MERCHANTS_SUCCESS:
      let updatedMerchantList = [
        ...state.filter(merchant => merchant.index !== action.merchant.index),
        Object.assign({}, action.merchant)
      ];
      updatedMerchantList = updatedMerchantList.sort((a,b) => a.index - b.index);
      return updatedMerchantList;

    case types.DELETE_MERCHANTS_SUCCESS:
      let updatedMerchantList1 = [
        ...state.filter(merchant => merchant.index !== action.index)
      ];
      updatedMerchantList1 = updatedMerchantList1.sort((a,b) => a.index - b.index);
      return updatedMerchantList1;

    default:
      return state;
  }
}
