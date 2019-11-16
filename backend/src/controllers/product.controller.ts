import {
    Body,
    CurrentUser,
    Delete,
    ForbiddenError,
    Get,
    JsonController,
    NotFoundError,
    Param,
    Post,
    Put,
    QueryParam,
} from 'routing-controllers';
import {Product} from "@common/api/Product";
import {ProductBasket} from "@module/ProductBasket";

@JsonController('/products')
export class ProductController {
    private storeList: Product[] = [
        {id: 1, title: "Apple", description: "Delicious Red Apple", count: 12},
        {id: 2, title: "Banana", description: "Yellow Banana", count: 10},
        {id: 3, title: "Potato", description: "Real Potato from Belarus", count: 100}
    ];
    @Get()
    public async getList(
    ) {
       return this.storeList;
    }

    @Post('/:id')
    public async getOne(
        @Param('id') id: string,
        @Body() product: Product
    ) {
        // this is only for demonstartion.
        var basket = new ProductBasket(null);
        basket.Add(product);
    }
}
