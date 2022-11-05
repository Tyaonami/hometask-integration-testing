# hometask-integration-testing

## Project set up and run the tests  

- Clone this repository to your workstation.  
- Go to the root folder of the project.  
- Run `yarn install` to install all dependencies. 
- Run `yarn test` to check test command output. 
- The concole output will show you the result. 

### Test console output example
```
yarn test
yarn run v1.22.19
$ jest
 PASS  tests/rectangle.test.js
  ✓ correctly calculates the perimeter (1 ms)
  ✓ correctly calculates the area
  ✓ should display correct information about the rectangle (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.243 s
Ran all test suites.
Done in 0.70s.

```