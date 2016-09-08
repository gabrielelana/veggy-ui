#Code Jam - Veggy UI

###TODO
- La connessione al websocket andrebbe fatta sulla callback della post al login
- Get elenco pomodori fatti 
- Get elenco utenti online
- StartSharedPomodoro con payload timerIds degli utenti coinvolti
- Aggiungere gestione voidedPomodoro per gestione errori
- FIX: error bar viene visualizzata ad-cazzum
- Gestione pomodori offline
  - Se l'utente e' online l'ownership del pomodoro e' sul server e se l'utente va offline puo' solo aspettare che finisca il pomodoro
  - Se l'utente e' offline l'ownership del pomodoro e' del client e quando ha finito il pomodoro e si e' riconesso invia al server il log dei pomodori fatti
- Sul main, se non c'e' nello storage il login fa redirect su login
- Separare i reducer nei 2 moduli (login, main)
- Rename ErrorBar
- Create oggetto per invio centralizzato dei comandi 
- FIX: Warning: setState(...): Can only update a mounted or mounting component. Sul passaggio da login a main.



##Discuss
- Quando si collega un nuovo utente va inviato un evento
- Introdurre stream?


