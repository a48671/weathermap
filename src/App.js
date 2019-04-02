import React, { Component } from 'react';

import {Wrapper, Dialog, Header, AddCity, ListCities} from './styled';

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Dialog>
					<Header>WeatherMap</Header>
					<AddCity>

					</AddCity>
					<ListCities>

					</ListCities>
				</Dialog>
			</Wrapper>
		);
	}
}

export default App;
