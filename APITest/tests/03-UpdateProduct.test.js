import updateProduct from '../models/pages/update-product'
import getProduct from '../models/pages/get-product'
import createProduct from '../models/pages/create-product'
const create_product = new createProduct()
const get_product = new getProduct()
const update_product = new updateProduct()
import product_data from '../test-helpers/test-data/product-data.json'


fixture`Run Update Product API`

test(' ----- Update product -----', async t => {
    await create_product.CreateNewProduct(product_data.UpdateProduct[0], product_data.endpoint)
    await update_product.UpdateProduct(product_data.UpdateProduct[1], product_data.endpoint)
    await get_product.GetProductById(product_data.UpdateProduct[1], product_data.endpoint)
});

