import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ImageDataService } from '../image.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [ImageDataService]
})
export class HomeListComponent implements OnInit {

  images: Image[];
  constructor(private imageService: ImageDataService ) { }

  private getImages() : void {
    this.imageService
      .getImages()
      .then((images: Image[]) => {
        this.images = images.map(image => {
          return image;
        });
      });
  }

  ngOnInit(): void {
    this.getImages();
  }

}
