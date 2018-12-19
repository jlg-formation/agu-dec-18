import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.match(/.{1,2}/g).join(' ');
  }

}
