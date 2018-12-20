import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RegionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get the regions', () => {
    const dummyRegions = {
      "regions": {
        "alsace": true,
        "aquitaine": undefined,
      }
    };

    const req = httpMock.expectOne(component.url);
    expect(req.request.method).toBe("GET");
    req.flush(dummyRegions);

    expect(component).toBeTruthy();
    expect(component.regions).toEqual(["alsace", "aquitaine"]);
    expect(component.data).toEqual(dummyRegions);
    expect(component.data.regions.alsace).toEqual(true);
  });

  it('should not get the regions', () => {
    

    const req = httpMock.expectOne(component.url);
    expect(req.request.method).toBe("GET");
    req.flush({}, { status: 404, statusText: 'not found'});

    expect(component).toBeTruthy();
    expect(component.regions).toEqual(undefined);
    expect(component.status).toEqual(404);
  });
});
