import { TestBed } from '@angular/core/testing';

import { ImageDataService } from './image.service';

describe('ImageDataService', () => {
  let service: ImageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
