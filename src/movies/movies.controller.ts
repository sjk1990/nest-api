import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';

// module 에서 모두 import.

// nest-cli 활용하여 빠르게 빌드

// @ : decorator - 클래스에 함수기능을 추가할 수 있음
// NestJS는 컨트롤러 와 비즈니스 로직을 구분짓고 싶어한다.
// 컨트롤러 : 단순 url을 가져오는 역할 + 함수실행 정도의 역할만,
// 나머지 실제 비즈니스 로직은 서비스로 구분

// @Controller('movies') -> '/moveis' 엔트리포인트
@Controller('movies')
export class MoviesController {
  // service에 접근하려면 import X, 요청해야함
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  // getAll 함수의 return type을  Movie[] 로 명시함
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  // 원하는 것이 있다면 요청해야 함. url의 id값을 movieId라는 argument에 저장, string 타입으로
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  // get req.body
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  //put: 모든 리소스 업데이트, patch: 일부분 업데이트
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
