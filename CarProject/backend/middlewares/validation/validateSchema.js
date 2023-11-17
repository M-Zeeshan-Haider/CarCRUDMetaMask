const validate = (schema) => async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: true });
      next();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
  
  module.exports = validate;
  