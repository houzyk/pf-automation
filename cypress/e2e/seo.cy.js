const generalFixture = require("../fixtures/general.json");
const seoFixture = require("../fixtures/seo.json");

describe('SEO Test', () => {

  beforeEach(() => {
    cy.visit(generalFixture.url);
  })

  it('should have a favicon', () => {
    cy.document().its('head').find(seoFixture.favicon.selector)
    .should(seoFixture.favicon.specifier.shouldhave, seoFixture.favicon.specifier.value)
    .should('eq', seoFixture.favicon.expectedData);
  });

  it('should have correct meta description', () => {
    cy.document().its('head').find(seoFixture.metaDescription.selector)
    .should(seoFixture.metaDescription.specifier.shouldhave, seoFixture.metaDescription.specifier.value)
    .should('eq', seoFixture.metaDescription.expectedData);
  });

  it('should have correct meta title', () => {
    cy.document().its('head').find(seoFixture.metaTitle.selector)
    .contains(seoFixture.metaTitle.expectedData);
  });

  it('should have correct canonical URL', () => {
    cy.document().its("head").find(seoFixture.canonicalURL.selector)
    .should(seoFixture.canonicalURL.specifier.shouldhave, seoFixture.canonicalURL.specifier.value)
    .should('eq', seoFixture.canonicalURL.expectedData);
  });
});