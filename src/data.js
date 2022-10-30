// Common
export const EACH_SIDE = "es"
const SUPERSET = "Superset with "

// Days
const DAY_ONE = "Day 1"
const DAY_TWO = "Day 2"
const DAY_THREE = "Day 3"
const DAY_FOUR = "Day 4"
const DAY_FIVE = "Day 5"
const DAY_SIX = "Day 6"

// Workouts
const UPPER_BODY = "Upper body"
const LOWER_BODY = "Lower body"
const BACK_AND_BICEPS = "Back and Biceps"
const CHEST_AND_SHOULDERS = "Chest and Shoulders"
const LEGS_AND_TRICEPS = "Legs and Triceps"
const CORE = "Core"
const WARM_UP = "Warm-up"

// Chest
const OFFSET_PUSH_UPS = "Offset push-ups"
const PUSH_UPS = "Push-ups"
const INCLINED_DUMBBELL_PRESS = "Inclined dumbbell chest press"
const STANDING_CHEST_FLYS = "STanding cable chest flys"
const SEATED_MACHINE_CHEST_PRESS = "Seated machine chest press"

// Back
const CONVENTIONAL_DEADLIFTS = "Conventional deadlifts"
const PULL_UPS = "Pull-ups"
const SEATED_LAT_PULL_DOWN = "Seated machine lat pull-downs"
const BENT_OVER_BERBELL_ROWS = "Bent over barbell rows"
const BARBELL_ROWS = "Barbell rows"
const INVERTED_ROWS = "Inverted rows"

// Shoulders
const LATERAl_RAISES_CABLE_SINGLE_ARM = "Cable single arm lateral raises"
const BENTOVER_REVERSE_DUMBBELL_FLYS = "Bentover reverse dumbbell flys"
const SEATED_DUMBBELL_SHOULDER_PRESS = "Seated dumbbell shoulder press"
const BENTOVER_DUMBBELL_REVERSE_FLYS = "Bent over dumbbell reverse flys"
const STANDING_BARBELL_SHOULDER_PRESS = "Standing barbell shoulder press"
const SEATED_MACHINE_REVERSE_FLYS = "Seated machine reverse flys"

// Biceps
const SEATED_INCLINE_DUMBBELL_CURLS = "Seated incline dumbbell curls"
const STANDING_DUMBBELL_HAMMER_CURLS = "Standing dumbbell hammer curls"
const BICEP_CABLE_BAR_CURLS = "Bicep cable straight bar curls"
const BICEP_DUMBBELL_HAMMER_CURLS = "Seated bicep dumbbell hammer curls"
const BICEP_DUMBBELL_PREACHER_CURLS = "Bicep dubbell preacher curls"

// Legs
const MACHINE_SEATED_LEG_EXTENSION = "Machine seated leg extension"
const MACHINE_LYING_HAMSTRING_CURLS = "Machine seated or lying hamstring curls"
const BARBELL_BACK_SQUATS = "Barbell back squats"
const BARBELL_ROMANIAN_DEADLIFTS = "Berbell romanian deadlifts"
const BENCH_REVERSE_HYPERS = "Bench reverse hypers"
const BARBELL_HIP_THRUSTS = "Barbell hip thrusts"
const BARBELL_FRONT_SQUATS = "Barbell front squats"
const MACHINE_LEG_PRESS = "Machine leg press"
const DUMBBELL_STEP_UPS = "Dumbbell step ups"

// Triceps
const TRICEP_SINGLE_ARM_DUMBBELL_OVERHEAD_EXTENSIONS = "Tricep single arm dumbbell overhead extensions"
const TRICEP_CABLE_PUSHDOWN_STRAIGHT_BAR = "Tricep cable push downs with straight bar"
const TRICEP_FLAT_SKULL_CRUSHERS = "Tricep flat bench barbell skull crushers"
const DIAMOND_PUSHUPS = "Diamoad push-ups"
const TRICEP_CABLE_PUSH_DOWNS = "Tricep cable straight bar push downs"
const TRICEP_CABLE_KICKBACK = "Triceps cable kickbacks"
const TRICEP_OVERHEAD_CABLE_EXTENSION = "Cable overhead tricep extension"

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
const RENEGADE_ROWS = "Renegade rows"
const REVERSE_PLANKS = "Reverse plank"
const SQUAT_THRUSTERS = "Squat thrusters"
const WALLSIT_FRONT_PLATE_RAISES = "Wall sit front plate raises"
const ELBOW_PLANK_HIP_DROPS = "Elbow plank hip drops"
const BOX_JUMPS = "Box jumps"
const SUPINE_HEEL_TOUCHES = "Supine heel touches"
const BATTLE_ROPES = "Battle ropes"
const MMA_PLANK = "MMA plank"
const BICYCLE_CRUNCHES = "Bicycle crunches"

export const allWorkouts = [
    {
        "weeks": [
            {
                "name": "Week 1",
                "days": [
                    // day 1
                    {
                        "name": DAY_ONE,
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
                                    "description": SUPERSET + BICEP_CABLE_BAR_CURLS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_CABLE_KICKBACK,
                                    "description": SUPERSET + STANDING_DUMBBELL_HAMMER_CURLS,
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
                        "name": DAY_THREE,
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
                    // day 5
                    {
                        "name": DAY_FIVE,
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
                "days": [
                    // day 1
                    {
                        "name": DAY_ONE,
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
                                    "name": BENCH_REVERSE_HYPERS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_HIP_THRUSTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_FRONT_SQUATS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 10,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": MACHINE_LEG_PRESS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
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
                                    "name": TRICEP_CABLE_PUSH_DOWNS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_FLAT_SKULL_CRUSHERS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        }
                    },
                    // day 2
                    {
                        "name": DAY_TWO,
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
                                    "name": PULL_UPS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 8,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": CONVENTIONAL_DEADLIFTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 10,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_LAT_PULL_DOWN,
                                    "description": "",
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
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BICEP_DUMBBELL_PREACHER_CURLS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 8,
                                    "each_side": true,
                                    "display_count": true
                                },
                                {
                                    "name": BICEP_CABLE_BAR_CURLS,
                                    "description": "21s (7 + 7 + 7)",
                                    "sets": 3,
                                    "reps": 21,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": 4,
                            "workouts": [
                                {
                                    "name": RENEGADE_ROWS,
                                    "description": "",
                                    "reps": 16,
                                    "display_count": true
                                },
                                {
                                    "name": INVERTED_ROWS,
                                    "description": "",
                                    "reps": 10,
                                    "display_count": true
                                },
                                {
                                    "name": REVERSE_PLANKS,
                                    "description": "Hold for 30s",
                                    "display_count": false
                                }
                            ]
                        }
                    },
                    // day 3
                    {
                        "name": DAY_THREE,
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
                            "name": CHEST_AND_SHOULDERS,
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
                                    "name": STANDING_CHEST_FLYS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_MACHINE_CHEST_PRESS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_DUMBBELL_SHOULDER_PRESS,
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
                                    "name": BENTOVER_DUMBBELL_REVERSE_FLYS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 21,
                                    "each_side": false,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": "(Tabata) 4",
                            "workouts": [
                                {
                                    "name": SQUAT_THRUSTERS,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                },
                                {
                                    "name": WALLSIT_FRONT_PLATE_RAISES,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                },
                                {
                                    "name": ELBOW_PLANK_HIP_DROPS,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                }
                            ]
                        }
                    },
                    // day 4
                    {
                        "name": DAY_FOUR,
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
                            "name": LOWER_BODY,
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
                                    "name": BARBELL_FRONT_SQUATS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": MACHINE_LEG_PRESS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": BARBELL_HIP_THRUSTS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 12,
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
                                    "name": DUMBBELL_STEP_UPS,
                                    "description": "",
                                    "sets": 3,
                                    "reps": 10,
                                    "each_side": true,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": "40s on 20s off x 1",
                            "workouts": [
                                {
                                    "name": SQUAT_THRUSTERS,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                },
                                {
                                    "name": BOX_JUMPS,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                },
                                {
                                    "name": SUPINE_HEEL_TOUCHES,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                },
                                {
                                    "name": BATTLE_ROPES,
                                    "description": "",
                                    "reps": "∞",
                                    "display_count": false
                                }
                            ]
                        }
                    },
                    // day 5
                    {
                        "name": DAY_FIVE,
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
                            "name": UPPER_BODY,
                            "workouts": [
                                {
                                    "name": OFFSET_PUSH_UPS,
                                    "description": SUPERSET + SEATED_LAT_PULL_DOWN,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": INCLINED_DUMBBELL_PRESS,
                                    "description": SUPERSET + BENT_OVER_BERBELL_ROWS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": SEATED_DUMBBELL_SHOULDER_PRESS,
                                    "description": SUPERSET + BENT_OVER_BERBELL_ROWS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": TRICEP_OVERHEAD_CABLE_EXTENSION,
                                    "description": SUPERSET + BICEP_CABLE_BAR_CURLS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": false,
                                    "display_count": true
                                },
                                {
                                    "name": STANDING_DUMBBELL_HAMMER_CURLS,
                                    "description": SUPERSET + TRICEP_CABLE_PUSH_DOWNS,
                                    "sets": 3,
                                    "reps": 12,
                                    "each_side": true,
                                    "display_count": true
                                }
                            ]
                        },
                        "post": {
                            "name": CORE,
                            "rounds": 3,
                            "workouts": [
                                {
                                    "name": HANGING_LEG_RAISES,
                                    "description": "",
                                    "reps": 15,
                                    "display_count": true
                                },
                                {
                                    "name": BICYCLE_CRUNCHES,
                                    "description": "",
                                    "reps": 20,
                                    "display_count": true
                                },
                                {
                                    "name": REVERSE_PLANKS,
                                    "description": "",
                                    "display_count": false
                                }
                            ]
                        }
                    },
                ]
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