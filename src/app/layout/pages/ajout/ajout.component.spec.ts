import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutComponent } from './ajout.component';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

fdescribe('AjoutComponent', () => {
  let component: AjoutComponent;
  let fixture: ComponentFixture<AjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutComponent ],
      imports:[FormsModule,HttpClientModule,RouterModule],
      providers:[CrudService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
