const { exec } = require('child_process');

test('Error scenarios: 1 Input: User passes the same cli argument twice; Result: Error message is shown; e.g. input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided some argument more than once', (done) => {
    const childProcess = exec('node src/index -c C1 -c ./output.txt');
    childProcess.stderr.on('data', (data) => {
        try{
            expect(data.trim()).toEqual('Error: You provided some argument more than once');
            done();
        } catch (err) {
            done(err)
        }
    });
})

test('Error scenarios: Input: User doesnt pass -c or --config argument; Result: Error message is shown', (done) => {
  const childProcess = exec('node src/index -i ./input.txt -o ./output.txt');
  childProcess.stderr.on('data', (data) => {
      try{
          expect(data.trim()).toEqual('Error: You should provide -c argument');
          done();
      } catch (err) {
          done(err)
      }
  });
})