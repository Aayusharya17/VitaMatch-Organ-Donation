const DonatedOrgan = require('../models/DonatedOrgan');
const Hospital = require('../models/Hospital');
const RequestedOrgan = require('../models/RequestedOrgan');
const User = require('../models/User');

class DoctorRepository {
    async createRequest(data){
        try {
            const doctor = await User.findById(data.doctorId);
            data.doctorName = doctor.name;
            data.address = doctor.address;
            data.hospitalId = doctor.hospitalId;
            data.phoneNumber = doctor.phoneNumber;
            const organ = await RequestedOrgan.create(data);
            return organ;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async findAllAvailable(data){
        try {
            const organs = await DonatedOrgan.find({organName:data.organName , bloodGroup:data.bloodGroup , status:"AVAILABLE"});
            return organs;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = DoctorRepository;