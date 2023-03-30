import { ValidationErrors } from '@angular/forms';
import { DEFAULT_ERROR_MESSAGES } from '../ts/consts';
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ValidationMessagesService {
  customMessages: Record<string, any> = {};

  get errorMessages() {
    return {
      ...DEFAULT_ERROR_MESSAGES,
      ...this.customMessages,
    };
  }

  public setCustomMessages(messages: any): void {
    this.customMessages = messages;
  }

  getErrorMessages(errors: ValidationErrors | null) {
    if (!errors) {
      return '';
    }

    return Object.entries(errors).map(this.optionsMapFn.bind(this)).join(', ');
  }

  optionsMapFn(item: any) {
    const [key, options] = item;
    return this.replaceOptions(key, options);
  }

  replaceOptions(key: string, options: any = {}) {
    return (
      this.errorMessages[key]?.replace(
        /{([^{}]*)}/g,
        this.replaceFn(options)
      ) || ''
    );
  }

  replaceFn(options: any = {}) {
    return (value: string, key: string) => options[key] || '';
  }
}
