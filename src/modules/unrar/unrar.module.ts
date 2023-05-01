/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 21:53:24
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-05-01 09:58:10
 * @FilePath     : /src/modules/clash/clash.module.ts
 * @Description  :
 */
import { Module } from "@nestjs/common";
import { SubController } from "./controllers";

@Module({
  controllers: [SubController],
})
export class UnRarModule {}
