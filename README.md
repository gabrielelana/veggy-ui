Code Jam - Veggy UI
===

**TODO**
--
- Print code snippets
- Print Schedule


**Schedule**
--

*DAY-1*

- INTRODUCTION [GL] [2P] [9:00-10:00]
- WALKING-SKELETON SERVER [GL] [2P] [10:00-11:00]
- BREAK ~20'
- START-SQUASH-POMODORO SERVER [GL] [4P] [11:00-13:00]
- LUNCH ~60'
- WALKING-SKELETON CLIENT [EDB] [2P] [14:00-15:00]
    - `start-here`
    - Show build environment
    - React Hello test
    - `work-on-ping`
    - React Ping test
    - React implementation of Ping + listening on WS (works with the server)
    - at the end we have a complete React environment ready to be used
    - `ping`
- START-POMODORO CLIENT [EDB] [4P+BREAK] [15:00-17:00]
    - `work-on-start-pomodoro`
    - first implementation with full state management inside the component
    - `start-pomodoro`
    - refactoring to extract the component state (start but maybe jump to the end)
    - `start-pomodoro-flux`
- SQUASH-POMODORO CLIENT [EDB] [2P] [17:00-18:00]
    - `start-pomodoro-flux`
    - exercise
    - `squash-pomodoro`

*DAY-2*

- Q&A [1P] [9:00-9:30]
- LOGIN SERVER [2P] [GL] [9:30-10:30]
- LOGIN CLIENT [1P] [EDB] [10:30-11:00]
    - `work-on-login`
    - introduction of React router
    - implement Login command
    - store user informations
    - redirect to main page
    - `login`
- BREAK ~20'
- PROJECTION SERVER [GL] [2P] [11:00-12:00]
- UI AND RESUCE CLIENT [EDB] [2P] [12:00-13:00]
    - resume pomodoro from projection
    - `resume`
    - pomodoro list
    - user list (exercise?)
    - `projections`
- LUNCH [13:00-14:00]
- SHARED-POMODORI SERVER [GL] [2P] [14:00-15:00]
- SHARE-POMODORI CLIENT [EDB] [2P] [15:00-16:00]
    - `work-on-shared`
    - `shared`
- BREAK ~20'
- TRACK-POMODORO-COMPLETED SERVER [GL] [2P] [16:00-17:00]
- TRACK-POMODORO-COMPLETED/OFFLINE CLIENT [EDB] [2P] [17:00-18:00]
    - `work-on-track`
    - `track`
- DEPLOY
    - `master`

**Branch order**
- `start-here`
- `work-on-ping`
- `ping`
- `work-on-start-pomodoro`
- `start-pomodoro`
- `start-pomodoro-flux`
- `squash-pomodoro`
- `work-on-login`
- `login`
- `resume`
- `projections`
- `work-on-shared`
- `shared`
- `work-on-track`
- `track`
- `master`