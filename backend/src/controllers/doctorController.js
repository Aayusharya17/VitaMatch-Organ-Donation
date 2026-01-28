const { JWT_SECRET } = require("../config/serverConfig");
const doctorService = require("../services/doctorService");
const jwt = require('jsonwebtoken');

const doctorServ = new doctorService;

const requestedOrgan = async (req,res) => {
    try {
        const organName = req.body.organName ; 
        const bloodGroup = req.body.bloodGroup;
        const token = req.headers['x-access-token'];
        if(!token){
             throw new Error('Token Not Found');
        }

        const decoded = jwt.verify(token,JWT_SECRET);
        const userId = decoded.id;
        const role=decoded.role;

        const requestOrgan = await doctorServ.requestOrgan({
            organName,bloodGroup,userId,role
        });
        return res.status(201).json({
            data : requestOrgan,
            succes : true,
            message : 'Requested Successfully',
            err : {}
        })
    }
    catch(error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            succes : false,
            message : 'Request failed',
            err : error
        })
    }
}

module.exports = {
    requestedOrgan
}