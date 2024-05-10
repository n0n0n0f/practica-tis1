describe('Добавление роли Студента(позитивная)', () => {
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

              cy.log('Клик по кнопке выбрать роль Студента')
              cy.get('.select-role-form > :nth-child(3)')
                  .click()
                  cy.log("Проверка что пользователь успешно добавил роль");
                  cy.url().should('equal', 'https://dev.profteam.su/account/main');    
    })
  })
})

