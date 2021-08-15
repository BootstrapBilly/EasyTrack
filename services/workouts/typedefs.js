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

  type Query {
    getWorkouts(createdBy: String!): [Workout]
  }

  type Mutation {
    createWorkout(input: createWorkoutInput!): Workout 
  }

`
module.exports = typeDefs;