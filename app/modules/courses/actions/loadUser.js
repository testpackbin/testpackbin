function loadUser({output, services, input}) {

  services.http.get('/api/user/'+input.userid, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success({user: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadCourses.async = true;


export default loadUser;
