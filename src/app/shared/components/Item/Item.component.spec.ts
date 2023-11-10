/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './Item.component';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  const elementForRenderingName = 'label';

  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should renderer id', () => {
    const expectedId = '::id::';
    
    component.id = expectedId;
    fixture.detectChanges();

    expect(compiled.querySelector('input')?.id).toContain(expectedId);
  })

  it('should renderer name', () => {
    const expectedName = '::name::';
    
    component.label = expectedName;
    fixture.detectChanges();

    expect(compiled.querySelector(elementForRenderingName)?.textContent).toContain(expectedName);
  })

  it('should renderer with class pending', () => {
    fixture.detectChanges();

    expect(compiled.querySelector(elementForRenderingName)?.className).toContain('pending');
  })

  it('should change state when checked', () => {
    fixture.detectChanges();
    
    const debuged = fixture.debugElement.query(By.css('input'));

    debuged.triggerEventHandler('click');

    fixture.detectChanges();

    expect(component.isComplete).toBeTruthy();
  });

  it('should change style when checked', () => {
    fixture.detectChanges();
    
    const debuged = fixture.debugElement.query(By.css('input'));

    debuged.triggerEventHandler('click');

    fixture.detectChanges();

    expect(compiled.querySelector(elementForRenderingName)?.className).toContain('complete');
  });
});
