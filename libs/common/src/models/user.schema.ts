// Dependencies
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { AbstractDocument } from '@app/common'

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({ type: String, required: true, unique: true })
  email: string
  
  @Prop({ type: String, required: true })
  password: string

  @Prop({ default: [], required: false })
  roles?: string[]
}

export const UserSchema = SchemaFactory.createForClass(UserDocument)
