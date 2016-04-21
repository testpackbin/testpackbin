function updateInput({state, input}) {
  state.set(['binEdit', input.form, input.type], input.value);
}

export default updateInput;
