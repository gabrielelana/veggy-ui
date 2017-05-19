## Todo for V2 edition
- [x] Login on startup (as popup)
- [x] Add description to pomodoro
- [x] Generalize modal 
- [x] Update packages to latest versions
- [x] Update webpack (https://webpack.js.org/guides/migrating/)
- [x] Remove xstream. It's useless
- [x] Check uso `Object.assign` il primo parametro deve essere `{}`
- [x] Uniform action naming style with server
- [x] Spostare contenuto cartella `serverPush` in redux
- [ ] Togliere `webSocketActions`. Di fatto e' una mappa inutile.
- [ ] Ripassare i reducer per vedere quali prop dello stato servono e quali no (es. `isLoggedIn`)
- [ ] Refactoring `ResumeActions` troppa roba e poco funzionale
- [ ] Refactoring `MessageBar`, `NavBar` e altri in functions
- [ ] Better use of INITIAL_STATE
- [ ] Refactoring `TimerActions` (lines 7,8,9 portare fuori dal metodo)
- [ ] Tags projection
- [ ] Service worker for offline state
- [ ] Add default props to variuos 'general purpose' components
- [ ] Prepare some charts&diagrams to explain the global architecture
- [ ] More tests
- [ ] Partitioning the reducers (based on INITIAL_STATE root properties): every reducer must receive only its part of state (or - output its part of state?). Probably output it's better since it can happen that input is necessary to access different part - of the state
- [ ] Refactoring `webSocketActions`: convertire a map e vedere se spostare le chiamate al timer

## Questions for Gabriele
- /latest-pomodori should return the descriptions 


