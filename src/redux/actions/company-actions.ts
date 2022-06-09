import { TCompany } from '../../types';
import { AppDispatch } from "../../services/store";
import getCompny from "../../utils/get-company";

/* eslint-disable @typescript-eslint/prefer-as-const */
export const GET_COMPANY_REQUEST: 'GET_COMPANY_REQUEST' = 'GET_COMPANY_REQUEST';
export const GET_COMPANY_REQUEST_SUCCESS: 'GET_COMPANY_REQUEST_SUCCESS' = 'GET_COMPANY_REQUEST_SUCCESS';
export const GET_COMPANY_REQUEST_FAILED: 'GET_COMPANY_REQUEST_FAILED' = 'GET_COMPANY_REQUEST_FAILED';

type TCompanyRequest = {
  type: typeof GET_COMPANY_REQUEST;
};

type TCompanyRequestSuccess = {
  type: typeof GET_COMPANY_REQUEST_SUCCESS;
  company: TCompany;
};

type TCompanyRequestFailed = {
  type: typeof GET_COMPANY_REQUEST_FAILED;
};

export type TCompanyActions = TCompanyRequest |
  TCompanyRequestSuccess |
  TCompanyRequestFailed;

export const getCompanyRequest = () => {
  return {
    type: GET_COMPANY_REQUEST,
  };
};

export const getCompanyRequestSuccess = (company: TCompany) => {
  return {
    type: GET_COMPANY_REQUEST_SUCCESS,
    company
  };
};

export const getCompanyRequestFailed = () => {
  return {
    type: GET_COMPANY_REQUEST_FAILED,
  };
};

export const getCompanyThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(getCompanyRequest());
  try {
    const companyData = await getCompny(id);
    dispatch(getCompanyRequestSuccess(companyData));
  } catch (error) {
    dispatch(getCompanyRequestFailed());
  }
};
