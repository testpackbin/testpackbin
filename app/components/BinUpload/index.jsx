import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

// class BinUpload extends React.Component({
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
//               Upload Bins <input type="file" /><br />
//           </div>
//         );
//     }
//
// export default BinUpload;
// })
class BinUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="file"/><br />
        </div>
    );
  }
}

export default BinUpload;
