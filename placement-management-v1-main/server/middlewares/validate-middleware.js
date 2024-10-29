const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = "Fill the Correct Data";
    const extraDetails = err.errors[0].message;

    const error = {
      message,
      extraDetails,
    };
    // return res.status(400).json({ error: emess });
    next(error);
  }
};

module.exports = validate;
