export const  conversionInCelsius = function(fahrenheit) {
	const celsius = fahrenheit - 273.15;
	return Math.round(celsius);
}