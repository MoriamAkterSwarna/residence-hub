const error = require("../../utils/error");
const User = require("./user.model");
const bcrypt = require('bcrypt');



const singUpDB = async (data) => {
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


const singInDB = async (data) => {
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

const getSingleUserDB = async (id) => {
    if (!id) {
        const RH_ERROR = error('Id is Required but got undefined', 400)
        throw RH_ERROR
    } else {
        const existUser = await User.findById(id).select('-password')
        if (!existUser) {
            const RH_ERROR = error('Data not found', 404)
            throw RH_ERROR
        } else {
            const response = {
                message: "Successfully data fetch",
                data: existUser

            }
            return response
        }
    }


}

const updatePasswordDB = async (id, data) => {
    const { oldPassword, newPassword, confirmPassword } = data;
    const existUser = await User.findById(id)

    // TODO: What ID was sand and the logged user ID is same / JWT

    if (!existUser) {
        const RH_ERROR = error('Data not found')
        throw RM_ERROR
    } else {
        const match = await bcrypt.compare(oldPassword, existUser.password)
        if (!match) {
            const RH_ERROR = error("Password is not correct", 400)
            throw RH_ERROR
        } else if (newPassword !== confirmPassword) {
            const RH_ERROR = error("Password doesn't match", 400)
            throw RH_ERROR
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(newPassword, salt)
            existUser.password = hashPassword
            await existUser.save()
            const response = {
                message: 'Successfully Change Password',
                status: 203
            }
            return response
        }

    }
}


const getAllUserDB = async (query) => {
    const { role, status, limit, currentPage, sortType, sortBy } = query;
    let allUserArray = await User.find()

    if (role) {
        allUserArray = allUserArray.filter(user => user.role === role)
    }
    if (status) {
        allUserArray = allUserArray.filter(user => user?.status === status)
    }

    if (sortType === "asc") {
        allUserArray.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) return 1;
            if (a[sortBy] < b[sortBy]) return -1;
            return 0;
        });
    }
    if (sortType === "des") {
        allUserArray.sort((a, b) => {
            if (b[sortBy] > a[sortBy]) return 1;
            if (b[sortBy] < a[sortBy]) return -1;
            return 0;
        });
    }

    const intLimit = parseInt(limit);
    const intPage = parseInt(currentPage);

    const skip = intPage * intLimit - intLimit;
    allUserArray = allUserArray.slice(skip, skip + intLimit);



    return allUserArray
}


const updateUserInfoDB = async (query, data) => {
    const { userId: id } = query;
    const { permanentAddress, photo, nid, email } = data;

    console.log(query, data, ' do')
    const existUser = await User.findById(id)
    if (!existUser) {
        const RH_ERROR = error('Data not fount', 404)
        throw RH_ERROR
    } else {
        existUser.permanentAddress = permanentAddress || existUser.permanentAddress,
            existUser.photo = photo || existUser.photo,
            existUser.nid = nid || existUser.nid,
            existUser.email = email || existUser.email

        const updateUser = await existUser.save()

        return updateUser

    }
}
module.exports = {
    singUpDB,
    singInDB,
    getSingleUserDB,
    updatePasswordDB,
    getAllUserDB,
    updateUserInfoDB
}