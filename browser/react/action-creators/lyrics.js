import {SET_LYRICS, SONG_QUERY, ARTIST_QUERY } from '../constants';
import axios from 'axios';

export const setLyrics = text => ({
  type: SET_LYRICS,
  text
});

export const setArtistQuery = artistQuery => ({
  type: ARTIST_QUERY,
  artistQuery
});

export const setSongQuery = songQuery => ({
  type: SONG_QUERY,
  songQuery
});


export const searchLyrics = () => {
  return (dispatch, getState) => {
  	const artist = getState().artistQuery
  	const song = getState().songQuery
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      })
  };
};
