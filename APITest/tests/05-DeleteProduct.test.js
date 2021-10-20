import deleteProduct from '../models/pages/delete-product'
import createProduct from '../models/pages/create-product'
const create_product = new createProduct()
const delete_product = new deleteProduct()
import product_data from '../test-helpers/test-data/product-data.json'

fixture`Run Delete Product API`

/// Delete one product 
test(' -----  delete product  -----', async t => {
    await create_product.CreateNewProduct(product_data.DeleteProducts[0], product_data.endpoint)
    await delete_product.DeleteProduct(product_data.DeleteProducts[0], product_data.endpoint)
});
/// delete multiple  products 
product_data.DeleteProducts.forEach(product => {
    test(' -----  delete  multiple products  -----', async t => {
        await create_product.CreateNewProduct(product, product_data.endpoint)
        await delete_product.DeleteProduct(product, product_data.endpoint)
    });
});

// Delete unexist product
test(' -----  delete product  -----', async t => {

    await delete_product.DeleteNonExistProduct(product_data.deleteNonExist, product_data.endpoint)
});