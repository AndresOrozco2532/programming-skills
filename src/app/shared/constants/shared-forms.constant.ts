export const CONSTANTS_FORMS = {
  MAX_ATTEMPTS_SEND_CODE: 4,
  MAX_ATTEMPTS_SUBMIT_CODE: 4,
  MAX_SIZE_FILE: 50 * 1024 * 1024,
  SIZE_MOBILE_SCREEN: 990,

  COUNTRY_SETUP: {
    SIGN_CURRENCY: '$',
    THOUSAND_SEPARATOR: /\./g,
    LANGUAGE: 'es-CO',
  },

  REGEX: {
    NUMBER: '[0-9]',
    NUMBER_WITH_POINTS: /[0-9.]/,
    LETTERS: /^[A-Za-zá-ú\s.]+$/,
    EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    EMAIL_INPUT: /[A-Za-z0-9._%+-@]$/,
    PASSWORD:
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.{8,})/,
    WEB_SITE:
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,
    WEB_SITE_INPUT: /[A-Za-z0-9._%+-@]$/,
  },

  SELECTORS: {
    GLOBAL: `.ng-invalid[formcontrolname]:not(.form)>.form-control, 
  .ng-invalid[formcontrolname]:not(.form) .select-group>.form-control, 
  .form-control.ng-invalid, .checkbox.ng-invalid`,
    FORM: `
  .ng-invalid[formcontrolname]:not(.form) input,
  input.ng-invalid
`,
  },

  MESSAGES: {
    ERROR: 'Ha ocurrido un error, intente nuevamente',
    ERROR_FIELD_REQUIRED: 'Debes completar todos los campos',
    ERROR_EMAIL_INVALID: 'Correo electrónico inválido.',
    ERROR_LEGAL_FIELD_REQUIRED: 'Please accept {{name}} to continue',
    ERROR_LETTER_FIELD_INVALID:
      'Please fill the {{name}} without special characters',
    ERROR_PASSWORD_CONFIRMATION: 'Passwords must be equals',
    ERROR_PASSWORD_INVALID:
      'La contraseña debe cumplir con los elementos de seguridad',
    ERROR_WEBSITE_INVALID: 'Please fill in a valid website',
    ERROR_UPLOADING_FILE:
      'Ocurrió un error mientras se subía el archivo, inténtalo nuevamente',
    ERROR_NOT_FOUND_RESOURCE:
      'El recurso solicitado no está disponible, intente nuevamente',
    ERROR_FILE_EMPTY:
      'El archivo subido no contiene información, inténtalo nuevamente.',
    ERROR_FILE_HEAVY:
      'El archivo subido es demasiado grande, inténtalo nuevamente.',
    ERROR_FILE_EXTENSION:
      'Recuerda que el archivo debe ser un documento PDF o una imagen, inténtalo nuevamente.',
    ERROR_FILE_REQUIRED: 'Debe seleccionar un archivo',
    ERROR_UPLOADING:
      'Ocurrió un error mientras se subía el archivo, inténtalo nuevamente',
    SESSION_FINISHED:
      'La sesión es inválida o ha finalizado! Por favor ingrese nuevamente desde el portal',
    ERROR_MINIMAL_VALUE_LOAN:
      'You should request an amount loan greater than {{value}}',
    ERROR_MAXIMUM_VALUE_LOAN:
      'You should request an amount loan less than {{value}}',
  },

  ROUTES: {
    LANDING: '/',
  },
};
