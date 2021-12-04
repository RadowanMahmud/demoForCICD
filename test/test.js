const request = require("supertest");
const app = require("../index");

describe("GET /add/:a/:b", () => {
    it("responds with The sum is : 4", (done) => {
        request(app).get("/add/2/2").expect("The sum is : 4", done);
    })
});