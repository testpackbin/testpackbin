function setSession({input, state}) {
  if (!state.get('session.jwt') && input.jwt) state.set('session.jwt', input.jwt);
}

export default setSession;