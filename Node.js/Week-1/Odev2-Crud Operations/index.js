/**
 *  Please run the function one by one
 */

const fs = require("fs");

// write the file function
async function writeFile() {
  try {
    await fs.writeFile(
      "employees.json",
      '{"name": "Employee 1 Name", "salary": 2000}',
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
    console.log(`successfully writed`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
}

// read the file function
async function readFile() {
  try {
    await fs.readFile("employees.json", "utf8", (err, data) => {
      if (err) console.log(err);
      console.log(`data on file: ${data}`);
    });
    console.log(`successfully readed`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
}

// update the file function
async function updateFile(callback) {
  await fs.appendFile(
    "employees.json",
    '\n{"name": "Employee 2", "salary": 5500}',
    "utf8",
    (err) => {
      if (err) console.log(err);
    }
  );
  console.log("\nAfter Update: ");
  callback();
}

// delete the file
const deleteFile = () => {
  setTimeout(() => {
    fs.unlink("employees.json", (err) => {
      if (err) console.log(err);
      console.log("\nFile successfully deleted");
    });
  }, 1000);
};

writeFile();
// readFile();
// updateFile(readFile);
// deleteFile();
