import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'jobs', timestamps: true } })
class Job {
  @prop()
  title: string;

  @prop({ match: /^(http|https):\/\/[^ "]+$/ })
  url: string;

  @prop()
  data: any;

  @prop({ type: Date })
  runAt: Date;
}

export const JobModel = getModelForClass(Job);
