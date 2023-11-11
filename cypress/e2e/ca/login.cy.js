const username = "e2e4321@stud.noroff.no";
const password = "e2e43210";
const invalidUsername = "4321123@stud.noroff.no";
const invalidPassword = "43211234321123";
const loginPage = "https://jarle302.github.io/workflow-ca/";

describe("the user can log in and access their profile", () => {
  beforeEach(() => {
    cy.visit(loginPage);
  });
  it("can type in login credentials and login", () => {
    cy.wait(1000);
    cy.get(".modal-footer button[type='button']:contains('Login')").click();
    cy.wait(1000);
    cy.get("#registerModal").should("not.be.visible");
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type(username);
    cy.get("#loginPassword").type(password);
    cy.get("#loginModal button:contains('Login')").click();
    cy.get("#loginModal").should("not.be.visible");
    cy.get("#registerModal").should("not.be.visible");
    cy.get("button:contains('Logout')").should("be.visible");
    cy.get("h4.profile-name")
      .contains(username.split("@")[0])
      .should("be.visible");
  });
  it("The user cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.wait(1000);
    cy.get(".modal-footer button[type='button']:contains('Login')").click();
    cy.wait(1000);
    cy.get("#registerModal").should("not.be.visible");
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type(invalidUsername);
    cy.get("#loginPassword").type(invalidPassword);
    cy.get("#loginModal button:contains('Login')").click();
    cy.url().should("include", loginPage);
    cy.window()
      .then((w) => {
        cy.stub(w, "alert").as("errorMsg");
      })
      .then(() => {
        cy.get("#loginEmail").type(invalidUsername);
        cy.get("#loginPassword").type(invalidPassword);
        cy.get("#loginModal button:contains('Login')").click();
        cy.get("@errorMsg").should(
          "have.been.calledWith",
          "Either your username was not found or your password is incorrect",
        );
      });
  });
});
