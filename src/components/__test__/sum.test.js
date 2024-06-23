import { sum } from "../sum"



test("should return sum of two nubers", () => { 


    const result = sum(3,4);



    // assertion
    expect(result).toBe(7);
})

