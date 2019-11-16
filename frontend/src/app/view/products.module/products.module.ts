import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import {ProductListComponent} from "./product.component/product.list.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule,
    ],
    declarations: [
        ProductListComponent
    ],
})
export class ProductsModule {
}

