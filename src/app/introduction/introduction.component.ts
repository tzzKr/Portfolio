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
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width > 1.9 * height) {
      this.renderer.setStyle(this.imgContainer.nativeElement, 'bottom', '0px');
    }
  
    if (width > height && width < 1.2*height) {
       
        this.renderer.setStyle(this.imgContainer.nativeElement, 'bottom', "300px");
      } else{
        this.renderer.removeStyle(this.imgContainer.nativeElement, 'bottom');

      }
  }
}
