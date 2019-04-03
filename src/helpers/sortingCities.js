export const sortingCities = function(cities) {

	const compareFunction = function (a, b) {
		if(a.city < b.city) return -1;
		if(a.city > b.city) return 1;
		return 0;
	};

	return cities.sort(compareFunction);
};