const express = require("express");
const adminController = require("../controllers/admin-controller");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

const authMiddleWare = require("../middlewares/auth-middleware");
const validate = require("../middlewares/validate-middleware");
const { newCompany, getCompany, deleteCompanybyId } = require("../controllers/Company-controller");

router
  .route("/users")
  .get(authMiddleWare, adminMiddleware, adminController.getAllUsers);
router
  .route("/users/update:id")
  .patch(authMiddleWare, adminController.updateUserById);
router
  .route("/contacts")
  .get(authMiddleWare, adminMiddleware, adminController.getAllContacts);
router
  .route("/company")
  .post(authMiddleWare, adminMiddleware, newCompany);
router
  .route("/allCompanies")
  .get(authMiddleWare, adminMiddleware, getCompany);
router
  .route("/allCompany")
  .get(getCompany);
router
  .route("/users/delete:id")
  .delete(authMiddleWare, adminController.deleteUserById);
router
  .route("/allCompanies/delete:id")
  .delete(authMiddleWare, deleteCompanybyId);
module.exports = router;
