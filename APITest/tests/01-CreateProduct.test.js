
import createProduct from '../models/pages/create-product'
const create_product = new createProduct()
import product_data from '../test-helpers/test-data/product-data.json'


fixture`Run Create Product API`


product_data.Products.forEach(product => {
    test(' -----  Create new product  -----', async t => {

        await create_product.CreateNewProduct(product, product_data.endpoint)
    });
});