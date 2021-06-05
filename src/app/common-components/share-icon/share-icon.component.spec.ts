import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIconComponent } from './share-icon.component';

describe('ShareIconComponent', () => {
  let component: ShareIconComponent;
  let fixture: ComponentFixture<ShareIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
