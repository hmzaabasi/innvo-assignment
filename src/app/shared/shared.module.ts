import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/angular.material/material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }
