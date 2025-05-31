import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {
  transform(text: any, length: number = 15): any {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  }
}
