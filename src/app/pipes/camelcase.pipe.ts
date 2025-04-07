import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value.split(' ').map((word) => {
      const words = 'E|DE|DA|DO|DAS|DOS';
      const regex = new RegExp(`(^|\\W)(${words})($|\\W)`);

      if (word.toUpperCase().match(regex)) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');
  }

}
