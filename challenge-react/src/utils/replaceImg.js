const IMAGE_PATH = '/images/';
import { isNil } from './vendor';

export const replaceImg = (nameFile) =>
  !isNil(nameFile) ? IMAGE_PATH + nameFile : '';
