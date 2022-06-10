import { SET_IS_DELETE_MODAL, TAppActions } from '../actions/app-actions';

type TAppState = {
  isDeleteModal: boolean;
};

const initialState: TAppState = {
  isDeleteModal: false,
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case SET_IS_DELETE_MODAL: {
      return {
        ...state,
        isDeleteModal: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default appReducer;