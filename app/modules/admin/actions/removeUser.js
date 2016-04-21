function removeUser({output, services, input}) {

  services.http.delete('/api/user/'+input.id, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success();
    })
    .catch(() => {
      output.error();
    });
}

removeUser.async = true;


export default removeUser;
