import React from "react";
import "./App.css";
import { allWorkouts } from "./data";
import Collapsible from 'react-collapsible';

export const Workouts = () => {
    return (
        <>
            <div className="workout-container">
                {allWorkouts.map((data, key) => {
                    return (
                        <div key={key}>
                            <div>
                                {data.weeks.map((week, jdx) => (
                                    <Collapsible className="week" trigger={week.name} key={jdx}>
                                        <span></span>
                                        <div>
                                            {week.days.map((day, kdx) => (
                                                <Collapsible className="day" trigger={day.name + ": " + day.main?.name} key={kdx}>
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <th>Sl No.</th>
                                                                <th>Workout</th>
                                                                <th>Count</th>
                                                            </tr>
                                                            {day.main?.workouts.map((workout, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}.</td>
                                                                    <td>
                                                                        <span>{workout.name}</span>
                                                                        <p className="p_space">{workout.description}</p>
                                                                    </td>
                                                                    <td>{workout.sets} * {workout.reps}</td>
                                                                </tr>
                                                            ))
                                                            }
                                                        </table>
                                                    </div>
                                                </Collapsible>))
                                            }
                                        </div>
                                    </Collapsible>))
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};