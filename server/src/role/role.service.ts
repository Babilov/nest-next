import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "./entities/role.entity";
import {Repository} from "typeorm";

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role)
              private roleRepository: Repository<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role: Role = this.roleRepository.create(createRoleDto)
    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role | null> {
    return await this.roleRepository.findOne({where: {id}});
  }
}
