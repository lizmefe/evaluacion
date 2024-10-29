Feature: The Google

  I want to open Google page

  
  Scenario: Opening a Tornado bus network page
    Given abro la URL
    When el logo carga correctamente
    Then la pagina cargo correctamente

  @focus
   Scenario: Dado que filtro los vuelos
    Given abro la URL
    When selecciono el tipo de vuelo "Ida y vuelta"
    When selecciono la ciudad de origen "Kansas City"
    When selecciono la ciudad de destino "Zitacuaro"
    And seleccionar la cantidad de pasajeros "3"
    And seleccionar fecha de ida "10/30/2024" y fecha de vuelta "11/15/2024"
    Then hago click en el boton buscar

