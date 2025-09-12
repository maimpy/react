import { Injectable } from '@angular/core';

export interface Painting {
  title: string;
  year: number;
  author: string;
  size: string;
  location: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  

  private painting: Painting = {
    title: 'Мона Ліза',
    year: 1503,
    author: 'Леонардо да Вінчі',
    size: '77 × 53 см',
    location: 'Лувр, Париж',
    imageUrl: 'https://th.bing.com/th/id/R.01d01f4a1ff1621cf1b5b491e06a40b1?rik=n7RxdexiMz%2bkTw&pid=ImgRaw&r=0'
  };

  getPainting(): Painting {
    return this.painting;
  }

}
