import { Component, ElementRef, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control', //host element
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) lable!: string;
  @Input({ required: true }) labelForId!: string; // the id of the input

  private el = inject(ElementRef);

  onClick = () => {
    console.log('Clicked!');
    console.log(this.el);
  };
}
