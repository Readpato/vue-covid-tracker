// https://docs.cypress.io/api/table-of-contents

/// <reference types="cypress" />

const URL = "http://192.168.1.8:8080/";

context("COVID-19 Tracker App", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Layout", () => {
    it("Make sure the layout has been correctly loadded", () => {
      cy.get("header")
        .should("have.css", "background-color", "rgb(30, 64, 175)")
        .and("contain", "Covid-19 Tracker");
      cy.get("h2").should("contain", "Global");
      cy.get(".grid").should("contain", "Cases").and("contain", "Deaths");
      cy.get("select").should("exist");
    });
  });
});
