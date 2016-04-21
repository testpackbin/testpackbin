function removeLocalUser({input, state}) {
  let updUsers = state.get('admin.users').splice(input.index,1);
  state.set('admin.users', updUsers);
}

export default removeLocalUser;
