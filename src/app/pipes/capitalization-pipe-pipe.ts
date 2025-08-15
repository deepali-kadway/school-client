import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizationPipe',
  standalone: false
})
export class CapitalizationPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
