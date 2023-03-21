import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateUserDTO, WithdrawUserDTO } from './dto';

@Injectable()
export class UsersService {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly prisma: PrismaService) { }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async getUser(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id, },
    });
  }

  async updateUser(id: number, updateUserDTO: UpdateUserDTO): Promise<User> {
    return this.prisma.user.update({
      where: { id, },
      data: updateUserDTO,
    });
  }

  async deleteUser(id: number, withdrawUserDTO: WithdrawUserDTO): Promise<User> {
    await this.prisma.withdraw.create({
      data: withdrawUserDTO,
    });

    return this.prisma.user.update({
      where: { id, },
      data: {
        status: '탈퇴계정',
      },
    });
  }
}
