## Todo for V2 edition
- [x] Login on startup (as popup)
- [x] Add description to pomodoro
- [x] Generalize modal 
- [x] Update packages to latest versions
- [x] Update webpack (https://webpack.js.org/guides/migrating/)
- [x] Remove xstream. It's useless
- [ ] Uniform action naming style with server
- [ ] Add default props to variuos 'general purpose' components
- [ ] Better use of INITIAL_STATE
- [ ] Prepare some charts&diagrams to explain the global architecture
- [ ] More tests
- [ ] Partitioning the reducers (based on INITIAL_STATE root properties): every reducer must receive only its part of state (or - output its part of state?). Probably output it's better since it can happen that input is necessary to access different part - of the state
- [ ] Togliere `webSocketActions`. Di fatto e' una mappa inutile.
- [ ] Refactoring `webSocketActions`: convertire a map e vedere se spostare le chiamate al timer
- [ ] Refactoring `MessageBar`, `NavBar` e altri in functions
- [ ] Refactoring `ResumeActions` troppa roba e poco funzionale
- [ ] Refactoring `TimerActions` (lines 7,8,9 portare fuori dal metodo)
- [ ] Ripassare i reducer per vedere quali prop dello stato servono e quali no (es. `isLoggedIn`)
- [x] Check uso `Object.assign` il primo parametro deve essere `{}`
- [x] Spostare contenuto cartella `serverPush` in redux

## Questions for Gabriele
- /latest-pomodori should return the descriptions 
- Can we change the events naming style? (something like `POMODORO_STARTED`)

