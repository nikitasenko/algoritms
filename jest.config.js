module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "/src/.*.test.(js|ts|tsx)?$",
  moduleFileExtensions: ["ts", "", "js"],
};