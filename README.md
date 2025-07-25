# Práctica: Gatsby

En este repositorio se aloja el código de la Práctica: Gatsby para la asignatura Sistemas y Tecnologías Web: Cliente.

Esta página web consiste en una aplicación de noticias sobre tres videojuegos en concreto: Animal Crossing, The Legend of Zelda y Super Mario.

Para la obtención de las noticias, se utiliza [News API](https://newsapi.org).

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
