import { UserService } from "../services/User.service.js";

const userServiceInstance = new UserService();

const newUser = async (req, res) => {
  const { first_name, last_name, cpf, agency, account, password, balance } =
    req.body;
  const newUser = await userServiceInstance.createUserService(
    first_name,
    last_name,
    cpf,
    agency,
    account,
    password,
    balance
  );
  res.status(201).json({ newUser });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userServiceInstance.getAllUsersService();
  res.json({ allUsers });
};
