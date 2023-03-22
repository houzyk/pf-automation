const vitalsFixture = require('../fixtures/vitals.json');

const sharedSuite = (url, metric, expectedScore) => {
  cy.request(`${url}&key=${Cypress.env('CWV_API_KEY')}`).as('response');

  cy.get('@response').should((response) => {
    expect(response.body.lighthouseResult.categories[metric].score)
    .to.be.greaterThan(expectedScore)
  });
}

describe('Core Web Vitals Tests', () => {

  it('Performance - Desktop', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.performance['param-desktop']}`,
      'performance',
      vitalsFixture.metrics.performance.expectedScore
    );
  });

  it('Performance - Mobile', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.performance['param-mobile']}`,
      'performance',
      vitalsFixture.metrics.performance.expectedScore
    );
  });

  it('Accessibility - Desktop', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.accessibility['param-desktop']}`,
      'accessibility',
      vitalsFixture.metrics.accessibility.expectedScore
    );
  });

  it('Accessibility - Mobile', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.accessibility['param-mobile']}`,
      'accessibility',
      vitalsFixture.metrics.accessibility.expectedScore
    );
  });

  it('SEO - Desktop', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.seo['param-desktop']}`,
      'seo',
      vitalsFixture.metrics.seo.expectedScore
    );
  });

  it('SEO - Mobile', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics.seo['param-mobile']}`,
      'seo',
      vitalsFixture.metrics.seo.expectedScore
    );
  });

  it('Best-Practices - Desktop', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics['best-practices']['param-desktop']}`,
      'best-practices',
      vitalsFixture.metrics.seo.expectedScore
    );
  });

  it('Best-Practices - Mobile', () => {
    sharedSuite(
      `${vitalsFixture.endpoint}${vitalsFixture.metrics['best-practices']['param-mobile']}`,
      'best-practices',
      vitalsFixture.metrics['best-practices'].expectedScore
    );
  });

})