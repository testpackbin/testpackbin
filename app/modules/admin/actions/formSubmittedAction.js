function formSubmittedAction({state, services, output}) {
  const id = state.get('binEdit.binForm.id');
  const name = state.get('binEdit.binForm.name');
  const sub = state.get('binEdit.binForm.sub');
  const description = state.get('binEdit.binForm.description');

 const binObj = {
    name : name,
    id : id,
    sub : sub,
    description : description

 }
 console.log(binObj)

  services.http.post(`/api/bins`, {
    id : id,
    name : name,
    subject : sub,
    description : description,
    author: '',
    files: [],
    tests: [],
    isBoilerplate: true,
    loaders: '',
    readMe: ''
  })
    .then((response) => {
      console.log(respons)
      output.success({

      });
    }).catch(() => {
      output.error();
    });
}

formSubmittedAction.async = true;

export default formSubmittedAction;
