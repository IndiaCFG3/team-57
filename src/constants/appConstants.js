import {cardBackgrounds} from "./images";

// export const rootURL = 'https://fitness-first-services.herokuapp.com';
export const rootURL = 'http://192.168.31.125:3001';
if (__DEV__) {
  console.log('Development');
} else {
  console.log('Production');
}
export const appName = 'GymAdda';

export const userTypes = {
  USER: 'USER',
  TRAINER: 'TRAINER'
}
export const INITIAL_USER_TYPE = userTypes.USER;
export const videoFeedConfig = {
  width: 360,
  height: 640,
  bitrate: 600,
  FPS: 30
}
export const appPackageId = 'com.thirdessential.fitnessfirst';

export const notificationActions = {
  Accept: 'Accept',
  Reject: 'Reject'
}

export const storageKeys = {
  PENDING_CALL: 'PENDING_CALL'
}
export const webClientId = '284208119571-nt9fitb9l2o4qulefvju8gqeo7aaug01.apps.googleusercontent.com';

export const videoTestMode = false;
export const callTimeout = 30000; //30 secs

export const WEEK_DAYS = {
  SUN: 'SUN',
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
};
export const allowedDurations = [30, 45, 60];

export const imageTypes = {
  AVATAR: {
    type: 'AVATAR',
    dimension: {
      width: 400,
      height: 400
    }
  },
  COVER: {
    type: 'COVER',
    dimension: {
      height: 700,
      width: 800
    }
  }
}
export const defaultDP = 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038';
export const paymentKey = 'rzp_test_BuIiL164HHvbBm';

export const remoteMessageTypes = {
  CALL: 'call',
  APPOINTMENT: "appointmentNotification",
  SESSION: 'sessionNotification',
  UPDATE_POSTS: 'UPDATE_POSTS',
}

export const INITIAL_PAGE = 'INITIAL_PAGE';

export const MAX_POST_LENGTH = 300;
export const firebaseTopics = {
  SILENT_NOTIFICATION: 'SILENT_NOTIFICATION'
}
export const POST_TYPE = {
  TYPE_POST: 'TYPE_POST',
  TYPE_WORKOUT: 'TYPE_WORKOUT',
  TYPE_QUESTION: 'TYPE_QUESTION',
  TYPE_VIDEO: 'TYPE_VIDEO',
}
export const CONTENT_TYPE = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
}
export const COUPON_GEN = {
  minGen: 1,
  maxGen: 10,
  minDiscount: 3,
  maxDiscount: 100,
  minValidity: 1,
  maxValidity: 6
}
export const packageTypes = {
  FAT_LOSS: 'Fat Loss',
  WEIGHT_LOSS: 'Weight Loss',
  WEIGHT_GAIN: 'Weight Gain',
  MUSCLE_GAIN: 'Muscle Gain',
  BODY_MASS_GAIN: 'Body Mass Gain',
  LEAN_BODY_MASS: 'Lean Body Mass',
  POWER_LIFTING: 'Power Lifting',
  STRENGTH_GAIN: 'Strength Gain'
}
export const packageImages = {
  FAT_LOSS: cardBackgrounds.bg1,
  WEIGHT_LOSS: cardBackgrounds.bg2,
  WEIGHT_GAIN: cardBackgrounds.bg3,
  MUSCLE_GAIN: cardBackgrounds.bg4,
  BODY_MASS_GAIN: cardBackgrounds.bg5,
  LEAN_BODY_MASS: cardBackgrounds.bg6,
  POWER_LIFTING: cardBackgrounds.bg7,
  STRENGTH_GAIN: cardBackgrounds.bg8
}
export const callbackStatus = {
  REQUESTED: 'REQUESTED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
}

export const fitnessCategories = {
  YOGA:'YOGA',
  STRETCH:'STRETCH',
  WORKOUT:'WORKOUT',
  CARDIO:'CARDIO'
}

export const bodyParts = {
  ABS:'ABS',
  ARMS:'ARMS',
  BACK:'BACK',
  BUTTOCKS:'BUTTOCKS',
  CHEST:'CHEST',
  FULL_BODY:'FULL_BODY',
  SHOULDERS:'SHOULDERS',
  LEGS:'LEGS',
}

export const exerciseLevels = {
  BEGINNER:'BEGINNER',
  INTERMEDIATE:'INTERMEDIATE',
  ADVANCED:'ADVANCED'
}

export const equipmentTypes = {
  DUMBBELL:'DUMBBELL',
  BENCH:'BENCH',
  BAND:'BAND',
  ALL:'ALL'
}