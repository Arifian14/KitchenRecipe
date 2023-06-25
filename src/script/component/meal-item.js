class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .fan-art-meal {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            .meal-info {
                padding: 15px;
                text-align: center;
            }

            .meal-info > h3 {
                font-weight: lighter;
                margin-top: 5px;
                font-size: 15px;
            }

            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }

            .meal-info button {
                font-size: 16px;
                padding: 15px 25px;
                background-color: #f4c530;
                border: none;
                margin-top: 15px;
                border-radius: 10px;
                font-weight: 600;
            }
            
            .meal-info button:hover {
                background-color: #dba800;
            }
        </style>
        
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
        <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <h3>${this._meal.strArea}</h3>
            <button class="show-recipe">View Recipe</button>
        </div>
      `;

    const popupContainer = document.querySelector('.pop-up-container');
    const popup = document.querySelector('.pop-up-inner');
    const hideRecipe = document.getElementById('hide-recipe');

    this.shadowDOM.querySelector('.show-recipe').addEventListener('click', () => {
      showMealPopup(this._meal);
    });

    const showMealPopup = (meal) => {
      popup.innerHTML = '';

      const newPopup = document.createElement('div');
      newPopup.classList.add('pop-up-inner');

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
          break;
        }
      }

      newPopup.innerHTML = `
        <div class="left">
            <div class="meal-card">
                <div class="meal-card-img-container">
                    <img src="${meal.strMealThumb}" alt="">
                </div>
                <div class="meal-name">
                    <p>${meal.strMeal}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div>
                <h2>Ingredients / Measures</h2>
                <ul>
                    ${ingredients.map((e) => `<li>${e}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="right">
            <div>
                <h2>Intructions</h2>
                <pre class="meal-info">${meal.strInstructions}</pre>
            </div>
        </div>
        `;
      popup.appendChild(newPopup);
      popupContainer.style.display = 'flex';

      hideRecipe.addEventListener('click', () => {
        popupContainer.style.display = 'none';
      });
    };
  }
}

customElements.define('meal-item', MealItem);
