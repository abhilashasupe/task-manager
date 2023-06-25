const express = require("express")
const router = express.Router()

const {getreq, postreq, update, delreq} = require("../controllers/basic")

router.route("/getreq").get(getreq)
router.route("/postreq").post(postreq)
router.route("/putreq").put(update)
router.route("/delreq").delete(delreq)

module.exports = router