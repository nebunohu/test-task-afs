import { GET_CONTACT_REQUEST, GET_CONTACT_REQUEST_SUCCESS, GET_CONTACT_REQUEST_FAILED } from './../actions/contact-actions';
import { TContact } from "../../types";
import { TContactActions } from "../actions/contact-actions";

type TContactState = {
  contact: TContact | null;

  getContactRequest: boolean;
  getContactRequestSuccess: boolean;
  getContactRequestFailed: boolean;
};

const initialState: TContactState = {
  contact: null,

  getContactRequest: false,
  getContactRequestSuccess: false,
  getContactRequestFailed: false,
};

const contactReducer = (state = initialState, action: TContactActions) => {
  switch (action.type) {
    case GET_CONTACT_REQUEST: {
      return {
        ...state,
        getContactyRequest: true,
        getContactRequestSuccess: false,
        getContactRequestFailed: false,
      };
    }
    case GET_CONTACT_REQUEST_SUCCESS: {
      return {
        ...state,
        contact: action.contact,
        getContactRequest: false,
        getContactRequestSuccess: true,
      };
    }
    case GET_CONTACT_REQUEST_FAILED: {
      return {
        ...state,
        getContactRequest: false,
        getContactRequestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default contactReducer;