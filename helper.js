import { foo } from './other.js';

export function someHelper() {
  console.log('hallo');
}


export function otherHelper() {
    console.log('other');
}

export default {
  otherHelper,
  someHelper
}
