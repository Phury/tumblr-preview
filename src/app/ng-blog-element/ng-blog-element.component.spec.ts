import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBlogElementComponent } from './ng-blog-element.component';

describe('NgBlogElementComponent', () => {
  let component: NgBlogElementComponent;
  let fixture: ComponentFixture<NgBlogElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBlogElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBlogElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
