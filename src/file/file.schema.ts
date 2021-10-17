import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";
import { Api } from '../apis/apis.schema';


export type FileDocument = File & Document;

@Schema()
export class File {
  @Prop()
  title: string;

  @Prop()
  path: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Api'})
  api: Api;

  @Prop({type: Date})
  uploadedAt

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // role: Role[];

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // posts: Post[];
}

export const FileSchema = SchemaFactory.createForClass(File)