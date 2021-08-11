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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
      id
      weight
      reps
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
      id
      weight
      reps
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
      id
      weight
      reps
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
      id
      name
      muscle
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
      id
      name
      muscle
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
      id
      name
      muscle
      createdAt
      updatedAt
    }
  }
`;
