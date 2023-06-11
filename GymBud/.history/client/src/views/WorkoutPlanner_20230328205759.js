import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function WorkoutPlanner() {
const [workouts, setWorkouts] = useState([]);
const [selectedWorkout, setSelectedWorkout] = useState(null);
const [sets, setSets] = useState(1);
const [reps, setReps] = useState(1);
const [plannedWorkouts, setPlannedWorkouts] = useState([]);

useEffect(() => {
    axios
    .get('http://localhost:8000/api/workouts')
    .then((res) => setWorkouts(res.data))
    .catch((err) => console.error(err));
}, []);

const addWorkoutToPlan = () => {
    const plannedWorkout = {
    workout: selectedWorkout,
    reps: Array.from({ length: sets }, () => reps),
    };
    setPlannedWorkouts([...plannedWorkouts, plannedWorkout]);
};

const handleSetCompletion = (workoutIndex, setIndex) => {
    const updatedPlannedWorkouts = [...plannedWorkouts];
    updatedPlannedWorkouts[workoutIndex].reps[setIndex] = !updatedPlannedWorkouts[workoutIndex].reps[setIndex];
    setPlannedWorkouts(updatedPlannedWorkouts);
};

const removeWorkoutFromPlan = (index) => {
    const updatedPlannedWorkouts = plannedWorkouts.filter((_, i) => i !== index);
    setPlannedWorkouts(updatedPlannedWorkouts);
};

const groupedWorkouts = workouts.reduce((grp, workout) => {
    if (!grp[workout.muscle_group]) {
    grp[workout.muscle_group] = [];
    }
    grp[workout.muscle_group].push(workout);
    return grp;
}, {});

return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">GymBud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/beginners">Beginner? Start here!</Nav.Link>
                        <Nav.Link href="/macro">Macro Calculator</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Different types of SPLITS</NavDropdown.Item>
                        <NavDropdown.Item href="/planner">Workout planner/tracker</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#food">Food and Nutrition</Nav.Link>
                        <Nav.Link href="#goals">Daily Goals</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    <h1>Workout Planner</h1>
    <form>
        <label htmlFor="workout">Choose a workout:</label>
        <select id="workout" onChange={(e) => setSelectedWorkout(e.target.value)}>
            <option value="">Select a workout</option>
            {Object.entries(groupedWorkouts).sort().map(([muscleGroup, workouts]) => (
                <optgroup key={muscleGroup} label={muscleGroup}>
                {workouts.map((workout) => (
                    <option key={workout._id} value={workout._id}>
                    {workout.name}
                    </option>
                ))}
                </optgroup>
            ))}
        </select>


        <label htmlFor="sets">Sets:</label>
        <input id="sets" type="number" min="1" value={sets} onChange={(e) => setSets(e.target.value)} />

        <label htmlFor="reps">Reps:</label>
        <input id="reps" type="number" min="1" value={reps} onChange={(e) => setReps(e.target.value)} />

        <button
        type="button"
        onClick={addWorkoutToPlan}
        disabled={!selectedWorkout || sets <= 0 || reps <= 0}
        >
        Add workout to plan
        </button>
    </form>

    <div>
        <h2>Planned Workouts</h2>
        {plannedWorkouts.map((plannedWorkout, index) => {
        const workout = workouts.find((w) => w._id === plannedWorkout.workout);
        return (
            <div key={index}>
            <h3>{workout.name}</h3>
            <div>
                {plannedWorkout.reps.map((rep, setIndex) => (
                <div
                    key={setIndex}
                    onClick={() => handleSetCompletion(index, setIndex)}
                    className={`set-circle${rep ? ' completed' : ''}`}
                >
                    {rep}
                </div>
                ))}
            </div>
            <button type="button" onClick={() => removeWorkoutFromPlan(index)}>
                Remove workout
            </button>
            </div>
        );
        })}
    </div>
    </div>
);
}

