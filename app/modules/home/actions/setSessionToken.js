function setSessionToken({state, services}) {
  console.log("sst:", state, services);
  //state.set('session.jwt', services.localAssignments.getAll());
}

export default setSessionToken;
