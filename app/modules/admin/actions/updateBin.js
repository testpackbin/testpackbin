function updateBin({state, services, output, input}) {
  const bin = input.bin ? input.bin : state.get('admin.bin');

  services.http.put('/api/bins', {
    _id : bin._id,
    id : bin.id,
    name : bin.name,
    subject : bin.subject,
    readme : bin.readme,
    tests: bin.tests
  })
    .then((res) => output.success())
    .catch(() => output.error());
}

updateBin.async = true;

export default updateBin;
