function loadCourses({output, services, state}) {
const jwt = state.get('session.jwt');
//let mockData = [{name:"fff", id: "rrr"}, {name:"ggg", id: "hhhh"}];
//output.success({courses: mockData});
services.http.get('/api/bins', {headers:{'Authorization': 'Bearer ' + jwt}})
  .then((response) => {
    output.success({courses: response.result});
  })
  .catch(() => {
    output.error();
  });
}

loadCourses.async = true;


export default loadCourses;
