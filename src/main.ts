/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 17:02:43
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-05-01 10:13:23
 * @FilePath     : /src/main.ts
 * @Description  :
 */
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.enableCors();
  app.register(require("@fastify/multipart"));
  await app.listen(3000);
}
bootstrap();
