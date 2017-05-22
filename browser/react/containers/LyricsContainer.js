import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { connect } from 'react-redux';
import {searchLyrics, setArtistQuery, setSongQuery} from '../action-creators/lyrics';


class LyricsContainer extends Component {

  constructor() {

    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }
    , store.getState());

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleArtistInput = this.handleArtistInput.bind(this);
    // this.handleSongInput = this.handleSongInput.bind(this);

  }


  // handleArtistInput(artist) {
  //   this.setState({ artistQuery: artist });
  // }

  // handleSongInput(song) {
  //   this.setState({ songQuery: song });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   if (this.state.artistQuery && this.state.songQuery) {
  //     store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
  //   }
  // }


  render() {
    return (
      <Lyrics
        // handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        // setArtist={this.handleArtistInput}
        // setSong={this.handleSongInput} 
        {...this.props}
        />
    );
  }

}

const mapStateToProps = function(state, addOwnProps) {

  return {
    artist: state.artistQuery,
    song: state.songQuery,
    lyrics: state.lyrics
  }
}

const mapDispatchToProps = function(dispatch) {

  return {

    setArtist: (artist) => {
      dispatch(setArtistQuery(artist))
    },
    setSong: (song) => {
      dispatch(setSongQuery(song));
    },
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(searchLyrics());
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);
