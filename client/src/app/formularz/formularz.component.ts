import { Component, OnInit, DoCheck, Input, ViewChild , AfterViewInit, ElementRef, Renderer2   } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, tap, map, switchMap, merge, filter } from 'rxjs/operators';


@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, DoCheck, AfterViewInit  {
   
   @Input()
    showValidations;
    showAdd : boolean =  false;
    showEditMess : boolean = false;
    
    wholeForm: FormGroup;
    first_name: FormControl;
    
    
    @ViewChild("lista") listaEl: ElementRef; 
    
    constructor(private renderer:Renderer2){}
  
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }
    
  createFormControls() {
    this.first_name = new FormControl('', [Validators.required]);
    
  }

  createForm() {
    this.wholeForm = new FormGroup({
      first_name: this.first_name
    });
  }

  ngDoCheck() {
        
        if(this.first_name.status == 'VALID'){
           this.showAdd = true; 
        }else{
            this.showAdd = false;
        }

        if (this.showValidations) {
          this.wholeForm.controls['first_name'].markAsTouched();
        } else if (this.showValidations === false) {
          this.wholeForm.controls['first_name'].markAsUntouched();
          this.showAdd = true;

        }
        
  }
  
    ngAfterViewInit() {
       //this.listaEl.appendChild('<li>aa</li>')
       //console.log(this.listaEl)
    }
  
    add(firstName){
        
        //create the DOM element 
        let li=this.renderer.createElement('li');
        li.contentEditable = true;
        
        //create the DOM element 
        let iconEdit =this.renderer.createElement('i');
        iconEdit.className = 'pbi-icon-mini pbi-pencil';
        iconEdit.onclick = (event) => {
            this.showEditMess = true;
            setTimeout( () => { this.showEditMess = false; } ,1000 );
        }
        
        //create the DOM element 
        let iconRemove =this.renderer.createElement('i');
        iconRemove.className = 'pbi-icon-mini pbi-delete-circle';
        iconRemove.onclick = (event) => {
            
            const elemVal = event.target.parentElement.innerText;
            let key = 0;
            
            for(let item of this.listaEl.nativeElement.childNodes){
                if(elemVal === item.innerText){
                    this.listaEl.nativeElement.removeChild(this.listaEl.nativeElement.childNodes[key]) 
                }
                key++;
            }
            
        }
        
        
        //create text for the element
        const text = this.renderer.createText(firstName);

        //append text to li element
        this.renderer.appendChild(li, text);
        
        //append icon to li element
        this.renderer.appendChild(li, iconEdit);
        
        //append icon to li element
        this.renderer.appendChild(li, iconRemove);
        
        //append li to UL
        this.renderer.appendChild(this.listaEl.nativeElement,li);
        
    }
    
}
