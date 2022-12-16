import "mocha";
import chaiHttp from "chai-http";
import { use, expect, request } from "chai";

import app from "../src/app";

use(chaiHttp);

describe("Test Default", () => {
  it("Call index", () => {
    request(app)
      .get("/")
      .end((err, res) => {
        expect(res).have.status(200);
        expect(res.body).have.be.a("object");
        expect(res.body).have.property("message");
        expect(res.body.message).to.eq("Hello world!");
      });
  });
});
