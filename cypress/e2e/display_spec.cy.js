describe("App and its main browser page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5500/patterns", { method: "GET", fixture: "../fixtures/fixture.json" })
    cy.visit("http://localhost:5173/")
  })
  it('Should show the main page of the app', () => {
    cy.get("header").should("have.class", "my-header")
    cy.get("h1").contains("Vintage Fit")
    cy.get("nav").contains("Browse")
  })

  it("Should have a nav bar that navigates to different page views using react router", () => {
    cy.get("ul.browse-nav").contains("Browse").click()
      .url().should("eq", "http://localhost:5173/")
    cy.get("ul.profile-nav").contains("My Page").click()
      .url().should("eq", "http://localhost:5173/profile")
    cy.get("ul.your-fit-notes-nav").contains("Fit Notes").click()
      .url().should("eq", "http://localhost:5173/your-fit-notes")
  })

  it("Should show patterns in the main display", () => {
    cy.get(".portraits").should("exist")
    cy.get(".pattern-pic").should("be.visible")
    cy.get(".portrait-heading").contains("Butterick Retro 52");
    cy.get(".portrait-button").contains("Community Notes").click()
      .url().should("eq", "http://localhost:5173/details/1")
  })
})