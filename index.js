module.exports = {
  globals: {
    MyGlobal: true
  },
  rules: {
    "comma-dangle": "warn",
    "no-trailing-spaces": "warn",
    "semi": "warn",
    "quotes": [2, "single", { "avoidEscape": true }],
    "@typescript-eslint/explicit-function-return-type": "error"
  }
};