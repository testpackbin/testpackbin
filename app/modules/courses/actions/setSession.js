function setSession({input, state}) {
  if (!state.get('session.jwt')) state.set('session.jwt', input.jwt);
}

export default setSession;