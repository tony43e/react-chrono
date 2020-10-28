/// <reference types="cypress" />

context('Chrono.Vertical.Alternating.Mixed', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/vertical-alternating-mixed');
  });

  it('check length', () => {
    cy.get('.branch-main').should('have.length', 13);
  });

  it('check card elements', () => {
    cy.get('.branch-main').first().children().should('have.length', 3);
  });

  it('check timeline title for first item', () => {
    cy.get('.branch-main>div').eq(1).last().should('contain', 'May 1940');
  });

  it('check timeline card contents', () => {
    cy.get('.branch-main')
      .eq(3)
      .find('.timeline-card-content')
      .children()
      .should('have.length', 3);
  });

  it('check card title', () => {
    cy.get('.branch-main')
      .eq(0)
      .find('.card-title')
      .should('contain', 'Dunkirk');
  });

  it('check card description', () => {
    cy.get('.branch-main')
      .eq(0)
      .find('.card-description>p')
      .should(
        'contain',
        'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.',
      );
  });

  it('check card sub title', () => {
    cy.get('.branch-main')
      .eq(1)
      .find('.card-sub-title')
      .should('contain', 'RAF Spitfire pilots scramble for their planes');
  });

  it('check card active', () => {
    cy.get('.branch-main')
      .eq(1)
      .find('.timeline-card-content')
      .click()
      .should('have.class', 'active');
  });

  it('check read more action', () => {
    cy.get('.branch-main')
      .eq(1)
      .find('.card-description')
      .should('have.class', 'show-less');
    cy.get('.branch-main').eq(1).find('.show-more').click();
    cy.wait(500);
    cy.get('.branch-main')
      .eq(1)
      .find('.card-description')
      .should('not.have.class', 'show-less');
  });

  it('check video', () => {
    cy.get('.branch-main')
      .eq(2)
      .find('video>source')
      .should('have.attr', 'src', '/operation-barbarasso.mp4');
  });

  it('check video', () => {
    cy.get('.branch-main')
      .eq(8)
      .find('video')
      .should('have.css', 'visibility', 'hidden');
  });

  it('check scroll', () => {
    cy.get('.timeline-main-wrapper').scrollTo('bottom');
    cy.wait(1000);
    cy.get('.branch-main')
      .last()
      .find('.card-content-wrapper')
      .should('have.class', 'visible');

    cy.get('.timeline-main-wrapper').scrollTo('top');
    cy.wait(1000);
    cy.get('.branch-main')
      .first()
      .find('.card-content-wrapper')
      .should('have.class', 'visible');
  });

  it('use nav controls', () => {
    cy.get('.timeline-controls>li').eq(3).click();
    cy.wait(700);
    cy.get('.branch-main')
      .last()
      .find('.timeline-card-content')
      .should('have.class', 'active');

    cy.get('.timeline-controls>li').eq(0).click();
    cy.wait(700);
    cy.get('.branch-main')
    .first()
    .find('.timeline-card-content')
    .should('have.class', 'active');
    
    cy.get('.timeline-controls>li').eq(2).click();
    cy.wait(250);
    cy.get('.timeline-controls>li').eq(2).click();
    cy.wait(250);
    cy.get('.timeline-controls>li').eq(2).click();
    cy.wait(250);
    cy.get('.timeline-controls>li').eq(2).click();
    cy.wait(250);
    cy.get('.branch-main')
    .eq(4)
    .find('.timeline-card-content')
    .should('have.class', 'active');
    
    cy.get('.timeline-controls>li').eq(1).click();
    cy.get('.branch-main')
    .eq(3)
    .find('.timeline-card-content')
    .should('have.class', 'active');
    
  });
});
