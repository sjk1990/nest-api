import { Controller, Get, Param, Post, Delete, Patch, Body } from '@nestjs/common';

// module 에서 모두 import.

// nest-cli 활용하여 빠르게 빌드

// @ : decorator - 클래스에 함수기능을 추가할 수 있음
// NestJS는 컨트롤러 와 비즈니스 로직을 구분짓고 싶어한다.
// 컨트롤러 : 단순 url을 가져오는 역할 + 함수실행 정도의 역할만,  
// 나머지 실제 비즈니스 로직은 서비스로 구분


// @Controller('movies') -> '/moveis' 엔트리포인트
@Controller('movies') 
export class MoviesController {
    @Get()
    getAll() {
      return 'This will return all movies';
    }

    @Get('search')
    search(@Query('year') seachingYear: string) {
      return `We are searching for a movie made after: ${seachingYear}`;
    }
  
  
    @Get(':id')
    // 원하는 것이 있다면 요청해야 함. url의 id값을 movieId라는 argument에 저장, string 타입으로
    getOne(@Param('id') movieId: string) {
      return `This will return one movie with the id: ${movieId}`;
    }
  
    @Post()
    // get req.body
    create(@Body() movieData) {
      console.log(movieData)
      return 'This will create a movie';
    }
  
    @Delete(':id')
    remove(@Param('id') movieId: string) {
      return `This will delete a movie with the id: ${movieId}`;
    }
  
    //put: 모든 리소스 업데이트, patch: 일부분 업데이트
    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
      return {
        updatedMovie: movieId,
        ...updateData,
      };
    }
}
