describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
});

it('should display alert when email and password are wrong', () => {
  cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
  cy.get('input[placeholder="Password"]').type('wrong_password');

  cy.get('button').contains(/^Login$/).click();

  cy.on('window:alert', (str) => {
    expect(str).tp.equal('email or password is wrong');
  });
});

it('should display homepage when username and password are correct', () => {
  cy.get('input[placeholder="Email"]').type('123321321@gmail.com');
  cy.get('input[placeholder="Password"]').type('123321321');

  cy.get('button').contains(/^Login$/).click();

  // verif kalau elemen home uda muncul
  cy.get('nav').contains(/^Forum$/).should('be.visible');
});
