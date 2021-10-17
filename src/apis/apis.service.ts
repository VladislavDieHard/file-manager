import { Injectable } from '@nestjs/common';
import uuidApiKey from 'uuid-apikey'
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Api, ApiDocument } from './apis.schema';
import { ApiRegisterDto } from './dto/registe-api.dto';

@Injectable()
export class ApisService {
  constructor(
    @InjectModel(Api.name) private apiModel: Model<ApiDocument>
  ) {}

  async registerApi(dto: ApiRegisterDto): Promise<object> {
    const newApiKeys = uuidApiKey.create();
    const newApi = await this.apiModel.create({ ...dto, apiKey: newApiKeys.uuid });
    return {
      title: newApi.title,
      apiKey: newApiKeys.apiKey,
    };
  }

  deleteApi() {

  }
}
