import copy from 'cerebral-addons/copy';

function expandCard ({state}){
  //console.log(state.get());
  copy('input:/displayNone', 'state:/courses.displayNone')
}
export default expandCard
