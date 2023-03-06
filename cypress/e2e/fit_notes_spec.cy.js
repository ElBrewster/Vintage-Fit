describe("My Fit Notes Page View", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/your-fit-notes")
  })

  it("Should show the same nav bar as in the main display view", () => {
    cy.get("ul.browse-nav").contains("Browse").click()
      .url().should("eq", "http://localhost:5173/")
    cy.get("ul.profile-nav").contains("My Page").click()
      .url().should("eq", "http://localhost:5173/profile")
    cy.get("ul.your-fit-notes-nav").contains("Fit Notes").click()
      .url().should("eq", "http://localhost:5173/your-fit-notes")
  })

  it ("Should have some text", () => {
    cy.get("div.fit-notes-view").contains("Here are the fit notes youve shared with the community.");
    cy.get("h2").contains("Here are the fit notes youve shared with the community.");
    cy.get(".fit-notes-view") 
      .should("have.css", "background-image")
      .and("include", "http://localhost:5173/src/assets/pexels-alex-andrews.jpg")
  })
})