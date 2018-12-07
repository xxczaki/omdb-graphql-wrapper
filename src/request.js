import got from 'got';
import config from './config';

// Make a request with the provided API key
const request = async (string, queryType) => {
	const response = await got(`http://omdbapi.com?apikey=${config.key}${queryType}${string}`, {json: true});
	return response.body;
};

export default request;
