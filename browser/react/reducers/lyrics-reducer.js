import {
  ARTIST_QUERY,
  SET_LYRICS,
  SONG_QUERY
} from '../constants';

const initialLyricsState = {
  text: null
};

export default function (state = initialLyricsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_LYRICS:
      newState.text = action.text;
      break;

    case ARTIST_QUERY:
      newState.artistQuery = action.artistQuery;
      break;

    case SONG_QUERY:
      newState.songQuery = action.songQuery;
      break;

    default:
      return state;

  }

  return newState;

}