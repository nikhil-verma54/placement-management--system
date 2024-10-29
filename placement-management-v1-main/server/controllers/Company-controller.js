const Company = require("../models/company-model");

const newCompany = async (req, res) => {
  try {
    const response = await req.body;
    await Company.create(response);
    return res.status(200).json({ message: "Company Details added to our Database Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Company Already exits, please add new Company" });
  }
};

const getCompany = async (req, res) => {
  try {
    // Get all the data from the API.
    let response = await Company.find();
    if (!response) {
      res.status(404).json({ mgs: "No Company Found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log(`Company : ${error}`);
  }
};

// Delete Company
const deleteCompanybyId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`ObjectId(${id})`)
    await Company.deleteOne({ _id: `ObjectId(${id})` });
    if (res.status === 200) {
      return json({ message: `Company Deleted Successfully` });
    } else {
      return json({ error: res });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { newCompany, getCompany, deleteCompanybyId };
