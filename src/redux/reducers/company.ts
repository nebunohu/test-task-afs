import { SAVE_COMPANY } from './../actions/company-actions';
import { TCompanyActions, GET_COMPANY_REQUEST, GET_COMPANY_REQUEST_SUCCESS, GET_COMPANY_REQUEST_FAILED } from '../actions/company-actions';
import { TCompany } from "../../types";

type TCompanyState = {
  company: TCompany | null;

  getCompanyRequest: boolean;
  getCompanyRequestSuccess: boolean;
  getCompanyRequestFailed: boolean;
};

const initialState: TCompanyState = {
  company: null,

  getCompanyRequest: false,
  getCompanyRequestSuccess: false,
  getCompanyRequestFailed: false,
};

const companyReducer = (state = initialState, action: TCompanyActions) => {
  switch (action.type) {
    case GET_COMPANY_REQUEST: {
      return {
        ...state,
        getCompanyRequest: true,
        getCompanyRequestSuccess: false,
        getCompanyRequestFailed: false,
      };
    }
    case GET_COMPANY_REQUEST_SUCCESS: {
      return {
        ...state,
        company: action.company,
        getCompanyRequest: false,
        getCompanyRequestSuccess: true,
      };
    }
    case GET_COMPANY_REQUEST_FAILED: {
      return {
        ...state,
        getCompanyRequest: false,
        getCompanyRequestFailed: true,
      };
    }
    case SAVE_COMPANY: {
      // const formKeys = Object.keys(action.form);
      // let newState = {};
      
      // for (let i = 0; i < formKeys.length; i ++) {
      //   new
      // }

      return {
        ...state,
        company: {
          ...state.company,
          ...action.form
        },
      }
    }
    default: {
      return state;
    }
  }
}

export default companyReducer;