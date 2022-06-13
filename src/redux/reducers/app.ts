import { CLOSE_MODAL, SET_IS_EDIT_MODAL, SET_IS_EDIT_COMMON_INFO_MODAL, SET_IS_EDIT_CONTACTS_MODAL } from './../actions/app-actions';
import { SET_IS_DELETE_MODAL, TAppActions } from '../actions/app-actions';

type TAppState = {
  isDeleteModal: boolean;
  isEditModal: boolean;
  isEditCommonInfoModal: boolean;
  isEditContactsModal: boolean;
};

const initialState: TAppState = {
  isDeleteModal: false,
  isEditModal: false,
  isEditCommonInfoModal: false,
  isEditContactsModal: false,
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case SET_IS_DELETE_MODAL: {
      return {
        ...state,
        isDeleteModal: true,
      };
    }
    case SET_IS_EDIT_MODAL: {
      return {
        ...state,
        isEditModal: true,
      };
    }
    case SET_IS_EDIT_COMMON_INFO_MODAL: {
      return {
        ...state,
        isEditCommonInfoModal: true,
      };
    }
    case SET_IS_EDIT_CONTACTS_MODAL: {
      return {
        ...state,
        isEditContactsModal: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isDeleteModal: false,
        isEditModal: false,
        isEditCommonInfoModal: false,
        isEditContactsModal: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default appReducer;