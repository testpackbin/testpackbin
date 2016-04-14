function login({state, services, output}) {
  const email = state.get('home.loginForm.email');
  const password = state.get('home.loginForm.password');

  services.http.post(`/api/sessions/create`, {
    email: email,
    password: password
  })
    .then((response) => {
      output.success({jwt: response.result.id_token});
    }).catch(() => {
      output.error();
    });
}

login.async = true;

export default login;
