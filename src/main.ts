import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 파이프(like 미들웨어), 코드가 지나며 검사를 받는 통로
  // class의 유효성 검사를 위해 class-validator 와 class-transformer 설치 -> dto.ts 파일 내부
  app.useGlobalPipes(
    new ValidationPipe({
      // decorator가 없는 어떠한 property의 object를 거름.
      // ( dto에 정의되지 않은 property는 validator에 도달하지 못함)
      whitelist: true,
      // 이상한 형식에 맞지 않는 request 자체를 차단.
      forbidNonWhitelisted: true,
      // client에서 보내온 요청을 우리가 원하는 실제 타입으로 변환 ( url 의 string -> 원하는 number 타입으로 변환)
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
