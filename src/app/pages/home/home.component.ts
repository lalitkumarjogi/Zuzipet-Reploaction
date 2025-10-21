import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

   slides = [
    { image: 'https://anavila.com/wp-content/uploads/ete-new.webp', text: 'Slide 1 Text' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDIOSZ-zWLf-O5zK8WH5WkEjTsxMicaRblw&s', text: 'Slide 2 Text' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqN4n5fSvY5TJNjKnharlinWTggcl3KNNhg&s', text: 'Slide 3 Text' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpaoKT93C8hjH5ztI5cr1gCXmy0Nz8zt6VQ&s', text: 'Slide 4 Text' }
  ];
 currentIndex = 0;
  intervalId: any;


  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        })
      }, 3000);
    });
  }
  
  
  ngOnDestroy(): void {
        clearInterval(this.intervalId);

  }
}
