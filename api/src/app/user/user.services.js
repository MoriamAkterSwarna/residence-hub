const error = require("../../utils/error");
const User = require("./user.model");
const bcrypt = require('bcrypt');



const SingUpService = async (data) => {
    const { name, phoneNumber, password } = data;

    const existData = await User.findOne({ phoneNumber })
    if (!existData) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            phoneNumber,
            password: hashPassword
        })

        const userData = await newUser.save()

        console.log(userData.password, ' cls')
        const response = {
            message: 'User Created Successfully!',
            status: 201,
            data: {
                id: userData?._id,
                name: userData?.name,
                phoneNumber: userData?.phoneNumber
            }
        }
        return response
    } else {
        const RH_Error = error('User Already Exist', 400)
        throw RH_Error
    }



}


const SingInService = async (data) => {
    const { phoneNumber, password } = data;
    const isExistUser = await User.findOne({ phoneNumber })
    if (!isExistUser) {
        const RH_ERROR = error('The Phone Number Is Not Registered.', 404)
        throw RH_ERROR
    } else {
        const match = await bcrypt.compare(password, isExistUser.password);
        if (!match) {
            const RH_ERROR = error('Password Is Not Valid', 401)
            throw RH_ERROR
        } else {
            const response = {
                message: "User logged in successfully!",
                status: "200",
                data: {
                    id: isExistUser._id,
                    phoneNumber: isExistUser.phoneNumber,
                    name: isExistUser.name
                }
            }

            return response
        }
    }
}


module.exports = {
    SingUpService,
    SingInService
}