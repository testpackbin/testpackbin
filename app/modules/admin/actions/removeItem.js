function removeItem({output, services, input}) {
  const baseUrl = {user: '/api/users/', course: '/api/bins/'}
  services.http.delete(baseUrl[input.item]+input.id, {headers:{'Authorization': 'Bearer ' + input.jwt}})
    .then((response) => {
      output.success();
    })
    .catch(() => {
      output.error();
    });
}

removeItem.async = true;


export default removeItem;
