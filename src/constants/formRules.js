export const FormRule = {
  NAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid name!",
      min: 3,
      max: 50,
    },
  ],
  LINK: [
    {
      required: false,
      pattern: /^(http:\/\/|https:\/\/).*$/,
      message: "Please enter a valid link!",
      max: 100,
    },
  ],
  FIRSTNAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid first name!",
      min: 3,
      max: 50,
    },
  ],
  LASTNAME: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{3,50}$/,
      message: "Please enter a valid last name!",
      min: 3,
      max: 50,
    },
  ],
  COUNTRY: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{2,50}$/,
      message: "Please enter a valid country name!",
      min: 3,
      max: 50,
    },
  ],
  STATE: [
    {
      required: true,
      pattern: /^[a-zA-Z ]{2,50}$/,
      message: "Please enter a valid state name!",
      min: 2,
      max: 2,
    },
  ],
  EMAIL: [
    {
      required: true,
      type: "email",
      message: "Please enter a valid email!",
      validator: (_, value) => {
        const lowercaseRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!lowercaseRegex.test(value) || /[A-Z]/.test(value)) {
          return Promise.reject(
            new Error(
              "Please enter a valid email address with lowercase letters only."
            )
          );
        }
        return Promise.resolve();
      },
    },
  ],

  CONFIRM_PASSWORD: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match!")
        );
      },
    }),
  ],
  PASSWORD: [
    {
      required: true,
      message: "Please enter password!",
    },
  ],

  OLD_PASSWORD: [
    {
      required: true,
      message: "Please enter old password!",
    },
  ],

  NEW_PASSWORD: [
    {
      required: true,
      message: "Please enter new password!",
    },
  ],
  RE_ENTER_PASSWORD: [
    {
      required: true,
      message: "Please re-enter new password!",
    },
  ],

  SELECT: [
    {
      required: true,
      message: "Please select some value!",
    },
  ],

  PHONENUMBER: [
    {
      required: true,
      message: "Please enter your phone number!",
    },
    {
      min: 10,
      message: "The phone number must have 10 digits!",
    },
  ],
  PHONENUMBER_NOT_REQUIRED: [
    {
      required: false,
    },
    {
      min: 10,
      message: "The phone number must have 10 digits!",
    },
  ],
  PHONENUMBER_TABLE: [
    {
      pattern: /^(\d{11}|N\/A)$/,
      message: "Phone number must be of the format 12345678901",
    },
    {
      required: true,
      message: "Please enter your phone number!",
    },
  ],
  PHONENUMBER_TABLE_NOT_REQUIRED: [
    {
      pattern: /^(\d{10}|N\/A)$/,
      message: "Phone number must be 10 digits.",
    },
    {
      required: false,
    },
  ],

  CODE: [
    {
      required: true,
      message: "Please enter a 6 digit valid code!",
      pattern: /^[0-9]{6}$/,
    },
  ],
  COUNT: [
    {
      required: true,
      message: "Please enter a valid number!",
      pattern: /^\d{1,2}$/,
    },
  ],
  COUNT_SELECT: [
    {
      required: true,
      message: "Please select a range!",
    },
  ],
  FOUR_DIGIT_COUNT: [
    {
      required: true,
      message: "Please enter a valid number!",
      pattern: /^\d{1,4}$/,
    },
  ],
  NAME_NOT_REQUIRED: [
    {
      required: false,
    },
  ],
  LANGUAGE: [
    {
      required: false,
    },
  ],

  ZIP_CODE: [
    {
      required: true,
      message: "Please enter your zip code!",
    },
  ],

  CITY: [
    {
      required: true,
      message: "Please enter a valid city name!",
      pattern: /^[a-zA-Z ]{3,50}$/,
    },
  ],

  AGE: [
    {
      required: true,
      message: "Age is required!",
    },
  ],

  ADDRESS: [
    {
      required: true,
      message: "Please enter address!",
    },
  ],

  none: [
    {
      required: false,
    },
  ],
};
