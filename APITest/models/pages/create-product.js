import { t } from 'testcafe';


class CreateProduct {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async CreateNewProduct(product_body, endpoint) {
        console.log("Create product ")
        const response = await this.axios.post(endpoint + "product", JSON.parse(JSON.stringify(product_body)), {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("Create new product Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(response.data).contains(JSON.parse(JSON.stringify(product_body)))
        return response.data.id
    }



}
export default CreateProduct