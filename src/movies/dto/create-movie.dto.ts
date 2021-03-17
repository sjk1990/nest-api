// 요청으로 전송되는 Data에 타입을 부여하기 위함 ( movieData, updateData )
// 서비스와 컨트롤러에 DTO(Data Transfer Object)를 생성해야 함.

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  // input 값의 유효성 체크
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}