import * as types from './actionTypes';
import merchantApi from '../api/mockMerchantApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadMerchantSuccess(merchants) {
  return { type: types.LOAD_MERCHANTS_SUCCESS, merchants };
}

export function createMerchantSuccess(merchant) {
  return { type: types.CREATE_MERCHANTS_SUCCESS, merchant };
}

export function deleteMerchantSuccess(index) {
  return { type: types.DELETE_MERCHANTS_SUCCESS, index };
}

export function updateMerchantSuccess(merchant) {
  return { type: types.UPDATE_MERCHANTS_SUCCESS, merchant };
}

export function loadMerchants() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return merchantApi.getAllMerchants().then(merchants => {
      dispatch(loadMerchantSuccess(merchants));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMerchant(merchant) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return merchantApi.saveMerchant(merchant).then(savedmerchant => {
      merchant.index !== ""  ? dispatch(updateMerchantSuccess(savedmerchant)) : dispatch(createMerchantSuccess(savedmerchant));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteMerchant(index) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return merchantApi.deleteMerchant(index).then(merchants => {
      dispatch(deleteMerchantSuccess(index));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}