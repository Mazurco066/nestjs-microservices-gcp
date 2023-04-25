// Dependencies
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { AbstractDocument } from '@app/common'

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop({ type: Date, default: () => new Date(), required: false })
  timestamp: Date

  @Prop({ type: Date, required: true })
  startDate: Date

  @Prop({ type: Date, required: true })
  endDate: Date

  @Prop()
  userId: string
  
  @Prop()
  placeId: string
  
  @Prop()
  invoiceId: string
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument)
