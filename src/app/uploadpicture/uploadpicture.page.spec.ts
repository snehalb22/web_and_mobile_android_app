import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadpicturePage } from './uploadpicture.page';

describe('UploadpicturePage', () => {
  let component: UploadpicturePage;
  let fixture: ComponentFixture<UploadpicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadpicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadpicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
