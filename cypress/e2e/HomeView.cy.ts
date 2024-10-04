describe('Input Component', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(1536, 960)
    })

    it('moves focus to next input after typing', () => {
        cy.get('input[type="text"]').first().type('1')
        cy.get('input[type="text"]').eq(1).should('be.focused')
    })

    it('moves focus to previous input on backspace when current input is empty', () => {
        cy.get('input[type="text"]').eq(0).type('1')
        cy.get('input[type="text"]').eq(1).type('2')
        cy.get('input[type="text"]').eq(2).type('3')
        cy.get('input[type="text"]').eq(2).clear().type('{backspace}')
        cy.get('input[type="text"]').eq(1).should('be.focused')
        cy.get('input[type="text"]').eq(1).clear().type('{backspace}')
        cy.get('input[type="text"]').eq(0).should('be.focused')
    })

    it('clears all inputs when clear button is clicked', () => {
        cy.get('input[type="text"]').each((inputField) => {
          cy.wrap(inputField).type('5')
        })
        cy.get('button').contains('CLEAR').click()
        cy.get('input[type="text"]').each((inputField) => {
          cy.wrap(inputField).should('have.value', '')
        })
      })

    it('input fields turn red due to invalid SIN starting with 0', () => {
        const starting0 = "012392817"
        cy.get('input[type="text"]').each((inputField, index) => {
            cy.wrap(inputField).type(starting0[index])
        })
        cy.get('input[type="text"]').should('have.class', 'bg-red-100')
    })

    it('input fields turn red due to invalid SIN starting with 8', () => {
        const starting8 = "828293019"
        cy.get('input[type="text"]').each((inputField, index) => {
            cy.wrap(inputField).type(starting8[index])
        })
        cy.get('input[type="text"]').should('have.class', 'bg-red-100')
    })

    it('input fields do not change color due to invalid SIN containing symbol', () => {
        const symbol = "130-92544"
        cy.get('input[type="text"]').each((inputField, index) => {
            cy.wrap(inputField).type(symbol[index])
        })
        cy.get('input[type="text"]').should('not.have.class', 'bg-red-100')
        cy.get('input[type="text"]').should('not.have.class', 'bg-green-100')
    })

    it('input fields do not change color due to invalid SIN containing letter', () => {
        const letter = "1306925a4"
        cy.get('input[type="text"]').each((inputField, index) => {
            cy.wrap(inputField).type(letter[index])
        })
        cy.get('input[type="text"]').should('not.have.class', 'bg-red-100')
        cy.get('input[type="text"]').should('not.have.class', 'bg-green-100')
    })

    it('input fields turn green due to valid SIN', () => {
        const validSIN = "130692544"
        cy.get('input[type="text"]').each((inputField, index) => {
            cy.wrap(inputField).type(validSIN[index])
        })
        cy.get('input[type="text"]').should('have.class', 'bg-green-100')
    })
})

describe('Details Component', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(1536, 960)
    })

    it('displays Instructions open by default', () => {
        cy.get('.collapse-title').first().should('contain', 'Instructions')
        cy.get('.collapse-content').first().should('be.visible')
        cy.get('.collapse-title').eq(1).should('contain', 'Project Details')
        cy.get('.collapse-content').eq(1).should('not.be.visible')
    })

    it('displays correct instructions in Instructions accordion', () => {
        cy.get('.collapse-content').first().within(() => {
            cy.contains('Enter the 9-digit SIN number into the input field below.')
            cy.contains('If the SIN is valid, the input field will display GREEN.')
            cy.contains('If the SIN is invalid, the input field will display RED.')
            cy.contains('Click the CLEAR button to clear the input fields.')
            cy.contains('More details on SIN validation can be found').find('a').should('have.attr', 'href', 'https://loanscanada.ca/money/what-is-a-social-insurance-number-sin/')
        })
    })

    it('opens Project Details and closes Instructions when clicked', () => {
        cy.get('input[type="radio"]').eq(1).click()
        cy.get('.collapse-content').eq(1).should('be.visible')
        cy.get('.collapse-content').first().should('not.be.visible')
    })

    it('displays correct information in Project Details accordion', () => {
        cy.get('input[type="radio"]').eq(1).click()
        cy.get('.collapse-content').eq(1).within(() => {
            cy.contains('Edmond Lee')
            cy.contains('https://github.com/eddstng/sinamon')
        })
    })
})

describe('Title Component', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(1536, 960)
    })

    it('displays h1 title', () => {
        cy.get('h1').contains("SIN VALIDATOR")
       
    })
})
