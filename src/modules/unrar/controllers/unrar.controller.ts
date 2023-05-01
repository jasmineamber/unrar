/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 22:06:25
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-05-01 13:21:41
 * @FilePath     : /src/modules/unrar/controllers/unrar.controller.ts
 * @Description  :
 */
import { Controller, Get, Post, Req } from "@nestjs/common";
import * as unrar from "node-unrar-js";

@Controller()
export class SubController {
  constructor() {}

  @Post("/unrar")
  async qq(@Req() req: any): Promise<String> {
    let code = "";
    try {
      const data = await req.file();
      const buf = await data.toBuffer();
      const extractor = await unrar.createExtractorFromData({ data: buf });
      const list = extractor.getFileList();
      for (let i of list.fileHeaders) {
        if (i.name.endsWith(".png")) {
          console.log(i.name);
          code = i.name.slice(-8).split(".")[0];
          console.log(code);
        }
      }
    } catch (error) {
      code = "error";
    } finally {
      return code;
    }
  }

  @Get()
  async Hello() {
    return "Hello World!";
  }

  @Get("ping")
  async ping() {
    return "OK";
  }
}
