import productPrice from '../models/pages/price-engine'
const product_price = new productPrice()
import getProduct from '../models/pages/get-product'
const get_product = new getProduct()

import price_data from '../test-helpers/test-data/price-engine-data.json'
import product_data from '../test-helpers/test-data/product-data.json'

fixture`Run Get Product Price API`

test(' -----  Get Product Price -----', async t => {

    let product_details = await get_product.GetProductDetailsById(price_data.Product, product_data.endpoint)
    await product_price.GetProductPrice(price_data.Product, price_data.endpoint, product_details)
});
