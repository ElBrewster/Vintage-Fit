describe("My Pattern Details Display", () => {
  beforeEach(() => {
      cy.intercept("http://localhost:5500/patterns", { method: "GET", fixture: "../fixtures/fixtures.json" })
      cy.visit("http://localhost:5173/")
  })

  it("Should show the same nav bar as in the main display view", () => {
    cy.get("ul.browse-nav").contains("Browse").click()
    .url().should("eq", "http://localhost:5173/")
    cy.get("ul.profile-nav").contains("My Page").click()
    .url().should("eq", "http://localhost:5173/profile")
    cy.get("ul.your-fit-notes-nav").contains("Fit Notes").click()
    .url().should("eq", "http://localhost:5173/your-fit-notes")
  })
  
  it("Should grab a pattern from the main display", () => {
    cy.get(".portraits").should("exist")
    cy.get(".pattern-pic")
      .should("be.visible")
      .should("have.attr", "src")
      .should("include", "https://lh4.googleusercontent.com/xvOXF_Dxy8uOi9221-juJm67L5XwgbuVcj0U8Qq6n4ItjBBjEnOvH48eJ1T9Mf2abzg=w2400")
    cy.get(".pattern-pic")
      .should("have.attr", "alt")
      .should("contain", "picture of a pattern cover")
  })
    
  it("Should Show an Error with no pattern number in the url", () => {
      cy.visit("http://localhost:5173/details/")
      cy.get("h2").contains("Sorry! What you're looking for isn't here!")
  })
})