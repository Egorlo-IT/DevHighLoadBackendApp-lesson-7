import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from './news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>
  ) {}

  async create(news: NewsEntity) {
    return await this.newsRepository.save(news);
  }

  async findAll(): Promise<{ news: NewsEntity[] }> {
    const data = await this.newsRepository.find();
    return { news: data };
  }

  async edit(news: NewsEntity, idNews: number) {
    const data = await this.newsRepository.update(idNews, news);
    return data;
  }

  async findById(id: string): Promise<NewsEntity> {
    console.log('id:', id);
    const data = await this.newsRepository.findOneById(id);
    console.log('data:', data);

    return data;
  }

  async remove(id: string) {
    const _news = await this.findById(id);
    if (_news) {
      await this.newsRepository.remove(_news);
      return true;
    }
    return false;
  }
}
