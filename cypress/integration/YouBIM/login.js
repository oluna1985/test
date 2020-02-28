/// <reference types="Cypress" />
const log = require('../../../controller/login')

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://test.youbim.com/')
    })
    it('login_success', () => {
         //1. User accesst to system
          log.login(1);

      })
  })
  