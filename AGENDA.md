SCHEDULE DAY-1
* INTRODUCTION [GL] [2P] [9:00-10:00]
    * CodeJam 
    * Why Elixir?
        * Not an introduction to the language, do not focus on details, look at the big picture
        * BEAM (processes, Ericsson)
        * OTP
    * Why not Phoenix? (Slides)
    * CQRS/ES
    * NOBU (disclaimer not yet ready, will be, > 80% of code must be business logic)
    * What to take away (from less important to most important)
        * The framework and the code
        * Elixir
        * CQRS/ES
        * We can do better! Work safe, experiment wild
    * We have chosen for this year CodeJam a nasty domain: The Pomodoro Technique
* WALKING-SKELETON SERVER [GL] [2P] [10:00-11:00]
    * `start-here`
    * command “Ping” acceptance test
    * command “Ping” implementation (explain what aggregates are and how to implement them)
    * brief look at the framework code
    * `ping`
* BREAK ~20'
* START-SQUASH-POMODORO SERVER [GL] [4P] [11:00-13:00]
    * `work-on-start-pomodoro` (acceptance)
    * look at the acceptance tests
    * create Timer aggregate
    * pomodoro starts but doesn’t end -> countdown (GenServer)
    * Timer must listen to PomodoroCompleted event
    * `start-pomodoro`
    * `work-on-squash-pomodoro` (acceptance)
    * `squash-pomodoro`
* LUNCH ~60'
* WALKING-SKELETON CLIENT [EDB] [2P] [14:00-15:00]
    * `start-here`
    * Show build environment
    * React Hello test
    * `work-on-ping`
    * React Ping test
    * React implementation of Ping + listening on WS (works with the server)
    * at the end we have a complete React environment ready to be used
    * `ping`
* START-POMODORO CLIENT [EDB] [4P+BREAK] [15:00-17:00]
    * `work-on-start-pomodoro`
    * first implementation with full state management inside the component
    * `start-pomodoro`
    * refactoring to extract the component state (start but maybe jump to the end)
    * `start-pomodoro-flux`
* SQUASH-POMODORO CLIENT [EDB] [2P] [17:00-18:00]
    * `start-pomodoro-flux`
    * exercise 
    * `squash-pomodoro`


SCHEDULE DAY-2
* Q&A [1P] []
* PROJECTION SERVER [GL] [2P] [9:00-10:00]
    * `pin-projection`
        * show how projections work
        * show pin projection with all callbacks implemented
    * `work-on-pomodori-projection`
        * show pin projection without boilerplate
        * show latest_pomodori
        * show pomodori projection tests
    * `projections`
* UI AND RESUME CLIENT [EDB] [2P] [10:00-11:00]
    * resume pomodoro from projection
    * `resume`
    * pomodoro list
    * user list (exercise?)
    * `projections`
* BREAK ~20’
* SHARED-POMODORI SERVER [GL] [2P] [11:00-12:00]
    * `work-on-shared`
    * saga introduction
    * `shared`
* SHARE-POMODORI CLIENT [EDB] [2P] [12:00-13:00]
    * `work-on-shared`
    * `shared`
* LUNCH ~60’
* TAG-SERVER [GL] [3P] [14:00-15:30] (Exercise)
    * Parse description to extract and collect tags (#)
    * Prepare projection tags-num of pomodoro
* TAG-CLIENT [EDB][2P] [15:30-16:30] (Exercise)
    * Add tags projection 
* BREAK ~ 20min
* TRACK-POMODORO-COMPLETED SERVER + CLIENT [GL+EDB] [1P] [17:00-17:30]
    * `work-on-track`
    * on-time projection + check if there’s room
    * `track`
    * `work-on-track`
    * `track`
* DEPLOY [GL + EDB] [1P] [17:30-1800] 
    * `master`
