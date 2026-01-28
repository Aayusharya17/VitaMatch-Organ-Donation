const RequestedOrgan = require('../models/RequestedOrgan');

class requestOrgan {
    async createRequest(data){
        try {
            const requestOrgan = await RequestedOrgan.create(data);
            return requestOrgan;
        } catch (error) {
            console.log(error)
            throw new Error('Problem in repository')
        }
    }
}

module.exports = requestOrgan;