function loadUsers({output, services, input}) {

  services.http.get('/api/users', {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success({users: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadUsers.async = true;


export default loadUsers;
