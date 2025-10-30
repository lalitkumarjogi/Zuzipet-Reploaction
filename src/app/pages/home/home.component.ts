import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

   
  slides = [
    {
      image: 'https://media.istockphoto.com/id/1344954298/photo/family-with-dog-in-the-car.jpg?s=612x612&w=0&k=20&c=anIzsubkI7wzUiSHC_gUIVyJuSX2KXJ1-Lu5c25CCzA=',
      title: 'Explora el Mundo',
      subtitle: 'Descubre lugares increíbles',
      paragraph: 'Vive experiencias únicas en los destinos más espectaculares del planeta'
    },
    {
      image: 'assets/dogs.jpg',
      title: 'Naturaleza Salvaje',
      subtitle: 'Conecta con lo esencial',
      paragraph: 'Sumérgete en la belleza de paisajes vírgenes y bosques milenarios'
    },
    {
      image: 'https://albertofreelance.com/img/slider-vertical/slider3.webp',
      title: 'Paraíso Tropical',
      subtitle: 'Tu escape perfecto',
      paragraph: 'Relájate en las playas más hermosas bajo el sol del Caribe'
    },
    {
      image: 'https://albertofreelance.com/img/slider-vertical/slider4.webp',
      title: 'Horizonte Infinito',
      subtitle: 'Libertad sin límites',
      paragraph: 'Déjate llevar por las olas y siente la inmensidad del océano'
    }
  ];

  sliceCount = Array(5).fill(0);
  currentSlide = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateBackgroundSize();
    this.showSlide(0);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateBackgroundSize();
  }

  updateBackgroundSize() {
    const slices = this.el.nativeElement.querySelectorAll('.slice');
    const isMobile = window.innerWidth <= 768;
    const visibleCount = isMobile ? 3 : 5;
    const size = `${visibleCount * 100}% 100%`;

    slices.forEach((slice: HTMLElement) => {
      this.renderer.setStyle(slice, 'backgroundSize', size);
    });
  }

  showSlide(index: number) {
    const slices = this.el.nativeElement.querySelectorAll('.slice');
    const contentOverlay = this.el.nativeElement.querySelector('#content');
    const titleEl = this.el.nativeElement.querySelector('#title');
    const subtitleEl = this.el.nativeElement.querySelector('#subtitle');
    const paragraphEl = this.el.nativeElement.querySelector('#paragraph');

    const slide = this.slides[index];

    // Reset slice images
    slices.forEach((slice: HTMLElement) => {
      this.renderer.setStyle(slice, 'backgroundImage', `url('${slide.image}')`);
      this.renderer.removeClass(slice, 'active');
    });

    // Hide text
    this.renderer.removeClass(contentOverlay, 'show');

    setTimeout(() => {
      slices.forEach((slice: HTMLElement) => {
        this.renderer.addClass(slice, 'active');
      });

      setTimeout(() => {
        titleEl.textContent = slide.title;
        subtitleEl.textContent = slide.subtitle;
        paragraphEl.textContent = slide.paragraph;
        this.renderer.addClass(contentOverlay, 'show');

        setTimeout(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
          this.showSlide(this.currentSlide);
        }, 3000);
      }, 2100);
    }, 100);
  }



  
  
  
}
