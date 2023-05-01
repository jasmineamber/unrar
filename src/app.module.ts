/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 17:02:43
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-05-01 11:53:03
 * @FilePath     : /src/app.module.ts
 * @Description  :
 */
import { Module } from "@nestjs/common";
import { UnRarModule } from "./modules/unrar/unrar.module";

@Module({
  imports: [UnRarModule],
})
export class AppModule {}
