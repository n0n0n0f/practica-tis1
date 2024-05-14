describe('Уведомления', () => {
    it('Просмотр уведомления', () => {
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

            cy.log('Клик по значку колокольчика')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg')
            .click()
            cy.log("Проверка на модальное окно уведомления");
        cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar').should('exist');
      })
    })
    it('Прочитать уведомления', () => {
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
            cy.wait(1500)

            cy.log('Клик по значку колокольчика')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg')
            .click()
            cy.wait(1500)
            cy.log('Прочитать все уведомления')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link')
            .click()
            cy.wait(1500)
            cy.log("Проверка на модальное окно уведомления");
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__items > :nth-child(1)').should('exist');
      })
    })
  })