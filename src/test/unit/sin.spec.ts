import { expect, test, describe } from 'vitest';
import { isValidSIN, luhnCheck } from './../../utils/sin';

// Test isValidSIN()
describe('isValidSIN', () => {
    test('SIN that do not pass the Lunh algorithm should faild', () => {
        const passing = "130692544";
        expect(isValidSIN(passing)).toBe(true);
        const invalid = "130692541";
        expect(isValidSIN(invalid)).toBe(false);
    });

    test('SIN less than or greater than 9 length should fail', () => {
        const short = "13069254";
        expect(isValidSIN(short)).toBe(false);
        const long = "1306925444.";
        expect(isValidSIN(long)).toBe(false);
    });

    test('SIN starting with 0 or 8 should fail', () => {
        const starting0 = "012392817"; // Would pass Luhn algorithm.
        expect(isValidSIN(starting0)).toBe(false);
        const starting8 = "828293019"; // Would pass Luhn algorithm.
        expect(isValidSIN(starting8)).toBe(false);
    });

    test('SIN containing non digit chars should fail', () => {
        const letter = "1306925a4";
        expect(isValidSIN(letter)).toBe(false);
        const symbol = "130-92544";
        expect(isValidSIN(symbol)).toBe(false);
    });
});

// Test lunhCheck()
describe('luhnCheck', () => {
    test('should return false for SIN that fail checksum', () => {
        const starting0 = "012392817";
        expect(luhnCheck(starting0)).toBe(true);
        const starting8 = "828293019";
        expect(luhnCheck(starting8)).toBe(true);
        const invalidSIN = "828293011";
        expect(luhnCheck(invalidSIN)).toBe(false);
    });
});
