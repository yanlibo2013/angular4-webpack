import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
/***********components***************/
import { TestComponent } from './test.dy.component';

const routes = [
    { path: '', component: TestComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes)
    ],
    declarations: [TestComponent]
})
export class TestModule { }