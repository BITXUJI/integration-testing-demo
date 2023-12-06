import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class RouterStub {
  navigate(params: any) { }
}
// class ActivatedRouteStub {
//   params: Observable<any> = of({});
// }
class ActivatedRouteStub {
  private subject = new BehaviorSubject({});  // import BehaviorSubject from 'rxjs'
  push(value: any) {
    this.subject.next(value);
  }
  get params() {
    return this.subject.asObservable();
  }
}



describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;

  });

  it('should redirect the user to the users page after saving', () => {
    fixture.detectChanges();
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
  it('should navigate the user to the not found page when an invalid user id is passed', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    // let route: ActivatedRouteStub = TestBed.inject(ActivatedRoute);
    // route.params = of({ id: 0 });
    let route = TestBed.inject(ActivatedRoute) as any as ActivatedRouteStub;
    route.push({ id: 0 });
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
