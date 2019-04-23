import React, { Component } from 'react';

import axios from 'axios';

import {conversionInCelsius} from './helpers/conversionInCelsius';
import {sortingCities} from './helpers/sortingCities';

import {Wrapper, Dialog, Header, AddCity, ListCities, AddCityContainer} from './styled';

import Input from './components/Input';
import Button from "./components/Button";
import Item from "./components/Item";
import Control from "./components/Control";

class App extends Component {

	state = {
		inputValue: '',
		sort: 'random', // random or asc or desc
		listCities: []
	};

	constructor(props) {
		super(props);

		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSubmitAddCity = this.onSubmitAddCity.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
		this.sortingItems = this.sortingItems.bind(this);
	}

	onChangeInput = function(event) {
		this.setState({
			inputValue: event.target.value
		});
	};

	onSubmitAddCity = function(e) {

		e.preventDefault();

		const {inputValue, listCities} = this.state;

		if(inputValue.length < 2) {
			alert('City name must have more than 1 letter');
			return;
		}

		try {
			axios.get(
				'https://api.openweathermap.org/data/2.5/find?APPID=d4ebea886fcc0070d6f68ff6ab962c00&q=' + encodeURIComponent(inputValue),
				{
					'Content-Type': 'application/json; charset=utf-8'
				}
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
						],
						sort: 'random'
					});
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
	};

	sortingItems = function() {

		const {listCities, sort} = this.state;

		let newListCities;
		let newSort;

		if(sort === 'random') {
			newListCities = [...sortingCities(listCities)];
			newSort = 'asc'
		} else {
			newListCities = listCities.reverse();
			newSort = sort === 'asc' ? 'desc' : 'asc';
		}

		this.setState(
			{
				listCities: [
					...newListCities
				],
				sort: newSort
			}
		);
	}

	render() {

		const {inputValue, listCities, sort} = this.state;

		const {onChangeInput, onSubmitAddCity, onClickDelete, sortingItems} = this;

		return (
			<Wrapper>
				<Dialog>
					<Header>WeatherMap</Header>
					<AddCity>
						<AddCityContainer
							onSubmit={onSubmitAddCity}
						>
							<Input
								inputValue={inputValue}
								onChangeInput={onChangeInput}
								placeholder="Input City"
							/>
							<Button
								onClick={onSubmitAddCity}
								type="add"
								title="Add City"
							/>
						</AddCityContainer>
					</AddCity>
					<ListCities>
						<Control
							sort={sort}
							sortingItems={sortingItems}
						/>
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
