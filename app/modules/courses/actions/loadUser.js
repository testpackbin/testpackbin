function loadUser({output, services, input}) {

  services.http.get('/api/user/'+input.user, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success({user: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadUser.async = true;


export default loadUser;
