# Sistemas y Tecnologías Web: Cliente
## Práctica: Gatsby
### Por Rebeca Rodríguez Rodríguez (alu0101394763)

---

## Accesibilidad en Gatsby
### Plugin ESLint
1. Se ha instalado el plugin `eslint-plugin-jsx-a11y` mediante el siguiente comando:

  ```bash
  npm install eslint eslint-plugin-jsx-a11y --save-dev
  ```

2. Se ha configurado ESLint mediante el archivo [`.eslintrc.js`](./.eslintrc.js).

3. Se ha añadido un _script_ en [`package.json`](./package.json) para poder ejecutar ESLint mediante el siguiente comando:

  ```bash
  npm run lint
  ```

  Se ha obtenido el siguiente resultado:

  ![Resultado test ESLint](./images/Resultado%20test%20ESLint.png)

  Estos errores indican que hay una imagen que no tiene una propiedad `alt` asignada y que hay un elemento interactivo que no tiene definido un _listener_ de teclado. Es conveniente implementar estos aspectos en la página web para lograr una mayor accesibilidad.

### Tests E2E con Cypress
1. Se ha instalado Cypress como dependencia mediante el siguiente comando:

  ```bash
  npm install cypress --save-dev
  ```

2. Se ha añadido un _script_ en [`package.json`](./package.json) para poder ejecutar Cypress mediante el siguiente comando, que abre la interfaz de Cypress y crea un directorio `cypress` con archivos de ejemplo en un principio:

  ```bash
  npm run cypress:open
  ```

3. Se ha creado un archivo [`/cypress/e2e/tests.cy.js`](/cypress/e2e/tests.cy.js) con varios tests para comprobar diferentes aspectos de la página, obteniendo los siguientes resultados:

  ![Resultados tests Cypress](/images/Resultado%20tests%20Cypress.png)

  Se puede observar que la ejecución de todos los tests ha sido exitosa.

---

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)
