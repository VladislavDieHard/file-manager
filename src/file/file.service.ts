import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FileService {
  saveFile(file) {
    const fileExtension = file.originalname.split('.').pop();
    const fileName = uuid.v4() + '.' + fileExtension;
    const date = new Date(),
      year = String(date.getFullYear()),
      month = String(date.getMonth() + 1),
      day = String(date.getDate())

    const filePath = path.resolve(__dirname, '..', 'files', year, month, day);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, {recursive: true});
    }
    fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
    return year + '/' + month + '/' + day + '/' + fileName;
  }

  removeFile(filePath) {

  }
}
