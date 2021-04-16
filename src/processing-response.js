import './styles.css';
import refs from './refs';
import renderCountryCard from './render-card';
import countriesList from './countries-list.hbs';
import { showError, showSuccess } from './show-error';


export default function processingResponse(response) {
    if (response.length <= 10 && response.length > 1) {
        renderCountiesList(response);
    } else if (response.length === 1) {
        showSuccess('Success!')
        renderCountryCard(response);
    } else if (response.length > 10) {
        showError('Too many mathes found. Please enter a more specific query!', 'error');
    }
    else {
        showError('No mathes found. Please enter a correct query!', "error")
    }
};

function renderCountiesList(countries) {
    const countriesListMarkup = countriesList(countries);
    refs.container.innerHTML = countriesListMarkup;
}