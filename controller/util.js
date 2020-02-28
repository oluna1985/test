
export function set_input(element, value) {
    cy.get(element).type(value);
}

export function click(element) {
    cy.get(element).click();
}

export function click_force(element) {
    cy.get(element).click({ force: true });
}


export function verify_message(element, menssage){
    cy.get(element).should('contain', menssage)
}

export function select(element, name,  value){
    cy.get(element).select(name).should('have.value', value);
}