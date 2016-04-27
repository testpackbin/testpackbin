function createNewBin({state, services, output}) {
  const bin = state.get('admin.bin');

  services.http.post('/api/bins', {
    id : bin.id,
    name : bin.name,
    subject : bin.subject,
    readme : bin.readme,
    author: 'admin',
    isBoilerplate: true,
    files: [{
      "name" : "index.html",
      "content" : ""
    }],
    tests: [],
    loaders: [],
    packages: []
  })
    .then((res) => output.success())
    .catch(() => output.error());
}

createNewBin.async = true;

export default createNewBin;
