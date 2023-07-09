import { Component, OnInit, Renderer2, Inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit, OnDestroy {

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  private resizeListener: (() => void) | null = null;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    this.checkWindowSizeAndAdjust();
    this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
      this.checkWindowSizeAndAdjust();
    });
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  checkWindowSizeAndAdjust() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width > 1.9 * height) {
      this.renderer.setStyle(this.imgContainer.nativeElement, 'bottom', '0px');
    }
    if (width > 1.2 * height && width < 1.9*height) {
      this.renderer.setStyle(this.imgContainer.nativeElement, 'bottom', '33%');
    }
    if (width > 1.2 * height && width > 1.3*height) {
       
        this.renderer.removeStyle(this.imgContainer.nativeElement, 'bottom');
      } 
  }
}
