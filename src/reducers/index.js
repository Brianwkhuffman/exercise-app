import {
  ACTIVE_TOKEN,
  ADD_COMMENT,
  ADD_FOOD,
  CHANGE_DATE,
  CLEAR,
  DELETE_COMMENT,
  FAT_SECRET_FOOD_SEARCH,
  FILTER_BODY_PARTS,
  FILTER_EMAILS,
  FOOD_NUTRIENT_SEARCH,
  FOOD_SEARCH,
  GET_DIARY_DATA,
  LOAD_ACTIVITIES,
  LOAD_BODY_PARTS,
  LOAD_EXERCISE_LIST,
  LOAD_POSTS,
  LOAD_SINGLE_EXERCISE,
  LOGIN,
  LOGOUT,
  LOAD_USER,
  REGISTER,
  ADD_WORKOUT,
  LOAD_WORKOUTS,
  GET_SMOKE
} from "../actions";

import moment from "moment";

const initialStore = {
  activity_levels: [],
  bodyparts: [],
  community_posts: [],
  diaryData: [],
  users: [],
  emails: [],
  isLoggedIn: false,
  exercises: [],
  exerciseInfo: [],
  foods: [],
  foods_meals_users: [],
  addFood: {},
  workout: [],
  workouts: [],
  diaryDate: moment()
    .utc()
    .format("YYYY-MM-D"),
  display: "meal",
  fat_secret_foods: [],
  smoke: ""
};

let reducer = (store = initialStore, action) => {
  switch (action.type) {
    case GET_SMOKE:
      return Object.assign({}, store, { smoke: action.payload });

    case LOAD_SINGLE_EXERCISE:
      return Object.assign({}, store, { exerciseInfo: action.payload });

    case LOAD_ACTIVITIES:
      return Object.assign({}, store, { activity_levels: action.payload });

    case REGISTER:
      return Object.assign({}, store, {
        registeredUserEmail: action.payload.formInfo.email
      });

    case LOGIN:
      let { id, user_status_id } = action.payload.session;
      let session = Object.assign(
        {},
        { id: id, user_status_id: user_status_id }
      );
      localStorage.setItem("session", JSON.stringify(session));
      return Object.assign({}, store, { isLoggedIn: true });

    case LOGOUT:
      localStorage.removeItem("session");
      return Object.assign({}, store, { isLoggedIn: false });

    case LOAD_POSTS:
      return Object.assign({}, store, { community_posts: action.payload });

    case FOOD_SEARCH:
      return Object.assign({}, store, { foods: action.payload.foods });

    case FOOD_NUTRIENT_SEARCH:
      return Object.assign({}, store, { foods: action.payload });

    case GET_DIARY_DATA:
      return Object.assign({}, store, { diaryData: action.payload });

    case LOAD_USER:
      return Object.assign({}, store, { users: action.payload });

    case CLEAR:
      return Object.assign({}, store, { foods: action.payload });

    case CHANGE_DATE:
      let newMoment = moment.utc(action.payload);
      return Object.assign({}, store, {
        diaryDate: newMoment.format("YYYY-MM-D")
      });

    case LOAD_BODY_PARTS:
      return Object.assign({}, store, { bodyparts: action.payload });

    case LOAD_EXERCISE_LIST:
      return Object.assign({}, store, { exercises: action.payload });

    case FILTER_BODY_PARTS:
      return Object.assign({}, store, { exercises: action.payload });

    case ADD_COMMENT:
      return store;

    case DELETE_COMMENT:
      return store;

    case FILTER_EMAILS:
      return Object.assign({}, store, { emails: action.payload });

    case ADD_FOOD:
      return Object.assign({}, store, { addFood: action.payload });
    
    case FAT_SECRET_FOOD_SEARCH:
      return Object.assign({}, store, { fat_secret_foods: action.payload });

    
    case ADD_WORKOUT:
      return Object.assign({}, store, { workout: action.payload })

    case LOAD_WORKOUTS:
      return Object.assign({}, store, { workouts: action.payload })

    default:
      return store;
  }
};

export default reducer;
