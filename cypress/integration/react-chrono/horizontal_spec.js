/// <reference types="cypress" />

context('Chrono.Vertical.Basic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/horizontal');
  });

  // it('check length', () => {
  //   cy.get('.timeline-horz-item-container').should("have.length", 13);
  // })

  // it('check card contents', () => {
  //   cy.get(".timeline-card-content").children().should("have.length", 4)
  // });

  // it("check timeline controls", () => {
  //   cy.get(".timeline-controls").children().should("have.length", 5)
  // });

  // it('check read more', () => {
  //   cy.get('.timeline-card-content').within(() => {
  //     cy.get('.card-description').should('have.class', 'show-less');
  //     cy.get('.show-more').click();
  //     cy.wait(400);
  //     cy.get('.card-description').should('not.have.class', 'show-less');
  //   });
  // });

  // it('interact with timeline point', () => {
  //   const pick = 12;
  //   cy.get('.timeline-main-wrapper').scrollTo('right');
  //   cy.wait(1500);

  //   cy.get('.timeline-horz-item-container')
  //     .eq(pick)
  //     .find('.timeline-circle')
  //     .click();
  //   cy.wait(400);

  //   cy.get('.timeline-card-content').within(() => {
  //     cy.get('.card-title').should('contain', 'Nagasaki');
  //     cy.get('.card-sub-title').should(
  //       'contain',
  //       'Atomic bomb mushroom cloud over the Japanese city of Nagasaki',
  //     );
  //   });

  //   cy.get('.timeline-main-wrapper').scrollTo('left');
  //   cy.wait(1500);
  //   cy.get('.timeline-horz-item-container')
  //     .eq(0)
  //     .find('.timeline-circle')
  //     .click();
  //   cy.wait(400);
  //   cy.get('.timeline-card-content').within(() => {
  //     cy.get('.card-title').should('contain', 'Dunkirk');
  //   });
  // });

  it('check navigation controls', () => {
    cy.get('.timeline-controls').within(() => {
      cy.get('li').eq(3).click();
      cy.wait(1500);
      cy.get('li')
        .eq(3)
        .find('button')
        .should('have.css', 'pointer-events', 'none');

      cy.get('li').eq(0).click();
      cy.wait(1500);
      cy.get('li')
        .eq(0)
        .find('button')
        .should('have.css', 'pointer-events', 'none');

      cy.get('li')
        .eq(2)
        .within((ele) => {
          cy.get(ele).click();
          cy.get(ele).click();
        });
    });
    cy.wait(1500);

    cy.get('.timeline-card-content').within(() => {
      cy.get('.card-title').should('contain', 'Operation Barbarossa');
      cy.get('.card-sub-title').should(
        'contain',
        'A column of Red Army prisoners taken during the first days of the German invasion',
      );
    });

    cy.get('.timeline-controls').within(() => {
      cy.get('li').eq(1).click();
    });
    cy.wait(1000);
    cy.get('.timeline-card-content').within(() => {
      cy.get('.card-title').should('contain', 'The Battle of Britain');
      cy.get('.card-sub-title').should(
        'contain',
        'RAF Spitfire pilots scramble for their planes',
      );
    });
  });
});
