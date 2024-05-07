describe('Авторизация', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Образовательного учреждения')
          cy.get('.select-role-form > :nth-child(2)')
              .click()

              cy.log('Клик по выбору существующего кабинета')
              cy.get('.variants-company > :nth-child(1)')
                  .click()

                  cy.log('Ввод образовательного учреждения')
                  cy.get('div.search-input__field > .form-input--text')
                      .type(data.educ)

                      cy.log('Клик выбора образовательного учреждения')
                      cy.get('.search-input__item')
                          .click()

                          cy.log('Клик по кнопке для подтверждения')
                          cy.get('.choose-company > .button')
                              .click()
    })
  })
})


describe('Авторизация', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Образовательного учреждения')
          cy.get('.select-role-form > :nth-child(2)')
              .click()

              cy.log('Клик по выбору существующего кабинета')
              cy.get('.variants-company > :nth-child(1)')
                  .click()

                  cy.log('Ввод образовательного учреждения')
                  cy.get('div.search-input__field > .form-input--text')
                      .type(data.educ)

                      cy.log('Клик выбора образовательного учреждения')
                      cy.get('.search-input__item')
                          .click()

                          cy.log('Клик по кнопке для подтверждения')
                          cy.get('.choose-company > .button')
                              .click()
    })
  })
})
