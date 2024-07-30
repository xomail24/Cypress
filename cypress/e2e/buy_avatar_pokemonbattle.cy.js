describe('Покупка нового аватара для тренера', function () {


    it('Покупка нового аватара для тренера', function () {
            cy.visit('https://pokemonbattle.me/login'); // загрузка формы авторизации
            cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели правильный логин в поле
            cy.get('#password').type('USER_PASSWORD'); // ввели правильный пароль в поле
            cy.get('.auth__button').click(); // нажали войти
            cy.get('.header__btns > [href="/shop"]').first().click(); // клик по кнопке Магазин
            cy.get('.available > button').first().click();  // клик по кнопке Купить у первого доступного аватара
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // ввод номера карты
            cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // ввод срока действия карты
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввод кода 
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alex Alexa'); // ввод имени и фамилии
            cy.get('.pay-btn').click();// клик по кнопке Оплатить
            cy.get('#cardnumber').type('56456'); // ввод кода из СМС
            cy.get('.payment__submit-button').click(); // клик по кнопке Отправить
            cy.get('.payment__font-for-success').should('be.visible'); // текст Покупка прошла успешно виден для пользователя
               })


    })