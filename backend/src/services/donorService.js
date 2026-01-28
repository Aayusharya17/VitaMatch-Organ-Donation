const User = require("../models/User");
const donateRepo = require("../repository/donateOrganRepo");
const userRepository = require("../repository/userRepo");

class donorService {
    constructor(){
        this.userRepository = new userRepository
        this.donateRepo = new donateRepo
    }

    async createDonation(data) {
        try {
          const { organName, bloodGroup, role, userId } = data;
    
          if (role === "DONOR") {
            return await this.donateRepo.createDonate({
              organName,
              bloodGroup,
              donor: "User",
              donorId: userId,
            });
          }
    
          const doctorObject = await User.findById(userId).select("hospitalId");
    
          if (!doctorObject) {
            throw new Error("User not found");
          }
    
          return await this.donateRepo.createDonate({
            organName,
            bloodGroup,
            donor: "Hospital",
            donorId: doctorObject.hospitalId,
          });
        } catch (error) {
          console.log(error);
          throw error;
        }
    }
}

module.exports = donorService;