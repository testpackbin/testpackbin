function removeLocalItem({input, state}) {
  collection = {user: 'admin.users', course: 'courses.courses'};
  let updColl = state.get(collection[input.item]).splice(input.index,1);
  state.set(collection[input.item], updColl);
}

export default removeLocalItem;
