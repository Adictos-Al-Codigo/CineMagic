import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreMiPage } from './sobre-mi.page';

describe('SobreMiPage', () => {
  let component: SobreMiPage;
  let fixture: ComponentFixture<SobreMiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SobreMiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
