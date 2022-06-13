/* eslint-disable @typescript-eslint/prefer-as-const */
export const SET_IS_DELETE_MODAL: 'SET_IS_DELETE_MODAL' = 'SET_IS_DELETE_MODAL';
export const SET_IS_EDIT_MODAL: 'SET_IS_EDIT_MODAL' = 'SET_IS_EDIT_MODAL';
export const SET_IS_EDIT_COMMON_INFO_MODAL: 'SET_IS_EDIT_COMMON_INFO_MODAL' = 'SET_IS_EDIT_COMMON_INFO_MODAL';
export const SET_IS_EDIT_CONTACTS_MODAL: 'SET_IS_EDIT_CONTACTS_MODAL' = 'SET_IS_EDIT_CONTACTS_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' =   'CLOSE_MODAL';

type TSetIsDeleteModal = {
  type: typeof SET_IS_DELETE_MODAL;
};

type TSetIsEditModal = {
  type: typeof SET_IS_EDIT_MODAL;
};

type TSetIsEditCommonInfoModal = {
  type: typeof SET_IS_EDIT_COMMON_INFO_MODAL;
};

type TSetIsEditContactsModal = {
  type: typeof SET_IS_EDIT_CONTACTS_MODAL;
};

type TCloseModal = {
  type: typeof CLOSE_MODAL;
};

export type TAppActions = TSetIsDeleteModal |
  TSetIsEditModal |
  TSetIsEditCommonInfoModal |
  TSetIsEditContactsModal |
  TCloseModal;

export const setIsDeleteModal = () => {
  return {
    type: SET_IS_DELETE_MODAL,
  };
};

export const setIsEditModal = () => {
  return {
    type: SET_IS_EDIT_MODAL,
  };
};

export const setIsEditCommonInfoModal = () => {
  return {
    type: SET_IS_EDIT_COMMON_INFO_MODAL,
  };
};

export const setIsEditContactsModal = () => {
  return {
    type: SET_IS_EDIT_CONTACTS_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
