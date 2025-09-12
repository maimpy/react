import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yearFormat', standalone: true })
export class YearFormatPipe implements PipeTransform {
  transform(value: number): string {
    return `${value} рік`;
  }
}
