import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({unique: true})
  login: string;

  @Prop()
  password: string;

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // role: Role[];

  // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
  // posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User)