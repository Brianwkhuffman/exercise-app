const activity_levels = require("./user/activity_levels");
const authentication = require("./user/users/auth");
const exercise_difficulties = require("./exercise/exercise_difficulties");
const exercise_equipment = require("./exercise/exercise_equipment");
const exercise_types = require("./exercise/exercise_types");
const genders = require("./user/genders");
const goals = require("./user/goals");
const meal_types = require("./nutrition/meal_types");
const muscle_groups = require("./exercise/muscle_groups");
const user_tiers = require("./user/user_tiers");
const bodyparts = require("./exercise/bodyparts");
const exercises = require("./exercise/exercises");
const users = require("./user/users");
const workouts = require("./exercise/workouts");
const food_images = require("./nutrition/food_images");
const tutorial_videos = require("./exercise/tutorial_videos");
const user_videos = require("./exercise/user_videos");
const exercises_users_workouts = require("./exercise/exercises_users_workouts");
const community_posts = require("./community/community_posts");
const community_comments = require("./community/community_comments");
const exercise_bodyparts = require("./exercise/exercise_bodyparts");
const foods_meals_users = require("./nutrition/foods_meals_users");
const nutrition = require("./nutrition/nutrition");
const vision = require("./nutrition/vision");
const fat_secret = require("./nutrition/fat_secret");
const video_upload = require("./upload/video_upload");
const image_upload = require("./upload/image_upload")

module.exports = {
  activity_levels,
  authentication,
  exercise_difficulties,
  exercise_equipment,
  exercise_types,
  genders,
  goals,
  meal_types,
  muscle_groups,
  user_tiers,
  bodyparts,
  exercises,
  users,
  workouts,
  food_images,
  tutorial_videos,
  user_videos,
  exercises_users_workouts,
  community_posts,
  community_comments,
  exercise_bodyparts,
  foods_meals_users,
  nutrition,
  vision,
  fat_secret,
  video_upload,
  image_upload
};
