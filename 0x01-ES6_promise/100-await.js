import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  let r = {}
  try {
    const r_photo = uploadPhoto();
    const r_user = createUser();
    r = { r_photo, r_user};
  }
  catch (e) {
    r = { photo: null, user: null };
  }
  return r;   
}
