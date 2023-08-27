export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f46be3dfcmsh4438b0e9fe6f044p18dfebjsnacc8c17e2188',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL="https://wft-geo-db.p.rapidapi.com/v1/geo"
try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "6ca6224d38e5207a14b4c77a2af6f1c7";