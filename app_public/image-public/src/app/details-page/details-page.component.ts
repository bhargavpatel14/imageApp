import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../image.service';
import { Image } from '../image';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[ImageDataService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private imageDataService : ImageDataService,
    private route : ActivatedRoute,private router: Router) { }

  image:Image;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.imageDataService.getSingleImage(params['imageid'])
      }))
      .subscribe((newImage : Image) => {
        this.image = newImage;
      });
  }

  public deleteMobile(imageid: string):void{
    this.imageDataService.deleteImage(imageid);
  }

  public editMobile(imageid: string):void{
    this.router.navigate(['edit',imageid]);
  }

}
