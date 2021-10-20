import { t } from 'testcafe';


class UpdateProduct {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async UpdateProduct(product_body, endpoint) {
        console.log("Update Product by ID ")
        console.log(product_body)
        const response = await this.axios.put(endpoint + "product/" + product_body.id, JSON.parse(JSON.stringify(product_body)), {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("Update  product response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
    }



}
export default UpdateProduct