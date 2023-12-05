import { userModel } from "../Database/models.js";

async function userRoutes(fastify, options) {
  fastify.post("/user/Login", async (req, res) => {
    const bodyData = req.body;
    console.log(JSON.stringify(req.body));
    let user = await userModel
      .find({ userName: bodyData.user, password: bodyData.pass })
      .catch((err) => {});
    if (user.length != 0) {
      res.code(200).send(true);
    } else {
      res.code(404).send(false);
    }
  });
}

export default userRoutes;
