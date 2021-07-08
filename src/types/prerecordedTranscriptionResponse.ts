import { Metadata } from "./metadata";
import { Channel } from "./channel";

export type PrerecordedTranscriptionResponse = {
  request_id?: string;
  metadata?: Metadata;
  results?: {
    channels: Array<Channel>;
  };
};