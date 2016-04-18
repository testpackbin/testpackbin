function setSession({input, state}) {
  if (!state.get('session.jwt') && input.jwt) {
    state.set('user.user', input.user);
    state.set('session.jwt', input.jwt);
  }
}

export default setSession;
