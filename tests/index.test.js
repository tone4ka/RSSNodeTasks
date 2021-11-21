const { exec } = require("child_process");
const start = require("../src/start");
const { Writable } = require("stream");

describe("Scenarios:", () => {
  test("Error scenario 2: Input: User passes the same cli argument twice; Result: Error message is shown; e.g. input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided some argument more than once", (done) => {
    const childProcess = exec("node src/index -c C1 -c ./output.txt");
    childProcess.stderr.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(
          "Error: You provided some argument more than once"
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  test("Error scenario 2: Input: User doesnt pass -c or --config argument; Result: Error message `Error: You should provide -c argument` shown", (done) => {
    const childProcess = exec(
      "node src/index -i ./inpuput.txt -o ./output.txt"
    );
    childProcess.stderr.on("data", (data) => {
      try {
        expect(data.trim()).toEqual("Error: You should provide -c argument");
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  test(`Error scenario 3: Input: User passes -i argument with path that doesn't exist or with no read access; Result: Error message "File not found" is shown`, (done) => {
    const childProcess = exec(
      "node src/index -c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./put.txt -o ./output.txt"
    );
    childProcess.stderr.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(`Incorrect input file name`);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  test(`Error scenario 4: Input: User passes -o argument with path to directory that doesn't exist or with no read access; Result: Error message "Incorrect output file name" is shown`, (done) => {
    const childProcess = exec(
      "node src/index -c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./input.txt -o ./out.txt"
    );
    childProcess.stderr.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(`Incorrect output file name`);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  test(`Error scenario 5: Input: User passes incorrent symbols in argument for --config; Result: Error message "Incorrect configuration entered" is shown`, (done) => {
    const childProcess = exec(
      "node src/index -c C2-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./input.txt -o ./out.txt"
    );
    childProcess.stderr.on("data", (data) => {
      try {
        expect(data.trim()).toEqual(`Incorrect configuration entered`);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  test(`Success scenario 1: Input: User passes correct sequence of symbols as argument for --config that matches regular expression; Result: test passed`, (done) => {
    const childProcess = exec('node src/index -c C1-R1-C0-C0-A-R0-R1-R1-A -i ./input.txt -o ./output.txt');
    childProcess.stdout.on('data', (data) => {
        try{
            expect(data.trim()).toEqual(`Encoding completed successfully`);
            done();
        } catch (err) {
            done(err)
        }
    });
  });
});
