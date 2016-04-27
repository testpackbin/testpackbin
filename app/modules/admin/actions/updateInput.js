function updateInput({state, input}) {
  state.set(['admin', 'bin', input.field], input.value);
}

export default updateInput;
