class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallBack() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          text-align: center;
          position: sticky;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 15rem;
          margin-bottom: 1.5rem;
        }
              
        .search-container h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }
              
        .search-container .search-input {
          max-width: 600px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 20px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
          width: 100%;
          align-self: center;
        }
              
        .search-container .search-input input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid rgb(233, 129, 0);
          font-weight: bold;
        }
              
        .search-container .search-input input:focus {
          outline: 0;
          border-bottom: 2px solid rgb(233, 129, 0);
        }
              
        .search-container .search-input input:focus::placeholder {
          font-weight: bold;
        }
              
        .search-container .search-input input::placeholder {
          color: rgb(233, 129, 0);
          font-weight: normal;
        }
              
        .search-container .search-input button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          border-radius: 10px;
          background-color: rgb(233, 129, 0);
          color: white;
          border: 0px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .search-container .search-input button:hover {
          background-color: rgb(190, 104, 0);
        }
              
        @media screen and (max-width: 550px) {
          .search-container .search-input {
            flex-direction: column;
            position: static;
            max-width: 400px;
          }
              
          .search-container .search-input input {
            width: 100%;
            margin-bottom: 12px;
          }
              
          .search-container .search-input button {
            width: 100%;
          }
        }
      </style>
            
      <div id="search-container" class="search-container">
        <h2>Find Meals You Want To Cook</h2>
        <section class="search-input">
          <input placeholder="Search meals here ..." id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </section>   
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
