import { environment } from 'src/environments/environment';

export const CONSTANTS = {
  PROP_URL_TOKEN: 'token',
  PROP_URL_UBER_CODE: 'code',
  PROP_STORAGE_ONBOARDING_STEPS: 'prop.keo.on-boarding-data-steps',
  PROP_STORAGE_VISITOR: 'prop.keo.visitor',
  PROP_HOUR_TOKEN: 'prop.keo.on-boarding-hour-token',
  PROP_STORAGE_UBER_CODE: 'prop.keo.code',
  PROP_STORAGE_TOKEN: 'prop.keo.on-boarding-token',
  PROP_STORAGE_FIRST_LOGGED: 'prop.app-first-logged',
  SIZE_MOBILE_SCREEN: 990,

  COUNTRY_SETUP: {
    SIGN_CURRENCY: '$',
    THOUSAND_SEPARATOR: /\./g,
    LANGUAGE: 'es-CO',
    CODE: 'CO',
  },

  HTTP_CODES: {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    CONFLICT: 409,
    OK: 200,
    SUCCESS: '00',
  },

  REGEX: {
    NUMBER: '[0-9]',
    LETTERS: /^[A-Za-zá-ú\s.]+$/,
    NO_LETTERS: /[^A-zÀ-ú ]/g,
    EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    EMAIL_INPUT: /[A-Za-z0-9._%+-@]$/,
    EMAIL_LONG:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD:
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.{8,})/,
    WEB_SITE:
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,
    WEB_SITE_INPUT: /[A-Za-z0-9._%+-@]$/,
  },

  MESSAGES: {
    ERROR: 'Ha ocurrido un error, intente nuevamente',
    ERROR_FIELD_REQUIRED: 'Debes completar todos los campos',
    ERROR_EMAIL_INVALID: 'Please fill in a valid email',
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
    CONFIRM_GO_OUT_ON_BOARDING:
      '¿Quieres continuar con la aplicación al <span class="no-wrap">préstamo KEO? </span>',
    TEXT_SUCCESS_APPLY:
      'Ya tenemos tus datos y serás de los primeros en saber de los préstamos KEO para clientes Civico.',
    ACCEPT_CHARGE: 'Por favor acepte la Política de cobranza para continuar.',

    ACCEPT_UBER_LETTER_FOR_TRANSFER_EARNINGS:
      'Por favor acepte la carta de instrucción para transferencia de ganancias para continuar.',
    ACCEPT_UBER_POLICY:
      'Por favor acepte el Contrato de tratamiento de datos de Uber para continuar.',
    ACCEPT_POLICY: 'Por favor acepte la Política de privacidad para continuar.',
    ACCEPT_TERMS: 'Por favor acepte los Términos y condiciones para continuar.',
    SUCCESS_DIALOG:
      'Tienes un préstamo en proceso de validación y desembolso, en menos de <b>1 día hábil</b> lo verás reflejado en <span class="no-wrap">este portal.</span>',
    WITHOUT_PREAPPROVED:
      'Por ahora <b>no tienes un préstamo preaprobado disponible,</b> sigue usando la plataforma de Uber y gana más comisiones con tarjeta para poder acceder a este beneficio con KEO',
    WITHOUT_LOANS:
      'Por ahora <b>no tienes préstamos disponibles,</b> sigue usando la plataforma de Uber y gana más comisiones con tarjeta para poder acceder a este beneficio con KEO',
    ERROR_MINIMAL_VALUE_LOAN:
      'Debe solicitar un avance por un monto superior a {{value}}',
    ERROR_MAXIMUM_VALUE_LOAN:
      'Debe solicitar un avance por un monto inferior a {{value}}',
    ERROR_MAX_LENGTH: 'Sólo puedes ingresar máximo {{value}} caracteres',
    ERROR_MIN_LENGTH: 'Debes ingresar al menos {{value}} caracteres',
  },

  ERROR_TYPES: {
    REQUIRED: 'required',
    MAXLENGTH: 'maxlength',
    MINLENGTH: 'minlength',
    MIN: 'min',
    MAX: 'max',
  },

  ROUTES: {
    LOGIN: '/login',
    HOME: '/home',
  },
};
