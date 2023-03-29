import {ValidationErrors} from "@angular/forms";

const DEFAULT_ERROR_MESSAGES: any = {
  required: 'This field is required',
  minlength: `This field requires min {requiredLength} of characters`,
  maxlength: `This field requires max {requiredLength} of characters`,
  max: `Value must be smaller then {max}`,
  min: `Value must be greeter then {min}`,
  email: 'Invalid email format',
}

export class ValidationMessagesParser {
  errors: ValidationErrors | null;
  customMessages: Record<string, any> = {}

  constructor(errors: ValidationErrors | null, customMessages = {}) {
    this.errors = errors;
    this.customMessages = customMessages;
  }

  get errorMessages() {
    return {
      ...DEFAULT_ERROR_MESSAGES,
      ...this.customMessages
    }
  }

  getErrorMessages() {
    if (!this.errors) {
      return ''
    }

    return Object.entries(this.errors)
      .map(this.optionsMapFn.bind(this))
      .join(', ')
  }

  optionsMapFn(item: any) {
    const [key, options] = item;
    return this.replaceOptions(key, options)
  }

  replaceOptions(key: string, options: any = {}) {
    return this.errorMessages[key]?.replace(/{([^{}]*)}/g, this.replaceFn(options)) || ''
  }

  replaceFn(options: any = {}) {
    return (value: string, key: string) => options[key] || ''
  }
}
