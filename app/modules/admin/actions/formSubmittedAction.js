import set from 'cerebral-addons/set';

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
    files: [],
    tests: [],
    isBoilerplate: true,
    loaders: {},
    package: {},
    readMe: ""
  })
    .then((response) => {
      console.log(response)
      set('state:/binEdit.binForm.id', '')
      console.log(state)
      //output.success(response);
    }).catch(() => {
      console.log('in catch')
      //output.error();
    });
}

formSubmittedAction.async = true;

export default formSubmittedAction;
