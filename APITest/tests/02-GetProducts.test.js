import getProduct from '../models/pages/get-product'
import createProduct from '../models/pages/create-product'
const create_product = new createProduct()
const get_product = new getProduct()
import product_data from '../test-helpers/test-data/product-data.json'


fixture`Run Get Product API`

test(' -----  get all products -----', async t => {
    await create_product.CreateNewProduct(product_data.GetAllProducts, product_data.endpoint)
    await get_product.GetallProducts(product_data.GetAllProducts, product_data.endpoint)
});

test(' -----  get product by ID  -----', async t => {

    await create_product.CreateNewProduct(product_data.GetProduct, product_data.endpoint)
    await get_product.GetProductById(product_data.GetProduct, product_data.endpoint)
});

// get product not exist

test(' -----  get product not exist by ID  -----', async t => {

    await get_product.GetNonExistProductById("12", product_data.endpoint)
});