function loadCourses({output, services, state}) {
const jwt = state.get('session.jwt');
const user = state.get('user.user.id');
services.http.get('/api/user', {headers:{'Authorization': 'Bearer ' + jwt}})
  .then((response) => {
    output.success({courses: response.result});
  })
  .catch(() => {
    output.error();
  });
}

loadCourses.async = true;


export default loadCourses;
