import React from "react";
import "./App.css";
import { allWorkouts } from "./data";
import Collapsible from 'react-collapsible';

export const Workouts = () => {
    return (
        <>
            <div className="workout-container">
            <br/>
                {allWorkouts.map((data, key) => {
                    return (
                        <div key={key}>
                            <div>
                                {data.weeks.map((week, jdx) => (
                                    <Collapsible className="week" trigger={week.name} key={jdx}>
                                        <div>
                                            {week.days.map((day, kdx) => (
                                                <Collapsible className="day" trigger={day.name + ": " + day.main?.name} key={kdx}>
                                                    <div>
                                                        <table>
                                                            <caption className="heading">{day.pre?.name}</caption>
                                                            <tr>
                                                                <th>Sl No.</th>
                                                                <th className="td-2">Workout</th>
                                                                <th className="td-1">Duration</th>
                                                            </tr>
                                                            {day.pre?.workouts.map((workout, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}.</td>
                                                                    <td>
                                                                        <span>{workout.name}</span>
                                                                        <p className="p_space">{workout.description}</p>
                                                                    </td>
                                                                    <td>{workout.duration} minutes</td>
                                                                </tr>
                                                            ))
                                                            }
                                                        </table>
                                                    </div>

                                                    <br />

                                                    <div>
                                                        <table>
                                                            <caption className="heading">{day.main?.name}</caption>
                                                            <tr>
                                                                <th>Sl No.</th>
                                                                <th className="td-2">Workout</th>
                                                                <th className="td-1">Count</th>
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

                                                    <div>
                                                        <table>
                                                            <caption className="heading">{day.post?.name}: {day.post?.rounds} rounds</caption>
                                                            <tr>
                                                                <th>Sl No.</th>
                                                                <th className="td-2">Workout</th>
                                                                <th className="td-1">Reps</th>
                                                            </tr>
                                                            {day.post?.workouts.map((workout, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}.</td>
                                                                    <td>
                                                                        <span>{workout.name}</span>
                                                                        <p className="p_space">{workout.description}</p>
                                                                    </td>
                                                                    <td>{workout.reps}</td>
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