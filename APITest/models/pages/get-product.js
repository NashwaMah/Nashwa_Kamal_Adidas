import { t } from 'testcafe';


class GetProduct {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");

    }

    async GetallProducts(product_body, endpoint) {
        console.log("Get All Products ")
        const response = await this.axios.get(endpoint + "product/", {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("get All product response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(response.data[response.data.length - 1].id).contains(JSON.parse(JSON.stringify(product_body.id)))

    }

    async GetProductById(product, endpoint) {
        console.log("Get product by ID ")
        const response = await this.axios.get(endpoint + "product/" + product.id, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("get product by id Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(response.data).contains(JSON.parse(JSON.stringify(product)))

    }

    async GetNonExistProductById(product, endpoint) {
        console.log("Get product by ID ")
        const err = await this.axios.get(endpoint + "product/" + product.id, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).catch(err => err);
        err instanceof TypeError; // true
        console.log(err.message)
        await t.expect(err.message).contains("500")

    }


    async GetProductDetailsById(product, endpoint) {
        console.log("Get product by ID ")
        const response = await this.axios.get(endpoint + "product/" + product.id, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("get product by id Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        return response.data

    }

}
export default GetProduct