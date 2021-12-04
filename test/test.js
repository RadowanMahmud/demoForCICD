const request = require("supertest");
const app = require("../index");

describe("GET /jog/:a/:b", () => {
    it("responds with The sum is : 5", (done) => {
        request(app).get("/jog/3/2").expect("The sum is : 5", done);
    })
});