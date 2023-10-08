import styles from "./CountriesList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

import { useCities } from "../contexts/CitiesContext";

export default function CountriesList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (isLoading) return <Spinner />;

  if (!countries.length)
    return (
      <Message message="Adding your first message, by clicking on a city on the map." />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}
