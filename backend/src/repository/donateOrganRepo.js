const DonatedOrgan = require("../models/DonatedOrgan");

class donateRepo{
    async createDonate(data){
        try {
            const donateOrgan = await DonatedOrgan.create(data);
            return donateOrgan;
        } catch (error) {
            console.log(error);
            throw new Error('Problem in repository');
        }
    }
}

module.exports = donateRepo