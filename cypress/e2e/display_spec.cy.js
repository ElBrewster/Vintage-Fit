describe("My App and its Main Browser Page", () => {
  beforeEach(() => {
    cy.intercept("https://api-patterns-for-ash.vercel.app/patterns", { method: "GET", fixture: "../fixtures/fixtures.json" })
    cy.visit("http://localhost:5173/")
  })

  it ("Should show an error when it has the wrong url input", () => {
    cy.visit("http://localhost:5173/*")
    cy.get("h2").contains("Sorry! What you're looking for isn't here!")
  })

  it("Should show the main page of the app", () => {
    cy.get("header").should("have.class", "my-header")
    cy.get("h1").contains("Vintage Fit")
    cy.get("svg.squirrel").should("be.visible")
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