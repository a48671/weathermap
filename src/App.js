import React, { Component } from 'react';

import axios from 'axios';

import {conversionInCelsius} from './helpers/conversionInCelsius';

import {Wrapper, Dialog, Header, AddCity, ListCities, AddCityContainer} from './styled';

import Input from './components/Input';
import Button from "./components/Button";
import Item from "./components/Item";
import Control from "./components/Control";

class App extends Component {

	state = {
		inputValue: '',
		listCities: []
	};

	constructor(props) {
		super(props);

		this.onChangeInput = this.onChangeInput.bind(this);
		this.onClickAddCity = this.onClickAddCity.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
	}

	onChangeInput = function(event) {
		this.setState({
			inputValue: event.target.value
		});
	};

	onClickAddCity = function() {

		const {inputValue, listCities} = this.state;

		if(inputValue.length < 2) {
			alert('City name must have more than 1 letter');
			return;
		}

		try {
			axios.get(
				'http://api.openweathermap.org/data/2.5/find?APPID=d4ebea886fcc0070d6f68ff6ab962c00&q=' + inputValue
			).then(response => {
				if(response.data.count) {
					const data = response.data.list[0];
					this.setState({
						inputValue: '',
						listCities: [
							...listCities,
							{
								city: data.name,
								temperature: conversionInCelsius(data.main.temp),
								pressure: Math.round(data.main.pressure)
							}
						]
					}, () => {console.log(this.state)});
				} else {
					alert('Sorry! Specified city not found')
				}
			});
		} catch(error) {

		}
	};

	onClickDelete = function(index) {

		const {listCities} = this.state;

		const newListCities = [...listCities]
		newListCities.splice(index, 1)

		this.setState({
			listCities: [
				...newListCities
			]
		});
	}

	render() {

		const {inputValue, listCities} = this.state;

		const {onChangeInput, onClickAddCity, onClickDelete} = this;

		return (
			<Wrapper>
				<Dialog>
					<Header>WeatherMap</Header>
					<AddCity>
						<AddCityContainer>
							<Input
								inputValue={inputValue}
								onChangeInput={onChangeInput}
								placeholder="Input City"
							/>
							<Button
								onClick={onClickAddCity}
								type="add"
								title="Add City"
							/>
						</AddCityContainer>
					</AddCity>
					<ListCities>
						<Control />
						{
							listCities.map((item, index) => {
								return(
									<Item
										index={index}
										key={index.toString() + Math.round(Math.random())}
										city={item.city}
										temperature={item.temperature}
										pressure={item.pressure}
										onClickDelete={onClickDelete}
									/>
								);
							})
						}
					</ListCities>
				</Dialog>
			</Wrapper>
		);
	}
}

export default App;
