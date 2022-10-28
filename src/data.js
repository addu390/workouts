// Workouts
const BACK_AND_BICEPS = "Back and Biceps"
const CHEST_AND_SHOULDERS = "Chest and Shoulders"
const LEGS_AND_TRICEPS = "Legs and Triceps"
const CORE = "Core"
const WARM_UP = "Warm-up"

// Back
const BENCH_REVERSE_HYPERS = "Bench reverse hypers"
const CONVENTIONAL_DEADLIFTS = "Conventional deadlifts"
const PULL_UPS = "Pull-ups"
const SEATED_LAT_PULL_DOWN = "Seated lat pull-downs"
const BENT_OVER_BERBELL_ROWS = "Bent over barbell rows"

// Biceps
const SEATED_INCLINE_DUMBBELL_CURLS = "Seated incline dumbbell curls"
const STANDING_DUMBBELL_HAMMER_CURLS = "Standing dumbbell hammer curls"

// Cardio
const CYCLING = "Cycling"
const THREADMILL = "Threadmill walking"

// Core
const SUPERMANS = "Supermans"
const HOLLOW_HOLD = "Hollow hold"
const DEADBUGS = "Deadbugs"

export const allWorkouts = [
    {
        "weeks": [
            {
                "name": "Week 1",
                "days": [
                    // day 1
                    {
                        "name": "Day 1",
                        "pre": {
                            "name": WARM_UP,
                            "workouts": [
                                {
                                    "name": THREADMILL,
                                    "description": "",
                                    "duration": 15,
                                    "display_count": false
                                },
                            ]
                        },
                        "main": {
                            "name": BACK_AND_BICEPS,
                            "workouts": [
                                {
                                    "name": BENCH_REVERSE_HYPERS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": CONVENTIONAL_DEADLIFTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 5,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": PULL_UPS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 8,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_LAT_PULL_DOWN,
                                    "description": "Medium grip and not too wide",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BENT_OVER_BERBELL_ROWS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_INCLINE_DUMBBELL_CURLS,
                                    "description": "Together",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": STANDING_DUMBBELL_HAMMER_CURLS,
                                    "description": "Together",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": 3,
                            "workouts": [
                                {
                                    "name": SUPERMANS,
                                    "description": "",
                                    "reps": 15,
                                    "display_count": true
                                },
                                {
                                    "name": HOLLOW_HOLD,
                                    "description": "Hold for 40s",
                                    "display_count": false
                                },
                                {
                                    "name": DEADBUGS,
                                    "description": "Hold for 40s",
                                    "reps": 16,
                                    "each_side": true,
                                    "display_count": true
                                }
                            ]
                        }
                    },
                    {
                        "name": "Day 2",
                        "pre": {
                            "name": WARM_UP,
                            "workouts": [
                                {
                                    "name": THREADMILL,
                                    "description": "",
                                    "duration": 15,
                                    "display_count": false
                                },
                            ]
                        },
                        "main": {
                            "name": LEGS_AND_TRICEPS,
                            "workouts": [
                                {
                                    "name": BENCH_REVERSE_HYPERS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": CONVENTIONAL_DEADLIFTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 5,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": PULL_UPS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 8,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_LAT_PULL_DOWN,
                                    "description": "Medium grip and not too wide",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BENT_OVER_BERBELL_ROWS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_INCLINE_DUMBBELL_CURLS,
                                    "description": "Together",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": STANDING_DUMBBELL_HAMMER_CURLS,
                                    "description": "Together",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": 3,
                            "workouts": [
                                {
                                    "name": SUPERMANS,
                                    "description": "",
                                    "reps": 15,
                                    "display_count": true
                                },
                                {
                                    "name": HOLLOW_HOLD,
                                    "description": "Hold for 40s",
                                    "display_count": false
                                },
                                {
                                    "name": DEADBUGS,
                                    "description": "Hold for 40s",
                                    "reps": 16,
                                    "each_side": true,
                                    "display_count": true
                                }
                            ]
                        }
                    },
                ],
            }, 
            {
                "name": "Week 2",   
                "days": []
            },
            {
                "name": "Week 3",   
                "days": []
            },
            {
                "name": "Week 4",   
                "days": []
            },
            {
                "name": "Week 5",   
                "days": []
            },
            {
                "name": "Week 6",   
                "days": []
            },
            {
                "name": "Week 7",   
                "days": []
            },
            {
                "name": "Week 8",   
                "days": []
            },
            {
                "name": "Week 2",   
                "days": []
            },
            {
                "name": "Week 9",   
                "days": []
            },
            {
                "name": "Week 10",   
                "days": []
            },
            {
                "name": "Week 11",   
                "days": []
            },
            {
                "name": "Week 12",   
                "days": []
            },
        ]
    }
]