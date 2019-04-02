import React, { Component } from 'react';

import {Wrapper, Dialog, Header, AddCity, ListCities, AddCityContainer} from './styled';

import Input from './components/Input';

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Dialog>
					<Header>WeatherMap</Header>
					<AddCity>
						<AddCityContainer>
							<Input
								placeholder="Input City"
							/>

						</AddCityContainer>
					</AddCity>
					<ListCities>

					</ListCities>
				</Dialog>
			</Wrapper>
		);
	}
}

export default App;
