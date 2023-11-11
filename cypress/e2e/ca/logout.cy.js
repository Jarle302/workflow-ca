const username = "e2e4321@stud.noroff.no";
const password = "e2e43210";
const invalidUsername = "4321123@stud.noroff.no";
const invalidPassword = "43211234321123";
const loginPage = "https://jarle302.github.io/workflow-ca/";

describe("Can logout using the logout button", () => {
  beforeEach(() => {
    cy.visit(loginPage);
  });
  it("Can logout using the logout button", () => {
    cy.wait(1000);
    cy.get(".modal-footer button[type='button']:contains('Login')").click();
    cy.wait(1000);
    cy.get("#registerModal").should("not.be.visible");
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type(username);
    cy.get("#loginPassword").type(password);
    cy.get("#loginModal button:contains('Login')").click();
    cy.get("button:contains('Logout')").should("be.visible");
    cy.get("h4.profile-name")
      .contains(username.split("@")[0])
      .should("be.visible");
    cy.wait(1000);
    cy.get("button:contains('Logout')").click();
    cy.get(
      "div:contains('Please register or login to view this page.')",
    ).should("be.visible");
    cy.get("#registerModal").should("be.visible");
  });
});
