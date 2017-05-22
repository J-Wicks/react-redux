'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';
import { toggleSong } from '../action-creators/player';
import { convertSong } from '../utils';

const mapStateToProps = function(state, addOwnProps) {
  const { genreName } = addOwnProps.routeParams;
  const songList = state.songs.filter((song) => {return song.genre === genreName});
  return {
    songs: songList.map((s) => {return convertSong(s)}),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
    genreName: genreName
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
