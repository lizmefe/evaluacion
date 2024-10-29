import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import pasajeCompraPage from "./pasajeCompraPage";

const environments = require('../../common/enviroments');

Given('abro la URL', () => {
  pasajeCompraPage.visitarURL(environments.baseUrl);
  pasajeCompraPage.modalHome();
})

When(`el logo carga correctamente`, () => {
  pasajeCompraPage.validarImagen();
});

Then(`la pagina cargo correctamente`, () => {
  pasajeCompraPage.statusCodeOk();
});

When(`selecciono el tipo de vuelo {string}`, (tipoVuelo) => {
  pasajeCompraPage.selectRol(tipoVuelo);
});

When(`selecciono la ciudad de origen {string}`, (ciudadOrigen) => {
  pasajeCompraPage.selectCiudadOrigen(ciudadOrigen);
  });

When(`selecciono la ciudad de destino {string}`, (ciudadDestino) => {
  pasajeCompraPage.selectCiudadDestino(ciudadDestino);
});

And('seleccionar la cantidad de pasajeros {string}', (cantidadPasajeros) => {
  pasajeCompraPage.cantidadPasajeros(cantidadPasajeros);
});

And('seleccionar fecha de ida {string} y fecha de vuelta {string}', (fechaIda,fechaVuelta) => {
  pasajeCompraPage.selectFechaIda(fechaIda);
  pasajeCompraPage.selectFechaVuelta(fechaVuelta);
});

Then('hago click en el boton buscar', () => {
  pasajeCompraPage.botonBuscar();
});


