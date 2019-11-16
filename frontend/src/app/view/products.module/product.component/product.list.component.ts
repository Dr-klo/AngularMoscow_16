import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "@common/api/Product";
import {ProductBasket} from "@service/ProductBasket";

@Component({
    templateUrl: './product.list.component.html',
    styleUrls: ['product.list.component.scss'],
})
export class ProductListComponent implements OnInit{
    private productList: Product[];
    private basket: ProductBasket;
    ngOnInit(): void {
        this.productList = [
            {id: 1, title: "Apple", description: "Delicious Red Apple", count: 12},
            {id: 2, title: "Banana", description: "Yellow Banana", count: 10},
            {id: 3, title: "Potato", description: "Real Potato from Belarus", count: 100}
        ];
        
        this.basket = new ProductBasket(null);

    }
    private add2basket(product: Product){
        
        this.basket.Add({id: product.id, title: product.title, description: product.description, count: 1});
    }
    private removeFromBasket(pId: number){
        this.basket.Remove(pId);
    }
}
