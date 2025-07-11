import {ValidationType} from '../types/ValidationType';

import {utils} from '../utils';
import {VALIDATION_ENABLED} from '../config';

export const validation = ({
  code,
  email,
  country,
  userName,
  password,
  location,
  phoneNumber,
  confirmPassword,
}: ValidationType) => {
  if (!VALIDATION_ENABLED) {
    return true;
  }

  let isValid = true;

  if (userName !== undefined) {
    if (userName === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill name field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }

    if (userName.length < 3) {
      utils.showMessage({
        message: 'Error',
        description: 'Name must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (email !== undefined) {
    if (email === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill email field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      utils.showMessage({
        message: 'Error',
        description: 'Email address is invalid',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (password !== undefined) {
    if (password === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill password field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (password.length < 6) {
      utils.showMessage({
        message: 'Error',
        description: 'Password must be at least 6 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (confirmPassword !== undefined) {
    if (confirmPassword === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill confirm password field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (password !== confirmPassword) {
      utils.showMessage({
        message: 'Error',
        description: 'Passwords do not match',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (phoneNumber !== undefined) {
    if (phoneNumber === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill phone number field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else {
      // const regex = new RegExp('^[0-9]+$');
      // if (!regex.test(phoneNumber)) {
      //   showMessage({
      //     message: 'Error',
      //     description: 'Phone number is invalid',
      //     type: 'danger',
      //     icon: 'danger',
      //   });
      //   isValid = false;
      //   return isValid;
      // }
      if (phoneNumber.length < 9) {
        utils.showMessage({
          message: 'Error',
          description: 'Phone number must be at least 9 characters',
          type: 'danger',
          icon: 'danger',
        });
        isValid = false;
        return isValid;
      }
      if (phoneNumber.length > 15) {
        utils.showMessage({
          message: 'Error',
          description: 'Phone number must be less than 15 characters',
          type: 'danger',
          icon: 'danger',
        });
        isValid = false;
        return isValid;
      }
    }

    // if (phoneNumber.length < 9) {
    //   showMessage({
    //     message: 'Error',
    //     description: 'Phone number must be at least 9 characters',
    //     type: 'danger',
    //     icon: 'danger',
    //   });
    //   isValid = false;
    //   return isValid;
    // }
  }

  if (code !== undefined) {
    if (code === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill OTP field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (code.length < 5) {
      utils.showMessage({
        message: 'Error',
        description: 'OTP must be at least 5 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (country !== undefined) {
    if (country === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill country field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (country.length < 3) {
      utils.showMessage({
        message: 'Error',
        description: 'Country must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (location !== undefined) {
    if (location === '') {
      utils.showMessage({
        message: 'Error',
        description: 'Please fill location field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (location.length < 3) {
      utils.showMessage({
        message: 'Error',
        description: 'Location must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};
