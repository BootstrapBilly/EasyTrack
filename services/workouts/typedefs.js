const { gql } = require("apollo-server");

const typeDefs = gql`

  enum MuscleEnum {
    CHEST
    BACK
    SHOULDERS
    BICEPS
    TRICEPS
    GLUTES
    HAMSTRINGS
    CALFS
    COMPOUND
  }

  input createExerciseInput {
    name: String!
    muscle: MuscleEnum!
  }

  input createWorkoutInput {
    name: String!
    createdBy: String!
    exercises: [createExerciseInput]
  }

  input getExercisesFilter {
    muscle: MuscleEnum
    createdBy: String
  }

  input getSessionsFilter {
    createdBy: String!
    exerciseId: String!
  }

  type Exercise {
    id: ID!
    name: String!
    muscle: MuscleEnum!
  }

  type Workout {
    id: ID!
    name: String
    exercises: [Exercise]
    createdBy: String
  }

  type Set {
    reps: Int
    weight: Int
  }

  type Session {
    id: ID!
    exerciseId: String!
    sets: [Set]
  }

  type Query {
    getWorkout(id: String!): Workout
    getWorkouts(createdBy: String!): [Workout]
    getExercises(filter: getExercisesFilter): [Exercise]
    getSessions(filter: getSessionsFilter!): [Session]
  }

  type Mutation {
    createExercise(input: createExerciseInput!): Exercise
    createWorkout(input: createWorkoutInput!): Workout 
  }

`
module.exports = typeDefs;