const { JWT_SECRET } = require("../config/serverConfig");
const DonorService = require("../services/donorService");
const jwt = require('jsonwebtoken');
const donorServ = new DonorService;

const createDonation = async (req,res) => {
    try {
        if(!req.user){
            throw new Error('User not logged-in !!');
        }
        const donorId = req.user.id;
        const role = req.user.role;
        const donateOrgan = await donorServ.createDonation({
            organName,bloodGroup,donorId,role
        })
        return res.status(201).json({
            data : donateOrgan,
            success:true,
            messgae:'Successfully added organ for donation',
            err : {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succes : false,
            message : 'Request Failed',
            message : 'Not able to add organ for donation',
            err : error
        })
    }
}

const confirmDonation = async(req,res) => {
    try {
        const donatedOrganId = req.body.organId;
        const consentType = req.body.consentType;
        const donorId = req.user.id;
        const confirmed = await donorServ.confirmDonation(donatedOrganId,donorId,consentType);
        return res.status(201).json({
            data : confirmed,
            success:true,
            messgae:'Successfully confirmed organ for donation',
            err : {}
        })

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findAllRequests = async (req,res) => {
    try {
        const bloodGroup = req.body.bloodGroup;
        const organName = req.body.organName;
        const requests = await donorServ.findAllRequests({bloodGroup,organName})
        return requests;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const confirmAllocation = async (req, res) => {
  const allocation = await DonorService.confirmAllocation(req.params.id);
  res.json({ success: true, allocation });
};

const rejectAllocation = async (req, res) => {
  const allocation = await DonorService.rejectAllocation(req.params.id);
  res.json({ success: true, allocation });
};

module.exports = {
    createDonation,
    confirmDonation,
    findAllRequests,
    rejectAllocation,
    confirmAllocation
}