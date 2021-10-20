import { t } from 'testcafe';


class ProductPrice {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async  GetProductPrice(product_body,endpoint, product_details) {
        console.log("Get Product Price ")
        console.log(product_body)
        const response = await this.axios.get(endpoint +"product/" + product_body.id ,{
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'accept-language':product_body.acceptlanguage
            }
        });
        console.log("Get Product Price response:")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(product_details).contains(response.data)
    } 

}
export default ProductPrice