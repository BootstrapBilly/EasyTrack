/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      date
      kcals {
        target
        actual
      }
      macros {
        protein {
          target
          actual
        }
        carbs {
          target
          actual
        }
        fats {
          target
          actual
        }
      }
      meals {
        id
        macros {
          protein
          carbs
          fats
        }
        kcals
        foods {
          id
          name
          foodAmountType
          amount
          createdBy
          createdAt
          updatedAt
        }
        time
        createdBy
        createdAt
        updatedAt
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        kcals {
          target
          actual
        }
        meals {
          id
          kcals
          time
          createdBy
          createdAt
          updatedAt
        }
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeal = /* GraphQL */ `
  query GetMeal($id: ID!) {
    getMeal(id: $id) {
      id
      macros {
        protein
        carbs
        fats
      }
      kcals
      foods {
        id
        name
        macros {
          protein
          carbs
          fats
        }
        foodAmountType
        amount
        createdBy
        createdAt
        updatedAt
      }
      time
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listMeals = /* GraphQL */ `
  query ListMeals(
    $filter: ModelMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        macros {
          protein
          carbs
          fats
        }
        kcals
        foods {
          id
          name
          foodAmountType
          amount
          createdBy
          createdAt
          updatedAt
        }
        time
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
      id
      name
      macros {
        protein
        carbs
        fats
      }
      foodAmountType
      amount
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        macros {
          protein
          carbs
          fats
        }
        foodAmountType
        amount
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listExercisesByMuscle = /* GraphQL */ `
  query ListExercisesByMuscle {
  CHEST: listExercises(filter: {muscle: {eq: CHEST}}) {
    items {
      muscle
      name
      id
    }
  }
    BACK: listExercises(filter: {muscle: {eq: BACK}}) {
    items {
      muscle
      name
      id
    }
  }
    SHOULDERS: listExercises(filter: {muscle: {eq: SHOULDERS}}) {
    items {
      muscle
      name
      id
    }
  }
    BICEPS: listExercises(filter: {muscle: {eq: BICEPS}}) {
    items {
      muscle
      name
      id
    }
  }
    TRICEPS: listExercises(filter: {muscle: {eq: TRICEPS}}) {
    items {
      muscle
      name
      id
    }
  }
    GLUTES: listExercises(filter: {muscle: {eq: GLUTES}}) {
    items {
      muscle
      name
      id
    }
  }
    HAMSTRINGS: listExercises(filter: {muscle: {eq: HAMSTRINGS}}) {
    items {
      muscle
      name
      id
    }
  }
    CALFS: listExercises(filter: {muscle: {eq: CALFS}}) {
    items {
      muscle
      name
      id
    }
  }
    COMPOUND: listExercises(filter: {muscle: {eq: COMPOUND}}) {
    items {
      muscle
      name
      id
    }
  }
}`;
export const getWorkout = /* GraphQL */ `
query GetWorkout($id: ID!) {
  workout:getWorkout(id: $id) {
    id
    exercises {
      id
      name
      muscle
    }
  }
}
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        exercises {
          id
          name
          muscle
        }
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      weight
      reps
      createdAt
      updatedAt
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        weight
        reps
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      createdBy
      exerciseId
      id
      sets {
        id
        weight
        reps
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessions: listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sets {
          weight
          reps
        }
      }
    }
  }
`;
