import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization',
  standalone: false
})
export class CapitalizationPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    
    // Capitalize the first letter of each word
    return value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  }

}
