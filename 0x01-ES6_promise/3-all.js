import { uploadPhoto, createUser } from './utils';

const photo = uploadPhoto();
const user = createUser();

function handleProfileSignup() {
  Promise.all([photo, user])
    .then((values) => {
      console.log(values[0].body, values[1].firstName, values[1].lastName);
    })
    .catch(() => (
      'Signup system offline'
    ));
}
export default handleProfileSignup;
