const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    const file = fs.readFileSync(fileName, "utf8");
    const dataArray = file.split(",");

    if (dataArray == null) {
      reject("Encountered error while reading file contents..!");
    }
    resolve(dataArray);
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (fileContents == null) {
      reject("Encountered error while reading file contents..!");
    }
    const upperArr = fileContents.map((str) => str.toUpperCase());
    console.log("the upper case arrays are1 ", upperArr);
    resolve(upperArr);
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  try {
    data = 
    read(fileName)
      .then((result) => {
        convertToUpperCase(result);
      })
      // .then((val) => {
      //   console.log("the upper case arrays are2 ", val);
      // });

    console.log("the upper case arrays are ", data);
    cb(null, data);
  } catch (err) {
    cb("Encountered error while reading file contents..!");
  }
};

module.exports = {
  readAndConvertFileContents,
};

// const file = fs.readFileSync(fileName, 'utf8')
// const i = file.split(',')
// const dataArray =[]
// for( const element of i){
//   dataArray = dataArray.push(element.toUpperCase())
// }
// const dataArray = i.toUpperCase()
// console.log(dataArray)
