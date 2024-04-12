import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCaseToTitleCase',
})
export class SnakeCaseToTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
