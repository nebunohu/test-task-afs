import { TCompany } from '../../types';
import { AppDispatch } from "../../services/store";
import getCompny from "../../utils/get-company";
import saveCompanyRequest from '../../utils/save-company-request';
import sendPhotoRequest from '../../utils/send-photo-request';

/* eslint-disable @typescript-eslint/prefer-as-const */
export const GET_COMPANY_REQUEST: 'GET_COMPANY_REQUEST' = 'GET_COMPANY_REQUEST';
export const GET_COMPANY_REQUEST_SUCCESS: 'GET_COMPANY_REQUEST_SUCCESS' = 'GET_COMPANY_REQUEST_SUCCESS';
export const GET_COMPANY_REQUEST_FAILED: 'GET_COMPANY_REQUEST_FAILED' = 'GET_COMPANY_REQUEST_FAILED';
export const SAVE_COMPANY_REQUEST: 'SAVE_COMPANY_REQUEST' = 'SAVE_COMPANY_REQUEST';
export const SAVE_COMPANY_REQUEST_SUCCESS: 'SAVE_COMPANY_REQUEST_SUCCESS' = 'SAVE_COMPANY_REQUEST_SUCCESS';
export const SAVE_COMPANY_REQUEST_FAILED: 'SAVE_COMPANY_REQUEST_FAILED' = 'SAVE_COMPANY_REQUEST_FAILED';
export const SEND_PHOTO_REQUEST: 'SEND_PHOTO_REQUEST' = 'SEND_PHOTO_REQUEST';
export const SEND_PHOTO_REQUEST_SUCCESS: 'SEND_PHOTO_REQUEST_SUCCESS' = 'SEND_PHOTO_REQUEST_SUCCESS';
export const SEND_PHOTO_REQUEST_FAILED: 'SEND_PHOTO_REQUEST_FAILED' = 'SEND_PHOTO_REQUEST_FAILED';
export const SAVE_COMPANY: 'SAVE_COMPANY' = 'SAVE_COMPANY';

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

type TSaveCompanyRequest = {
  type: typeof SAVE_COMPANY_REQUEST;
};

type TSaveCompanyRequestSuccess = {
  type: typeof SAVE_COMPANY_REQUEST_SUCCESS;
};

type TSaveCompanyRequestFailed = {
  type: typeof SAVE_COMPANY_REQUEST_FAILED;
};

type TSendPhotoRequest = {
  type: typeof SEND_PHOTO_REQUEST;
};

type TSendPhotoRequestSuccess = {
  type: typeof SEND_PHOTO_REQUEST_SUCCESS;
  photo: any,
};

type TSendPhotoRequestFailed = {
  type: typeof SEND_PHOTO_REQUEST_FAILED;
};

type TSaveCompany = {
  type: typeof SAVE_COMPANY;
  form: any;
};

export type TCompanyActions = TCompanyRequest |
  TCompanyRequestSuccess |
  TCompanyRequestFailed |
  TSaveCompanyRequest |
  TSaveCompanyRequestSuccess |
  TSaveCompanyRequestFailed |
  TSendPhotoRequest |
  TSendPhotoRequestSuccess |
  TSendPhotoRequestFailed |
  TSaveCompany;

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

export const setIsSaveCompanyRequest = () => {
  return {
    type: SAVE_COMPANY_REQUEST,
  };
};

export const setIsSaveCompanyRequestSuccess = (form: TCompany) => {
  return {
    type: SAVE_COMPANY_REQUEST_SUCCESS,
    form
  };
};

export const setIsSaveCompanyRequestFailed = () => {
  return {
    type: SAVE_COMPANY_REQUEST_FAILED,
  };
};

export const setIsSendPhotoRequest = () => {
  return {
    type: SEND_PHOTO_REQUEST,
  };
};

export const setIsSendPhotoRequestSuccess = (photo: any) => {
  return {
    type: SEND_PHOTO_REQUEST_SUCCESS,
    photo
  };
};

export const setIsSendPhotoRequestFailed = () => {
  return {
    type: SEND_PHOTO_REQUEST_FAILED,
  };
};

export const saveCompany = (form: any) => {
  return {
    type: SAVE_COMPANY,
    form
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

export const saveCompanyRequestThunk = (id: string, form: any) => async (dispatch: AppDispatch) => {
  dispatch(setIsSaveCompanyRequest());
  try {
    const data = await saveCompanyRequest(id, form);
    dispatch(setIsSaveCompanyRequestSuccess(data));
  } catch (error) {
    dispatch(setIsSaveCompanyRequestFailed());
  }
}

export const sendPhotoThunk = (id: string, formData: FormData) => async (dispatch: AppDispatch) => {
  dispatch(setIsSendPhotoRequest());
  try {
    const data = await sendPhotoRequest(id, formData);
    dispatch(setIsSendPhotoRequestSuccess(data));
  } catch (error) {
    dispatch(setIsSendPhotoRequestFailed());
  }
};
