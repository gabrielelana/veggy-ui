#Code Jam - Veggy UI

###TODO
- [ ] La connessione al websocket andrebbe fatta sulla callback della post al login
- [x] Get elenco pomodori fatti 
- [x] Get elenco
- [ ] StartSharedPomodoro con payload timerIds degli utenti coinvolti
- [ ] Aggiungere gestione voidedPomodoro per gestione errori
- [x] FIX: error bar viene visualizzata ad-cazzum
- [x] Sul main, se non c'e' nello storage il login fa redirect su login
- [x] Separare i reducer nei 2 moduli (login, main)
- [x] Rename ErrorBar
- [x] Create oggetto per invio centralizzato dei comandi 
- [ ] FIX: Warning: setState(...): Can only update a mounted or mounting component. Sul passaggio da login a main.
- [ ] Aggiungere global settings per env
- [ ] Gestione pomodori offline
  - Se l'utente e' online l'ownership del pomodoro e' sul server e se l'utente va offline puo' solo aspettare che finisca il pomodoro
  - Se l'utente e' offline l'ownership del pomodoro e' del client e quando ha finito il pomodoro e si e' riconesso invia al server il log dei pomodori fatti


##Discuss
- Quando si collega un nuovo utente va inviato un evento
- Introdurre stream?


