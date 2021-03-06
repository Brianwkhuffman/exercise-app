const bookshelf = require("../bookshelf");

class Workout extends bookshelf.Model {
  get tableName() {
    return "workouts";
  }

  get hasTimestamps() {
    return true;
  }

  exercisesUsersWorkouts() {
    return this.hasMany("ExerciseUserWorkout");
  }
}

module.exports = bookshelf.model("Workout", Workout);
