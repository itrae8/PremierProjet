import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentiel'
})
export class ExponentielPipe implements PipeTransform {

  transform(value: number, exponent = 2): number {
    return Math.pow(value, exponent);
  }

}
