import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleScrollComponent } from './mindgaze-double-scroll.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DoubleScrollComponent
    ],
    exports: [
        CommonModule,
        DoubleScrollComponent,
    ]
})
export class DoubleScrollModule {

}