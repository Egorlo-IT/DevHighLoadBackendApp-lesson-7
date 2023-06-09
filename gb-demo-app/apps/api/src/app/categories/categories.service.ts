import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoriesRepository: Repository<CategoriesEntity>
  ) {}

  async create(name: string) {
    return await this.categoriesRepository.save({ name });
  }

  async findById(id: string): Promise<CategoriesEntity> {
    const data = await this.categoriesRepository.findOneById(id);

    return data;
  }
}
