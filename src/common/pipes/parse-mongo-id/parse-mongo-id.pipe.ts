import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, _metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException('The id is not a mongo id');
    }
    return value;
  }
}
