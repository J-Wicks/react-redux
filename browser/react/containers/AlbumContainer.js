import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';
import { connect } from 'react-redux'
import {toggleSong} from '../action-creators/player';


const mapStateToProps = function(state) {
  console.log(state)
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying

  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Album)
// class AlbumContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }

// export default AlbumContainer;
