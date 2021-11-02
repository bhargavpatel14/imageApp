import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../image';
import { ImageDataService } from '../image.service';
import { FormArray, FormControl, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ImageDataService]
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  tagList: any = [
    {description: "nature", value: 'nature'},
    {description: "scenic", value: 'scenic'},
    {description: "city", value: 'city'},
    {description: "night", value: 'night'},
    {description: "wildlife", value: 'wildlife'}
  ];
  url: any;
  msg = "";

  newImage = new Image('', '', '', [''], '', '', '', []);

  constructor(
    private imageDataService: ImageDataService,
    private route:Router,
    private formBuilder: FormBuilder,
    private elRef:ElementRef
  ) {
    this.form = this.formBuilder.group({
      tag: this.formBuilder.array([], [Validators.required]),
      url: this.formBuilder.control
    })
  }

  onTagboxChange(e: any) {
    const tags: FormArray = this.form.get('tag') as FormArray;
    if (e.target.checked) {
      tags.push(new FormControl(e.target.value));
    } else {
       const index = tags.controls.findIndex(x => x.value === e.target.value);
       tags.removeAt(index);
    }
  }

  handleFileInput(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    this.newImage.url = event.target.files[0].name;
    if(!!event.target.files[0].name){
      this.elRef.nativeElement.querySelector('.preview').style.display = "block";
    }
    else{
      this.elRef.nativeElement.querySelector('.preview').style.display = "none";
    }
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

  ngOnInit(): void {
  }

  public createNewImage(newImage:Image):void{
    newImage.tags = this.form.value.tag;
    this.imageDataService.createImage(newImage);
  }

}
