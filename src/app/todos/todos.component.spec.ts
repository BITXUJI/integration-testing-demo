import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    });
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', () => {
    let service = TestBed.inject(TodoService);
    // let service = fixture.debugElement.injector.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(of([1, 2, 3]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);

  });
});
