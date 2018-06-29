import { Component, Input, OnInit, AfterViewChecked, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'mdz-double-scroll',
  templateUrl: 'mindgaze-double-scroll.component.html'
})
export class DoubleScrollComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private static compCount = 0;
  private ourId: number;

  @Input('class')
  className: string;

  @ViewChild('scrollTarget')
  scrollTarget: ElementRef;
  @ViewChild('scrollTargetContent')
  scrollTargetContent: ElementRef;

  @ViewChild('scrollSource')
  scrollSource: ElementRef;
  @ViewChild('scrollSourceContent')
  scrollSourceContent: ElementRef;

  private resizeCallback: () => void;

  public get scrollTargetId(): string {
    return `scroll-target-${this.ourId}`;
  }

  public get scrollTargetContentId(): string {
    return `scroll-target-content-${this.ourId}`;
  }

  public get scrollSourceId(): string {
    return `scroll-source-${this.ourId}`;
  }

  constructor() {
    this.ourId = ++DoubleScrollComponent.compCount;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.resizeCallback = this.initDoubleScroll(this.scrollTargetId, this.scrollTargetContentId, this.scrollSourceId)
  }

  ngAfterViewChecked() {
    this.resizeCallback && this.resizeCallback();
  }

  initDoubleScroll(containerId1: string, contentId1: string, containerId2: string): () => void {
    const container1 = $(`#${containerId1}`)
    const container2 = $(`#${containerId2}`)
    const content1 = $(`#${contentId1}`)
    const content2 = container2.children();

    const resizeCallback = () => {
      content1.width(content2.width() || 0);

      var widthContent2 = content2.width() || 0;
      var widthContainer2 = container2.width() || 0;
      
      if (widthContent2 <= widthContainer2) {
        container1.hide();
      } else {
        container1.show();
      }
    }

    $(window).resize(resizeCallback)
    content2.resize(resizeCallback)

    container1.scroll(() => {
      container2.scrollLeft(container1.scrollLeft() || 0);
    });
    container2.scroll(() => {
      container1.scrollLeft(container2.scrollLeft() || 0);
    });

    return resizeCallback;
  }
}