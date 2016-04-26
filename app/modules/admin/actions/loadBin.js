function loadBin({output, services, input}) {

  services.http.get('/api/bins/'+input.id, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success({bin: response.result});
    })
    .catch(() => {
      output.error();
    });
}

loadBin.async = true;


export default loadBin;
