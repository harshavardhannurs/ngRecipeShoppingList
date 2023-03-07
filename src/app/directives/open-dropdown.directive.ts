import {Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector:'[appOpenDropdown]'
})

export class OpenDropdownDirective{

  clicked:boolean = false;

  constructor(private eleRef:ElementRef, private renderer:Renderer2){}

  @HostListener('click') handleClick(){
    this.clicked = !this.clicked;
    console.log('Dropdown Clicked!', this.clicked)
    if(this.clicked === true){
      this.renderer.addClass(this.eleRef.nativeElement, 'open')
    }else if(this.clicked === false){
      this.renderer.removeClass(this.eleRef.nativeElement, 'open')
    }
    
    
  }
}