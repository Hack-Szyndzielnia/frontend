import { Component, OnInit, DoCheck, Input, ViewChild , AfterViewInit, ElementRef, Renderer2   } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, tap, map, switchMap, merge, filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-trail',
  templateUrl: './edit-trail.component.html',
  styleUrls: ['./edit-trail.component.scss']
})
export class EditTrailComponent implements OnInit, DoCheck, AfterViewInit  {

    @Input()
    showValidations;
    showEditMess : boolean = false;
    addTrailForm: FormGroup;
    trail_name: FormControl;
    lat_start: FormControl;
    long_start: FormControl;
    lat_end: FormControl;
    long_end: FormControl;
    
    latitude = 49.822377;
    longitude = 19.058384;
    mapTypeId = 'terrain';
    markers = [];
    saveAttr : boolean = true;
    private counter : number = 1;
    

  constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log('id', params['id\">'] );
        });
        
   }

  addMarker(lat: number, lng: number) {
        if(this.counter<3){
            if(this.counter==1){
                this.lat_start.setValue(lat);
                this.long_start.setValue(lng);
            }else if(this.counter==2){
                this.lat_end.setValue(lat);
                this.long_end.setValue(lat);
            }
            
            this.markers.push({ lat, lng, alpha: 0.4 });
        }
            
        this.counter++;
    }
    
    
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }
    
  createFormControls() {
    this.trail_name = new FormControl('', [Validators.required]);
    this.lat_start = new FormControl('', [Validators.required]);
    this.long_start = new FormControl('', [Validators.required]);
    this.lat_end = new FormControl('', [Validators.required]);
    this.long_end = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.addTrailForm = new FormGroup({
      trail_name: this.trail_name,
      lat_start: this.lat_start,
      long_start: this.long_start,
      lat_end: this.lat_end,
      long_end: this.long_end,
    });
  }

  ngDoCheck() {
        
        if (this.showValidations) {
          this.addTrailForm.controls['trail_name'].markAsTouched();
          this.addTrailForm.controls['lat_start'].markAsTouched();
          this.addTrailForm.controls['long_start'].markAsTouched();
          this.addTrailForm.controls['lat_end'].markAsTouched();
          this.addTrailForm.controls['long_end'].markAsTouched();
        } else if (this.showValidations === false) {
          this.addTrailForm.controls['trail_name'].markAsUntouched();
          this.addTrailForm.controls['lat_start'].markAsTouched();
          this.addTrailForm.controls['long_start'].markAsTouched();
          this.addTrailForm.controls['lat_end'].markAsTouched();
          this.addTrailForm.controls['long_end'].markAsTouched();
        }
        
        if(this.addTrailForm.status == 'VALID'){
            this.saveAttr = false;
        }
        
  }
  
    ngAfterViewInit() {
    }
  
    saveItem(){
        console.log( 'save to database' );
        console.log( this.addTrailForm.value )
        
    }

}
