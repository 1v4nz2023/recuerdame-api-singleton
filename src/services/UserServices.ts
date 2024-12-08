import { prisma } from "../prismaClient";

class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }


  async createUser(data: { username: string; email: string, nombres: string, password:string,  rol:string, estado:string }) {
    return prisma.user.create({
      data,
    });
  }

  async updateUser(id: number, data: { username?: string; email?: string }) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}

export const userService = new UserService();
