import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function(state){
  return {
    albums: state.list
  }
}

export default connect(mapStateToProps)(Albums)
// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

// export default AlbumsContainer;
