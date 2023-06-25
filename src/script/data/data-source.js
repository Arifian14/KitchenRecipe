import axios from 'axios';

class DataSource {
  static searchMeal(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.data.meals)
      .catch((error) => error);
  }
}

export default DataSource;
