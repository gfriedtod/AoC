import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSerachBarComponent } from './mini-serach-bar.component';

describe('MiniSerachBarComponent', () => {
  let component: MiniSerachBarComponent;
  let fixture: ComponentFixture<MiniSerachBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniSerachBarComponent]
    });
    fixture = TestBed.createComponent(MiniSerachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
