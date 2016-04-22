function loadCourses({output, services, input, state}) {
  services.http.get(`/api/bins/boilerplates/`)
    .then((response) => {
      output.success({userCourses: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadCourses.async = true;


export default loadCourses;
