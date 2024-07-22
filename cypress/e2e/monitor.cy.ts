describe('Monitor Component E2E Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the Monitor page and display system status', () => {
    // Check if the status card is visible
    cy.get('.status-card').should('be.visible');

    // Check if the status information is visible
    cy.contains('System Status').should('be.visible');
    cy.contains('Status:').should('be.visible');
    cy.contains('Event Type:').should('be.visible');
    cy.contains('Message:').should('be.visible');
    cy.contains('Timestamp:').should('be.visible');
  });

  it('should display status information', () => {
    // Check initial status
    cy.get('.status-body').should('contain', 'Status:').and('contain', 'Event Type:').and('contain', 'Message:').and('contain', 'Timestamp:');

    // Mock an API response for predictable testing
    cy.intercept('GET', '/api/status', {
      statusCode: 200,
      body: {
        status: 'Operational',
        event_type: 'INFO',
        message: 'System is running smoothly',
        timestamp: new Date().toISOString()
      }
    }).as('getStatus');
  });

});
