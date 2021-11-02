import { Injectable } from '@angular/core';
import { Image } from './image';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  private imagesUrl = 'http://localhost:3000/api/imagelist';

  constructor(private http: HttpClient, private route: Router) {}

  public getPhones(): Promise<Image[]>{
    return this.http
      .get(this.imagesUrl)
      .toPromise()
      .then(response => response as Image[])
      .catch(this.handleError);
  }

  public getSinglePhone(imageId: String): Promise<Image>{
    return this.http
      .get(this.imagesUrl + '/' + imageId)
      .toPromise()
      .then(response => response as Image)
      .catch(this.handleError);
  }

  public createPhone(newPhone:Image): Promise<Image>{
    return this.http
      .post(this.imagesUrl, newPhone)
      .toPromise()
      .then(response => {
        response as Image
        this.route.navigate(['/imagelist']);
      })
      .catch(this.handleError);
  }

  public editPhone(newPhone:Image, imageId: String): Promise<Image>{
    return this.http
      .put(this.imagesUrl + '/' + imageId, newPhone)
      .toPromise()
      .then(response => {
        this.route.navigate(['/imagelist']);
      })
      .catch(this.handleError);
  }

  public deletePhone(imageId: String): Promise<Image>{
    return this.http
      .delete(this.imagesUrl + '/' + imageId)
      .toPromise()
      .then(response => {
        this.route.navigate(['/imagelist']);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}
