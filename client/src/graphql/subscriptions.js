/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay {
    onCreateDay {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay {
    onUpdateDay {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay {
    onDeleteDay {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal {
    onCreateMeal {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal {
    onUpdateMeal {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal {
    onDeleteMeal {
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
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood {
    onCreateFood {
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood {
    onUpdateFood {
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood {
    onDeleteFood {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
      id
      date
      exercises {
        name
        muscle
      }
      performanceHistory {
        id
        exercise {
          name
          muscle
        }
        numSets
        performance {
          id
          weightType
          weight
          reps
          effort
          createdBy
          createdAt
          updatedAt
        }
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
      id
      date
      exercises {
        name
        muscle
      }
      performanceHistory {
        id
        exercise {
          name
          muscle
        }
        numSets
        performance {
          id
          weightType
          weight
          reps
          effort
          createdBy
          createdAt
          updatedAt
        }
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
      id
      date
      exercises {
        name
        muscle
      }
      performanceHistory {
        id
        exercise {
          name
          muscle
        }
        numSets
        performance {
          id
          weightType
          weight
          reps
          effort
          createdBy
          createdAt
          updatedAt
        }
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
      id
      weightType
      weight
      reps
      effort
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
      id
      weightType
      weight
      reps
      effort
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
      id
      weightType
      weight
      reps
      effort
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExercisePerformance = /* GraphQL */ `
  subscription OnCreateExercisePerformance {
    onCreateExercisePerformance {
      id
      exercise {
        name
        muscle
      }
      numSets
      performance {
        id
        weightType
        weight
        reps
        effort
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
export const onUpdateExercisePerformance = /* GraphQL */ `
  subscription OnUpdateExercisePerformance {
    onUpdateExercisePerformance {
      id
      exercise {
        name
        muscle
      }
      numSets
      performance {
        id
        weightType
        weight
        reps
        effort
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
export const onDeleteExercisePerformance = /* GraphQL */ `
  subscription OnDeleteExercisePerformance {
    onDeleteExercisePerformance {
      id
      exercise {
        name
        muscle
      }
      numSets
      performance {
        id
        weightType
        weight
        reps
        effort
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
