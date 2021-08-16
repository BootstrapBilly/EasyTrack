const { gql } = require('@apollo/client');

module.exports = {

CREATE_WORKOUT_MUTATION:gql`
mutation CreateWorkoutMutation($createWorkoutInput: createWorkoutInput!) {
  createWorkout(input: $createWorkoutInput) {
    id
  }
}`,

LIST_EXERCISES_BY_MUSCLE_MUTATION:gql`
query Query {
CHEST: getExercises(filter: {muscle: CHEST }) {
    id
    name
    muscle
}
BACK: getExercises(filter: {muscle: BACK }) {
    id
    name
    muscle
}
SHOULDERS: getExercises(filter: {muscle: SHOULDERS }) {
    id
    name
    muscle
}
BICEPS: getExercises(filter: {muscle: BICEPS }) {
    id
    name
    muscle
}
TRICEPS: getExercises(filter: {muscle: TRICEPS }) {
    id
    name
    muscle
}
GLUTES: getExercises(filter: {muscle: GLUTES }) {
    id
    name
    muscle
}
HAMSTRINGS: getExercises(filter: {muscle: HAMSTRINGS }) {
    id
    name
    muscle
}
CALFS: getExercises(filter: {muscle: CALFS }) {
    id
    name
    muscle
}
COMPOUND: getExercises(filter: {muscle: COMPOUND }) {
    id
    name
    muscle
}}`,

GET_WORKOUT_QUERY:gql`
    query Query($getWorkoutId: String!) {
    workout: getWorkout(id: $getWorkoutId) {
        id
        name
        exercises {
          id
          name
          muscle
        }
    }
}`,

GET_WORKOUTS_QUERY:gql`
    query Query($getWorkoutsCreatedBy: String!) {
  workouts: getWorkouts(createdBy: $getWorkoutsCreatedBy) {
    name
    id
    exercises {
      id
      name
      muscle
    }
  }
}`,

GET_SESSIONS_QUERY:gql`
query Query($getSessionsFilter: getSessionsFilter!) {
  sessions: getSessions(filter: $getSessionsFilter) {
    id
    exerciseId
    sets {
      reps
      weight
    }
  }
}
`





}