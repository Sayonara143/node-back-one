import { nanoid } from 'nanoid'
import * as linkAPI from '../models/linkModels'

async function encode() {
  let encoded = nanoid(10)
  let shortLink = await linkAPI.findByFaikValue(encoded)
  if (shortLink) {
    encode()
  } else {
    return encoded;
  }
}

export {
  encode
};