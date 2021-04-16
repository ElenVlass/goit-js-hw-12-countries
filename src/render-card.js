import './styles.css';
import refs from './refs';
import countryCard from './country-card.hbs';

export default function renderCountryCard(country) {
    const countryMarkup = countryCard(country[0]);
    refs.container.innerHTML = countryMarkup;
}