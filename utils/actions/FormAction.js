import {
  validateString,
  validateEmail,
  validatePassword,
} from "../../utils/validation";

const FormAction = (id, value) => {
  if (id == "first name" || id == "last name") {
    return validateString(id, value);
  } else if (id == "email") {
    return validateEmail(id, value);
  } else if (id == "password") {
    return validatePassword(id, value);
  }
};

export default FormAction;
