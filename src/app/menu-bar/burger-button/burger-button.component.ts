import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
// @ts-ignore
import animationData from './burgger.json';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.css']
})
export class BurgerButtonComponent {
  options: any;
  // @ts-ignore
  private animationItem: AnimationItem;

  constructor() {
    this.options = {
      animationData: animationData,
      autoplay: false,
      loop: false
    };
  }

  onAnimationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  playAnimation(): void {
    this.animationItem.play();
  }

  pauseAnimation(): void {
    this.animationItem.pause();
  }

  stopAnimation(): void {
    this.animationItem.stop();
  }

  goToAndStop(frame: number, isFrame: boolean): void {
    this.animationItem.goToAndStop(frame, isFrame);
  }

  goToAndPlay(frame: number, isFrame: boolean): void {
    this.animationItem.goToAndPlay(frame, isFrame);
  }

}
