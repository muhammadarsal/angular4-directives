import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor:	 string = 'transparent';
  @Input() highlightColor: string = 'blue';
  /*
  	property 'backgroundColor' of this directive will be bound to the 'style.backgroundColor'
  	of the hosting element
  */
  @HostBinding('style.backgroundColor') backgroundColor: string;

  /*
	  Angular is not limited to running in a browser. For example, it also 
	  works with service works where if you want to change the DOM as we did
	  in the basic highlight by accessing native elements and their properties,
	  we might get error in some circumstances. Renderer is better option to
		use in such cases
	*/
  ngOnInit() {
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	this.backgroundColor = this.defaultColor;
  }

  /*
  	HostListener is a convenient way of listening to events of the element
  	the directive sits upon. We can also listen to custom events
  */
	@HostListener('mouseenter') mouseover(eventData: Event) {
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	this.backgroundColor = this.highlightColor;
	}
	
	@HostListener('mouseleave') mouseleave(eventData: Event) {
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');		
  	this.backgroundColor = this.defaultColor;
	}
}
