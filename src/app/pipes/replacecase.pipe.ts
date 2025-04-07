import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacecase'
})
export class ReplacecasePipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
    if (!value) {
      return value;
    }

    const regex = new RegExp(regexValue, 'g');

    return value.replace(regex, replaceValue);
  }

}
