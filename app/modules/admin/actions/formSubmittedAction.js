import redirect from 'common/factories/actions/redirect';
function formSubmittedAction({state, services, output}) {
  const id = state.get('binEdit.binForm.id');
  const name = state.get('binEdit.binForm.name');
  const sub = state.get('binEdit.binForm.sub');
  const description = state.get('binEdit.binForm.description');

  services.http.post(`/api/bins`, {
    id : id,
    name : name,
    subject : sub,
    description : description,
    author: "zach",
    files: [{
      "name" : "index.html",
      "content" : ""
    }],
    tests: [],
    isBoilerplate: true,
    loaders: {},
    package: {},
    readMe: ""
  })
    .then((response) => {
      var id = response.result.id;
      var location = "http://www.webpackbin.dev:4000/";
      window.location = location+id;
      //console.log(id)
      //output.success(response);
    }).catch(() => {
      console.log('in catch')
      //output.error();
    });
}

formSubmittedAction.async = true;

export default formSubmittedAction;
