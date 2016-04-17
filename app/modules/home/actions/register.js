function register({services, output, state}) {
  const email = state.get('home.registerForm.email');
  const password = state.get('home.registerForm.password');
  const repeatedPassword = state.get('home.registerForm.repeatedPassword');

  if (password !== repeatedPassword) {
    output.error({message: 'Passwords do not match.'});
  } else {
    services.http.post('/api/users', {
      email: email,
      password: password
    })
    .then((response) => {
      output.success({
        jwt: response.result.id_token,
        user: response.result.user
      });
    .catch((e) => {
      let errorMessage = 'Failed signing up.';

      if (e.message === 'USER_EXISTS') {
        errorMessage = 'User already exists.';
      }
      output.error({message: errorMessage});
    });
  }
}

register.async = true;

export default register;
