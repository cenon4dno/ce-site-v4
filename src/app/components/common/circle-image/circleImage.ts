import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-image',
  styleUrls: ['./circleImage.style.scss'],
  templateUrl: './circleImage.template.html'
})

export class CircleImageComponent {
  @Input() image: string;
  constructor() {}
}
