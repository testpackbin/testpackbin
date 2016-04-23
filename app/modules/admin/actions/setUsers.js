function setUsers({input, state}) {
  state.set('admin.users', input.users);
}

export default setUsers;
