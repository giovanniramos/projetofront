import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statecase'
})
export class StatecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value.split('/').map((word) => {
      const states = 'AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO';
      const regex = new RegExp(`(${states})($)`);

      if (word.toUpperCase().match(regex)) {
        return word.toUpperCase();
      }

      return word;
    }).join('/');
  }

}
