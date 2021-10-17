import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";


export type ApiDocument = Api & Document;

@Schema()
export class Api {
  @Prop({unique: true})
  title: string;

  @Prop()
  credentials: string;

  @Prop()
  description: string;

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // role: Role[];

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // posts: Post[];
}

export const ApiSchema = SchemaFactory.createForClass(Api)