import './styles.css';
import refs from './refs';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import processingResponse from './processing-response.js';


refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
    const searchQuery = e.target.value;
fetchCountries(searchQuery).then(processingResponse).catch(console.log);
}



