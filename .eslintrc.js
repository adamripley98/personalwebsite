module.exports = {
    "extends": "eslint-config-airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": "off",
      "react/destructuring-assignment": ['enabled', 'never']
    },
    "globals": {
        "_": false,
        "window": false,
        "document": false,
        "autosize": false,
    }
};
