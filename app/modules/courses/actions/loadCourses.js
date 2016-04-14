function loadCourses({output, services}) {

let mockData = [{name:"fff", id: "rrr"}, {name:"ggg", id: "hhhh"}];
/*  services.http.get('/API/courses')
  .then((response) => {
    output.success({courses: response.result});
  })
  .catch(() => {
    output.error();
  });
*/
output.success({courses: mockData});
}

//loadCourses.async = true;


export default loadCourses;
