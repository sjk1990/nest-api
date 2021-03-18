import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  // provider가 MoviesService를 import 하고 컨트롤러에 Inject(주입)함. - dependency injection
  providers: [MoviesService],
})
export class MoviesModule {}