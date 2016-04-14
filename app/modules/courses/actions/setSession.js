function setSession({input, state}) {
  console.log(input.jwt);
  if (!state.get('session.sessionId')) state.set('session.sessionId', input.jwt);
}

export default setSession;