// Common
export const EACH_SIDE = "es"

// Workouts
const UPPER_BODY = "Upper body"
const BACK_AND_BICEPS = "Back and Biceps"
const CHEST_AND_SHOULDERS = "Chest and Shoulders"
const LEGS_AND_TRICEPS = "Legs and Triceps"
const CORE = "Core"
const WARM_UP = "Warm-up"

// Chest
const PUSH_UPS = "Push-ups"
const INCLINED_DUMBBELL_PRESS = "Inclined dumbbell press"

// Back
const BENCH_REVERSE_HYPERS = "Bench reverse hypers"
const CONVENTIONAL_DEADLIFTS = "Conventional deadlifts"
const PULL_UPS = "Pull-ups"
const SEATED_LAT_PULL_DOWN = "Seated lat pull-downs"
const BENT_OVER_BERBELL_ROWS = "Bent over barbell rows"
const BARBELL_ROWS = "Barbell rows"
const INVERTED_ROWS = "Inverted rows"

// Shoulders
const LATERAl_RAISES_CABLE_SINGLE_ARM = "Cable single arm lateral raises"
const BENTOVER_REVERSE_DUMBBELL_FLYS = "Bentover reverse dumbbell flys"

// Biceps
const SEATED_INCLINE_DUMBBELL_CURLS = "Seated incline dumbbell curls"
const STANDING_DUMBBELL_HAMMER_CURLS = "Standing dumbbell hammer curls"
const BICEP_CABLE_BAR_CURLS = "Bicep cable straight bar curls"
const BICEP_DUMBBELLHAMMER_CURLS = "Bicep dumbbell hammer curls"

// Legs
const MACHINE_SEATED_LEG_EXTENSION = "Machine seated leg extension"
const MACHINE_LYING_HAMSTRING_CURLS = "Machine seated or lying hamstring curls"
const BARBELL_BACK_SQUATS = "Barbell back squats"
const BARBELL_ROMANIAN_DEADLIFTS = "Berbell romanian deadlifts"

// Triceps
const TRICEP_SINGLE_ARM_DUMBBELL_OVERHEAD_EXTENSIONS = "Tricep single arm dumbbell overhead extensions"
const TRICEP_CABLE_PUSHDOWN_STRAIGHT_BAR = "Tricep cable push downs with straight bar"
const DIAMOND_PUSHUPS = "Diamoad push-ups"
const TRICEP_CABLE_PUSH_DOWNS = "Tricep cable straight bar push downs"
const TRICEP_CABLE_KICKBACK = "Triceps cable kickbacks"

// Cardio
const CYCLING = "Cycling"
const TREADMILL = "Treadmill walking"

// Core
const SUPERMANS = "Supermans"
const HOLLOW_HOLD = "Hollow hold"
const DEADBUGS = "Deadbugs"
const FARMERS_CARRY_HEAVY = "Farmers carry with heavy dumbbells"
const PLANK_ALTERNATE_SHOULDER_TAPS = "Plank hold alternate shoulder taps"
const HANGING_LEG_RAISES = "Hanging leg raises"

export const allWorkouts = [
    {
        "weeks": [
            {
                "name": "Week 1",
                "days": [
                    // day 3
                    {
                        "name": "Day 1",
                        "pre": {
                            "name": WARM_UP,
                            "workouts": [
                                {
                                    "name": TREADMILL,
                                    "description": "",
                                    "duration": 10,
                                    "display_count": false
                                },
                            ]
                        },
                        "main": {
                            "name": UPPER_BODY,
                            "workouts": [
                                {
                                    "name": PUSH_UPS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": INCLINED_DUMBBELL_PRESS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_ROWS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": INVERTED_ROWS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": LATERAl_RAISES_CABLE_SINGLE_ARM,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 8,
                                    "each_side": true,
                                    "display_count": true
                                },
                                {
                                    "name": BENTOVER_REVERSE_DUMBBELL_FLYS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_CABLE_PUSHDOWN_STRAIGHT_BAR,
                                    "description": "Superset with " + BICEP_CABLE_BAR_CURLS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_CABLE_KICKBACK,
                                    "description": "Superset with " + STANDING_DUMBBELL_HAMMER_CURLS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        }
                    },
                    // day 3
                    {
                        "name": "Day 2",
                        "pre": {
                            "name": WARM_UP,
                            "workouts": [
                                {
                                    "name": TREADMILL,
                                    "description": "",
                                    "duration": 10,
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
                    // day 4
                    {
                        "name": "Day 3",
                        "pre": {
                            "name": WARM_UP,
                            "workouts": [
                                {
                                    "name": CYCLING,
                                    "description": "",
                                    "duration": 10,
                                    "display_count": false
                                },
                            ]
                        },
                        "main": {
                            "name": LEGS_AND_TRICEPS,
                            "workouts": [
                                {
                                    "name": MACHINE_SEATED_LEG_EXTENSION,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": MACHINE_LYING_HAMSTRING_CURLS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_BACK_SQUATS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 10,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_ROMANIAN_DEADLIFTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_SINGLE_ARM_DUMBBELL_OVERHEAD_EXTENSIONS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 10,
                                    "each_side": true,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_CABLE_PUSHDOWN_STRAIGHT_BAR,
                                    "description": "Together",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": DIAMOND_PUSHUPS,
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
                                    "name": FARMERS_CARRY_HEAVY,
                                    "description": "",
                                    "reps": 8,
                                    "display_count": true,
                                    "each_side": true
                                },
                                {
                                    "name": PLANK_ALTERNATE_SHOULDER_TAPS,
                                    "description": "",
                                    "reps": 16,
                                    "display_count": true
                                },
                                {
                                    "name": HANGING_LEG_RAISES,
                                    "description": "",
                                    "reps": 10,
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