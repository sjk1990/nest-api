import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// 위와 동일한 코드 -> partialType을 통해 간결화.
// export class UpdateMovieDto {
//     @IsString()
//     readonly title?: string;
  
//     @IsNumber()
//     readonly year?: number;
  
//     @IsString({ each: true })
//     readonly genres?: string[];
//   }