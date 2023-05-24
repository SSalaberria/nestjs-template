import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { AuthService } from 'src/auth';

import type { CreateUserInput } from './dto/create-user.input';
import type { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
import { UserNotFoundException } from './exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @Inject(forwardRef(() => AuthService)) private auth: AuthService,
  ) {}

  public async findOne(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email }).exec();

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }

  public async findOneById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  public async update(userId: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userModel.findOneAndUpdate({ _id: userId }, { $set: updateUserInput }, { new: true }).exec();

    if (!user) {
      throw new UserNotFoundException();
    }

    return user.save();
  }

  public async create(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = this.auth.hashPassword(createUserInput.password);

    const newUser = await this.userModel.create({
      ...createUserInput,
      password: hashedPassword,
    });

    return newUser.save();
  }

  public async delete(id: string): Promise<User> {
    const user = await this.findOneById(id);
    await user.deleteOne();

    return user;
  }
}
