import { UserService } from "../services/User.service.js";

const userServiceInstance = new UserService();

const createUser = async (req, res) => {
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

const getUserByCpf = async (req, res) => {
  const { cpf } = req.params;
  const userByCpf = await userServiceInstance.getUserByCpfService(cpf);
  res.json({ userByCpf });
};

const depositService = async (req, res) => {
  const { cpf } = req.params;
  const { password, deposit } = req.body;
  const serviceDeposit = await userServiceInstance.depositService(
    cpf,
    password,
    deposit
  );
  res.json({ serviceDeposit });
};

const checkBalance = async (req, res) => {
  const { cpf } = req.params;
  const { password } = req.body;
  const balance = await userServiceInstance.checkBalance(cpf, password);
  res.json({ balance });
};

const deleteUser = async (req, res) => {
  const { cpf } = req.params;
  const { password } = req.body;
  const delUser = await userServiceInstance.deleteUser(cpf, password);
  res.json({ delUser });
};

export { createUser, getAllUsers, getUserByCpf, depositService, checkBalance, deleteUser };
