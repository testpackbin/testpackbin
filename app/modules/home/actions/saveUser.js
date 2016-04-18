function saveUser({state, input}) {
  state.set(['user', 'user'], input.user);
  state.set(['session', 'jwt'], input.jwt);
}

export default saveUser;
