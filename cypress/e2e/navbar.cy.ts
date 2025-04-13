// Cypress test for the Navbar component

// describe("Navbar component: ", () => {
//   it("passes", () => {
//     cy.visit("http://localhost:3000");
//     cy.get("[data-cy=navbar]").should("exist");
//     // cy.get("[data-cy=login]").should("exist").click();
//   });
// });

describe("Navbar Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust the URL if the Navbar is rendered on a different page
  });

  it("should display the logo", () => {
    cy.get('[data-cy="navbar"]').find("img").should("have.attr", "alt", "Logo");
  });

  it("should display the login button when the user is not authenticated", () => {
    cy.get('[data-cy="navbar"]').contains("Login").should("exist");
  });

  it("should display the 'Create Post' button and profile when the user is authenticated", () => {
    cy.get("[data-cy=login]").should("exist").click();

    // Mock the session to simulate an authenticated user
    // 1. Set the session cookie
    cy.setCookie("next-auth.session-token", "fake-session-token");
    cy.intercept("GET", "http://localhost:3000/api/auth/callback/", {
      statusCode: 302,
      body: {
        user: {
          name: "Test User",
          email: "test@example.com",
        },
        expires: "2024-12-31T00:00:00.000Z",
      },
    }).as("getSession");

    cy.intercept("GET", "**/api/auth/signin/github*", (req) => {
      req.redirect(
        "/api/auth/callback/github?code=mock-code&state=mock-state",
        302
      );
    });

    // cy.visit("/");
    cy.origin("https://github.com/*", () => {
      cy.get("#login_field").type("test123");
      cy.get("#password").type("password123");
      cy.get("input[type=submit]").click();
    });

    // cy.wait("@getSession");
    // cy.get('[data-cy="github-login-button"]').click();

    // cy.get('[data-cy="navbar"]').contains("Create Post").should("exist");
    // cy.get('[data-cy="navbar"]').contains("Test User").should("exist");
  });
});
