import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'integration-testing-demo'`, () => {
    expect(component.title).toEqual('integration-testing-demo');
  });

  it('should have a router outlet', () => {
    const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routerOutlet).not.toBeNull();
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