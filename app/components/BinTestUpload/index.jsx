import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

// class BinTestUpload extends React.Component({
//     getInitialState: function() {
//         return { showResults: false };
//     },
//     onClick: function() {
//         this.setState({ showResults: true });
//     },
//     lol: function(){
//       this.setState({showResults: false});
//     },
//     render: function() {
//         return (
//           <div id="results" className="search-results">
//               Upload Bin Test <input type="file" /><br />
//           </div>
//         );
//     }
//
// export default BinTestUpload;
// })
class BinTestUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
  <div>
        Test: <input type="file"/><br />
      </div>
    );
  }
}

export default BinTestUpload;
