import React, { Component } from 'react';

import {Wrapper, Dialog, Header, AddCity, ListCities, AddCityContainer} from './styled';

import Input from './components/Input';
import Button from "./components/Button";
import Item from "./components/Item";

const APIKEY = 'd4ebea886fcc0070d6f68ff6ab962c00';
const FINDCITY = 'http://api.openweathermap.org/data/2.5/find?q=krasnoufimsk&APPID='

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
							<Button
								type="add"
								title="Add City"
							/>
						</AddCityContainer>
					</AddCity>
					<ListCities>
						<Item />
						<Item />
						<Item />
					</ListCities>
				</Dialog>
			</Wrapper>
		);
	}
}

export default App;
