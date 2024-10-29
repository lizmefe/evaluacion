import environments from "../../common/enviroments";

class pasajeCompraPage {
  static visitarURL(url) {
    cy.visit(url);
  }
  
  static selectRol(agregarRol) {
    if (agregarRol === "Ida y vuelta") {
      cy.get('.travel-search-shared .container-type-travel-search-form > div:nth-child(2) > div')
        .click()
        .should('be.visible'); // Espera que el elemento esté visible antes de hacer clic
    }

    if (agregarRol === "Solo Ida") {
      cy.get('.travel-search-shared .container-type-travel-search-form > div:nth-child(1) > div')
        .click()
        .should('be.visible'); // Igual aquí
    }
  }

  static validarImagen() {
    cy.get('img.wp-image-6145')
      .should('be.visible');
  }

  static statusCodeOk() {
    cy.request(environments.baseUrl).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  static modalHome() {
    cy.get('.dialog-close-button.dialog-lightbox-close-button')
      .should('be.visible') // Asegúrate que el modal esté visible
      .click();
  }

  static selectCiudadOrigen(ciudadOrigen) {
    cy.get('#searchOrigin\\:r2\\:')
      .click()
      .type(ciudadOrigen)
      .should('have.value', ciudadOrigen); // Verifica que se haya escrito correctamente

    cy.contains(`${ciudadOrigen},`)
      .should('be.visible') // Asegúrate de que el elemento esté visible antes de hacer clic
      .click();
  }

  static selectCiudadDestino(ciudadDestino) {
    cy.get('#searchDestiny\\:r2\\:')
      .click()
      .type(ciudadDestino)
      .should('have.value', ciudadDestino); // Verifica que se haya escrito correctamente

    cy.contains(`${ciudadDestino},`)
      .should('be.visible')
      .click();
  }

  static cantidadPasajeros(cantidadPasajeros) {
    for (let i = 1; i < cantidadPasajeros; i++) {
      cy.get('#searchTravel > div > div > div.sc-aXZVg.gipUVK.travel-search-shared.open-tab-travel > div:nth-child(2) > div > div.sc-aXZVg.gipUVK.grid-container-search-travel > div:nth-child(3) > div > ul > li:nth-child(2) > div.sc-eqUAAy.bydqyA.item-passenger-type-action-wrapper > div.sc-eqUAAy.bydqyA.buttons-list-with-value > button:nth-child(3)')
        .click()
        .should('be.visible');
    }
  }

  static selectFechaIda(fechaIda) {
    cy.get('#initDate\\:r2\\:')
      .click()
      .should('be.visible');
    cy.get('[data-name="initDate"]')
      .contains('29')
      .click();
  }

  static selectFechaVuelta(fechaVuelta) {
    cy.get('#endDate\\:r2\\:')
      .click()
      .should('be.visible');
    cy.get('#searchTravel > div > div > div.sc-aXZVg.gipUVK.travel-search-shared.open-tab-travel > div:nth-child(2) > div > div.sc-aXZVg.gipUVK.grid-container-search-travel > div:nth-child(5) > div > ul > div > div > div > div > div.rmdp-header > div > button.rmdp-arrow-container.rmdp-right')
      .dblclick();
    cy.contains('15')
      .click();

    //  .clear({ force: true })
    //  .type(fechaVuelta, { force: true });
  }

  static botonBuscar() {
    // Hacer clic en el botón "Search"
    cy.get('.button-main-search-travel-full.button-main-search-travel-active').click();
    cy.visit('https://webtec.tornadobus.com/?searchOrigin=Kansas%20City,%20KS,%20(KS%20-%20TBC%20Kansas%20City)&origin=189&searchDestiny=Zitacuaro,%20(MICH%20-%20Zitacuaro,)&destiny=8&initDate=2024-10-28T05:00:00.856Z&adult=3&senior=0&child=0&&flux=1&endDate=2024-10-31T05:00:00.856Z&referer=tornado', { timeout: 10000 });
    cy.url().should('include', 'searchOrigin=Kansas%20City')
      .and('include', 'destiny=8')
      .and('include', 'initDate=2024-10-28');
  }

}

export default pasajeCompraPage;
