class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          width: 100%;
          background-color: rgb(206, 113, 0);
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
            
        :host h2 {
          font-size: 25px;
          padding: 0 20px;
          margin-left: 20px;
        }
            
        .app-bar-list ul {
          display: flex;
          justify-content: center;
          gap: 2rem 1.5rem;
          padding: 0 20px;
          margin-right: 20px;
        }
            
        .app-bar-list li {
          list-style-type: none;
        }
            
        .app-bar-list li a {
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          color: white;
        }
            
        .app-bar-list li a:hover {
          font-weight: bold;
        }
      </style>

      <h2>Kitchen Recipe</h2>
      <section class="app-bar-list">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">About</a></li>
        </ul>
      </section>
    `;
  }
}

customElements.define('nav-bar', NavBar);
