import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionService {
  private scrollPosition: [number, number] = [0, 0];

  setScrollPosition(position: [number, number]): void {
    this.scrollPosition = position;
  }

  getScrollPosition(): [number, number] {
    return this.scrollPosition;
  }
}

