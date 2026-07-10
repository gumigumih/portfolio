import type { ImageSource } from '../data/works/types';

export function imageSrc(image: ImageSource): string {
  return typeof image === 'string' ? image : image.src;
}
