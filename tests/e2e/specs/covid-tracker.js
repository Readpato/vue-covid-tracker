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
  describe("Functionality", () => {
    it("Make sure the global data is loaded after mounting", () => {
      cy.visit(URL);
      cy.get("main div").should("contain", "Fetching Data");
      cy.wait(500);
      cy.get("main div").should("not.contain", "Fetching Data");
      cy.get("h2").should("contain", "Global");
    });
    it("Load up country data and return to global data", () => {
      cy.get("select").select("Argentina");
      cy.get("button").should("exist");
      cy.get("h2").should("contain", "Argentina");
      cy.get("button").click();
      cy.get("h2").should("contain", "Global");
      cy.get("button").should("not.exist");
    });
  });
});
