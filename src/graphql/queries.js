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
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      name
      exercises {
        id
        name
        muscle
        createdAt
        updatedAt
      }
      createdBy
      createdAt
      updatedAt
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
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      name
      muscle
      createdAt
      updatedAt
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        muscle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
