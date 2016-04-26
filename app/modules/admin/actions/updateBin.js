function updateBin({state, services, output}) {
  const bin = state.get('admin.bin');

  services.http.put('/api/bins', {
    _id : bin._id,
    id : bin.id,
    name : bin.name,
    subject : bin.subject,
    readme : bin.readme
  })
    .then((res) => output.success())
    .catch(() => output.error());
}

updateBin.async = true;

export default updateBin;