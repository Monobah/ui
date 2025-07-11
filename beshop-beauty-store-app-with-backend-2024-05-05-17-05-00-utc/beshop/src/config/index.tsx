const LOCALHOST = 'http://127.0.0.1:8000/';
const DOMAIN = 'https://beshop.rn-admin.site/';

export const DEBUG_MODE_ENABLED = true;
export const VALIDATION_ENABLED = false;

// USE THIS ADDRESS FOR LOCALHOST OR FOR DOMAIN //
export const BASE_URL = DOMAIN;

export const GET_TAGS = `${BASE_URL}api/tags`;
export const GET_COLORS = `${BASE_URL}api/colors`;
export const GET_BANNERS = `${BASE_URL}api/banners`;
export const GET_CAROUSEL = `${BASE_URL}api/slides`;
export const EXIST_USER = `${BASE_URL}api/user/exist`;
export const LOGIN_USER = `${BASE_URL}api/user/login`;
export const GET_PRODUCTS = `${BASE_URL}api/products`;
export const CREATE_USER = `${BASE_URL}api/user/create`;
export const UPDATE_USER = `${BASE_URL}api/user/update`;
export const GET_CATEGORIES = `${BASE_URL}api/categories`;
export const GET_PROMOCODES = `${BASE_URL}api/promocodes`;
export const RESEND_OTP = `${BASE_URL}api/user/otp/resend`;
export const CONFIRM_EMAIL = `${BASE_URL}api/user/email/confirm`;
export const RESET_PASSWORD = `${BASE_URL}api/user/password/reset`;
export const AUTHORIZATION_TOKEN = 'aH3KCew1YsWhWqW0tqNU3ndzHb3RdblI';
export const CHANGE_PHONE_NUMBER = `${BASE_URL}api/user/phone/change`;
// VERIFICATION //
export const SEND_OTP_TO_PHONE = `${BASE_URL}api/user/otp/send/phone`;
export const SEND_OTP_TO_EMAIL = `${BASE_URL}api/user/otp/send/email`;
export const VERIFY_OTP_FOR_PHONE = `${BASE_URL}api/user/otp/verify/phone`;
export const VERIFY_OTP_FOR_EMAIL = `${BASE_URL}api/user/otp/verify/email`;
// IF USER OR EMAIL EXISTS //
export const IF_USER_EXISTS = `${BASE_URL}api/user/exists`;
export const IF_EMAIL_EXISTS = `${BASE_URL}api/user/email/exists`;

export const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + AUTHORIZATION_TOKEN,
  },
};
