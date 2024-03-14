import { validate } from "validate.js";

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z ",
    },
  };

  //   if (value !== "") {
  //     constraints.format = {
  //       pattern: "[a-z]+",
  //       flags: "i",
  //       message: "can only contain a-z ",
  //     };
  //   }

  const validation = validate(
    { [id]: value },
    {
      [id]: constraints,
    }
  );

  return validation;
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: {
      allowEmpty: false,
      email: {
        email: true,
      },
    },
  };

  //   if (value !== "") {
  //     constraints.email = {
  //       email: true,
  //     };
  //   }
  const validation = validate(
    { [id]: value },
    {
      [id]: constraints,
    }
  );

  return validation;
};

export const validatePassword = (id, value) => {
  const constraints = {
    presence: {
      allowEmpty: false,
      length: {
        minimum: 6,
        message: "must be at least 6 characters",
      },
    },
  };

  //   if (value !== "") {
  //     constraints.email = {
  //       email: true,
  //     };
  //   }
  const validation = validate(
    { [id]: value },
    {
      [id]: constraints,
    }
  );

  return validation;
};
