import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
/* This file us used to talk to the databse; U can use TypeOrm or Prisma for this purpose */
@Injectable()
export class UsersService {
  //MOCK DB
  private readonly users = [
    {
      id: 1,
      username: 'marius',
      password: 'not-secure',
    },
    { id: 2, username: 'maria', password: 'not-secure' },
  ];
  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };

    this.users.push(user);
    console.log(this.users);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
    //`This action returns a #${username} user`;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
