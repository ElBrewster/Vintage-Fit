describe("My Profile Page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5500/patterns", { method: "GET", fixture: "../fixtures/fixture.json"})
    cy.visit("http://localhost:5173/profile/")
  })

  it ("Should show an error when it has the wrong url input", () => {
    cy.visit("http://localhost:5173/profile/*")
    cy.get("h2").contains("Sorry! What you're looking for isn't here!")
  })

  it("Should show the same nav bar as in the main display view", () => {
    cy.get("ul.browse-nav").contains("Browse").click()
      .url().should("eq", "http://localhost:5173/")
    cy.get("ul.profile-nav").contains("My Page").click()
      .url().should("eq", "http://localhost:5173/profile")
    cy.get("ul.your-fit-notes-nav").contains("Fit Notes").click()
      .url().should("eq", "http://localhost:5173/your-fit-notes")
  })

  it ("Should have some text and a background image", () => {
    cy.get("h2").contains("I love sewing!")
    cy.get(".profile-container")
      .should("have.css", "background-image")
      .and("include", "http://localhost:5173/src/assets/pexels-pixabay.jpg")
  })
})