import { t } from 'testcafe';


class DeleteProduct {
    constructor() {
        //  for API requests 
        this.axios = require('axios')
        this.fs = require("fs");
    }

    async DeleteProduct(product_id, endpoint) {
        console.log("Delete Product")
        const response = await this.axios.delete(endpoint + "product/" + product_id, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("Delete product Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)

    }

    async DeleteNonExistProduct(product_id, endpoint) {
        console.log("Delete Product")
        const response = await this.axios.delete(endpoint + "product/" + product_id, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log("Delete product Response :")
        console.log(response.data)
        await t.expect(response.status).eql(200)
        await t.expect(response.data.ok).eql(0)

    }


}
export default DeleteProduct