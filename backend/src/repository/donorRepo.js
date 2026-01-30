const Consent = require("../models/Consent");
const DonatedOrgan = require("../models/DonatedOrgan");
const RequestedOrgan = require("../models/RequestedOrgan");
const User = require("../models/User");

class DonorRepository {

  async createDonation(data) {
    try {
        const donorUser = await User.findOne({id:donorId});
        data.address = donorUser.address ;
        data.phoneNumber = donorUser.phoneNumber;
        const donation = await DonatedOrgan.create(data);
        return donation;
    } catch (error) {
        console.log(error);
        throw new Error("Problem creating donation");
    }
  }

  async confirmDonation(donatedOrganId,donorId,consentType) {
    try {
      const organ = await DonatedOrgan.findById(donatedOrganId);
      const consent = await Consent.create({
        donorId,
        consentType,
        status : "VERIFIED"
      })
      organ.status = "AVAILABLE";
      await organ.save();
      return organ;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllRequests(data){
    try {
        const organName = data.organName;
        const bloodGroup = data.bloodGroup;
        const requests = await RequestedOrgan.find({organName,bloodGroup,status:"WAITING"});
        return requests
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

}

module.exports = DonorRepository;
