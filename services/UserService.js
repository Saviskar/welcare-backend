import * as userRepository from "../repositories/UserRepository.js";

export const getUsers = async () => {
  const users = await userRepository.findAll();
  return users;
};

export const logInUser = async (id, pwd) => {
  let user = await userRepository.findByIdAndPwd(id, pwd);

  user = {
    id: user.userId,
    email: user.email,
  };

  return user;
};
