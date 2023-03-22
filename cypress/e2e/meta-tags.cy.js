const metaTagFixture = require("../fixtures/meta-tag.json");

describe('Meta Tags Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Favicon', () => {
    cy.document().its('head').find(metaTagFixture.favicon.selector)
    .should(metaTagFixture.favicon.specifier.shouldhave, metaTagFixture.favicon.specifier.value)
    .should('eq', metaTagFixture.favicon.expectedData);
  });

  it('Meta Description', () => {
    cy.document().its('head').find(metaTagFixture.metaDescription.selector)
    .should(metaTagFixture.metaDescription.specifier.shouldhave, metaTagFixture.metaDescription.specifier.value)
    .should('eq', metaTagFixture.metaDescription.expectedData);
  });

  it('Meta Title', () => {
    cy.document().its('head').find(metaTagFixture.metaTitle.selector)
    .contains(metaTagFixture.metaTitle.expectedData);
  });

  it('Canonical URL', () => {
    cy.document().its("head").find(metaTagFixture.canonicalURL.selector)
    .should(metaTagFixture.canonicalURL.specifier.shouldhave, metaTagFixture.canonicalURL.specifier.value)
    .should('eq', metaTagFixture.canonicalURL.expectedData);
  });
});