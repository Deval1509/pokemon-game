import "@testing-library/jest-dom";
export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    }
  };
  