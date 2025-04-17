import user from '../models/User.js'

export const getUsers = async () =>{
    const users = await user.getUsers();
    return users;
}