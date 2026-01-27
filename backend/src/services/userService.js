const userRepository = require("../repository/userRepo");

class userService {
    constructor(){
        this.userRepository = new userRepository;
    }

    async createUser(data){
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error in user service');
        }
    }
}

module.exports = userService;