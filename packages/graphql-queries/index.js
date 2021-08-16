const { gql } = require('@apollo/client');

module.exports = {

ADD_SET_TO_SESSION:gql`
mutation AddSetToSessionMutation($addSetToSessionId: ID!) {
  session: addSetToSession(id: $addSetToSessionId) {
    id
    exerciseId
    sets {
      reps
      weight
    }
  }
}`,

CREATE_SESSION_MUTATION:gql`
mutation CreateSessionMutation($createSessionInput: createSessionInput!) {
  session: createSession(input: $createSessionInput) {
    id
    exerciseId
    sets {
      reps
      weight
    }
  }
}`,  

CREATE_WORKOUT_MUTATION:gql`
mutation CreateWorkoutMutation($createWorkoutInput: createWorkoutInput!) {
  createWorkout(input: $createWorkoutInput) {
    id
  }
}`,

DELETE_SESSION:gql`
mutation DeleteSessionMutation($deleteSessionId: ID!) {
  session: deleteSession(id: $deleteSessionId) {
    id
    exerciseId
    sets {
      reps
      weight
    }
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
}`,

UPDATE_SET:gql`
mutation UpdateSetMutation($updateSetInput: updateSetInput!) {
  session: updateSet(input: $updateSetInput) {
    id
    exerciseId
    sets {
      reps
      weight
    }
  }
}`




}