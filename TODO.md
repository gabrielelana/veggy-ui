## Todo for V2 edition
- Update packages to latest versions
- Update webpack (https://webpack.js.org/guides/migrating/)
- Change history type (from hash to something better)
- More reactive with Rx.js (remove xstream)
- Better use of INITIAL_STATE
- Prepare some charts&diagrams to explain the global architecture
- More tests
- Switch to jest ? (instead of enzyme)
- Partitioning the reducers (based on INITIAL_STATE root properties): every reducer must receive only its part of state (or output its part of state?). Probably output it's better since it can happen that input is necessary to access different part of the state
