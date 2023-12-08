import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavComponent]
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a link to todo page', () => {
    //W1
    // const aLink = fixture.debugElement.query(By.css('a'));
    // expect(aLink.properties['href']).toContain('/todos');


    //W2 
    // const routerLink = fixture.debugElement.query(By.directive(RouterLinkWithHref));
    // expect(routerLink.properties['href']).toContain('/todos');

    //W3 recommended
    const routerLinks = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const index = routerLinks.findIndex(de => (de.properties['href']).includes('/todos'));
    // const index = routerLinks.findIndex(de => de.attributes['href'] === '/todos');

    expect(index).toBeGreaterThan(-1);

    //W4
    // let anchorElement = fixture.nativeElement.querySelector('a');
    // expect(anchorElement.getAttribute('href')).toEqual('/todos');

    //W5
    // let anchorElement = fixture.nativeElement.querySelector('a');
    // expect(anchorElement.getAttribute('ng-reflect-router-link')).toEqual('todos');

  });
});
