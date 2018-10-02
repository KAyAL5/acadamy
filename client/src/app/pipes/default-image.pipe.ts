// The pipe is called default and we pass to it a default image to use if the imageUrl variable is blank.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, fallback: string): string {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
     return image;
  }

}
