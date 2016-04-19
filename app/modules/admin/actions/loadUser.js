function loadUser({output, services, input}) {

  services.http.get('/api/users/'+input.user, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      console.log('REsponse from get request');
      console.log(response);
      output.success({user: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadUser.async = true;


export default loadUser;
