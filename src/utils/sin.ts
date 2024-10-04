// The assumptions of this function are based on https://loanscanada.ca/money/what-is-a-social-insurance-number-sin/.    
export function isValidSIN(sin: string): boolean {
    if (
        sin.length !== 9 ||
        // SIN do not start with 8 or 0.
        // These requirements were not listed in the assignment and can be removed if deemed not necessary for this validation.
        sin[0] === '8' || sin[0] === '0' ||
        // Must consist of only digits.
        // Number(sin) could have interpretation issues if the SIN starts with 0 (already caught by the previous condition). Regex can be used as a more rigorous check.
        isNaN(Number(sin))
    ) {
        return false;
    }
    return luhnCheck(sin);
}

// https://www.geeksforgeeks.org/luhn-algorithm/
export function luhnCheck(sin: string): boolean {
    let total = 0;

    // Start from the rightmost digit.
    for (let i = sin.length - 1; i >= 0; i--) {
        let valToAdd = Number(sin[i]);

        // Double the value of every second digit.
        if ((sin.length - 1 - i) % 2 === 1) {
            const doubledVal = valToAdd * 2;
            // If the doubledVal is greater than 9, then we add the digits of the product - (12: 1 + 2 = 3).
            valToAdd = doubledVal > 9 ? doubledVal - 9 : doubledVal;
        }
        total += valToAdd;
    }
    // If the total modulo 10 is equal to 0 then the number is valid.
    return (total % 10 === 0);
}
