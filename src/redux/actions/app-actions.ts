/* eslint-disable @typescript-eslint/prefer-as-const */
export const SET_IS_DELETE_MODAL: 'SET_IS_DELETE_MODAL' = 'SET_IS_DELETE_MODAL';

type TSetIsDeleteModal = {
  type: typeof SET_IS_DELETE_MODAL;
};

export type TAppActions = TSetIsDeleteModal;

export const setIsDeleteModal = () => {
  return {
    type: SET_IS_DELETE_MODAL,
  };
};
