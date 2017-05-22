import { connect } from 'react-redux';
import React from 'react';
import Stations from '../components/Stations';


const convertSongsToStations = (songsArray) => {
	const stations = {};
	// console.log('Im in songs2stations ', songsArray);
	songsArray.forEach(song => {
    const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song);
	});

	return stations;
};

const mapStateToProps = (state) => {
	return {stations : convertSongsToStations(state.songs)};

}

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
