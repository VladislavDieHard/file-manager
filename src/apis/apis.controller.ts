import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiRegisterDto } from './dto/registe-api.dto';

@Controller('apis')
export class ApisController {
  @Post()
  registerApi(@Body() dto: ApiRegisterDto): string {
    return
  }

  @Delete()
  deleteApi() {

  }
}
