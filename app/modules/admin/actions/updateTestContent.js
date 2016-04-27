'use strict'

import _ from 'lodash';

function updateContent({state, services, output, input}) {
  let target = _.indexOf(state.admin.bin.tests, {name: input.name})
  console.log('Target index will be', target);
  state.set('admin.bin.tests[' + target + '].content', input.content)

}

export default updateContent
