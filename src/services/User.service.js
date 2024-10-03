import { UserEntity } from "../entities/user.entity.js";
import { ERRORS, SUCESS } from "../shared/user.message.js";

class UserService {
  async createUserService(
    first_name,
    last_name,
    cpf,
    agency,
    account,
    password
  ) {
    try {
      await UserEntity.sync();
      const verifyUserExists = await UserEntity.findOne({
        where: {
          cpf,
          password,
        },
      });
      if (verifyUserExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const newUser = await UserEntity.create({
        first_name,
        last_name,
        cpf,
        agency,
        account,
        password,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return error;
    }
  }

  async getAllUsersService() {
    try {
      const allUsers = await UserEntity.findAll();
      return allUsers;
    } catch (error) {
      return error;
    }
  }

  async getUserByCpfService(cpf) {
    try {
      const userByCpf = await UserEntity.findOne({
        where: {
          cpf,
        },
      });
      if (!userByCpf) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return userByCpf;
    } catch (error) {
      return error;
    }
  }

  async depositService(cpf, password, deposit) {
    try {
      const verifyCpfAndPassword = await UserEntity.findOne({
        where: {
          cpf,
          password,
        },
      });
      if (!verifyCpfAndPassword) {
        return `${ERRORS.CPF_PASSWORD_INCORRET}`;
      }
      const updateBalance = await UserEntity.increment(
        { balance: deposit },
        {
          where: {
            cpf,
          },
        }
      );
      return `${SUCESS.DEPOSIT}`;
    } catch (error) {
      return error;
    }
  }

  async checkBalance(cpf, password) {
    try {
      const verifyCpfAndPassword = await UserEntity.findOne({
        where: {
          cpf,
          password,
        },
      });
      if (!verifyCpfAndPassword) {
        return `${ERRORS.CPF_PASSWORD_INCORRET}`;
      }
      const balance = await UserEntity.balance;
      return `O Seu saldo é de: R$${balance}`;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(cpf, password) {
    try {
      const verifyCpfAndPassword = await UserEntity.findOne({
        where: {
          cpf,
          password,
        },
      });
      if (!verifyCpfAndPassword) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const delUser = await UserEntity.destroy({
        where: {
          cpf,
        },
      });
      return `${SUCESS.DELETED}`;
    } catch (error) {
      return error;
    }
  }
}

export { UserService };
