import { asNegative } from "../challenges/0-document";

test("Makes positive number negative", () => {
    const testCase = asNegative(10);
    const expectedResult = -10;
    expected(testCase).toEqual(expectedResult);
})