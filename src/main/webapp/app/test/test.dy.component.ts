import { Component, ViewChild } from '@angular/core';
import { SharkToastrService } from '@ntesmail/shark-angular2';

@Component({
     selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    constructor(
        private sharkToastrService: SharkToastrService
    ) { }
     //  tree配置
    @ViewChild('tree') treeDirective: any;//异步加载
};
