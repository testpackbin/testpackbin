// import copy from 'cerebral-addons/copy';
//
//
// export default [
//  copy('input:/display', 'state:/courses.display')
// ];
import toggle from 'cerebral-addons/toggle';


export default [
 toggle('state:/courses.display', 'none', 'block')
];
