import React from "react";

const colors = {
  appBlue: '#1177f3',
  bgGrey: '#f1f1f1',
  lightGrey: '#CEDCCE',
  darkGrey: '#A9A9A9',
  goldenStar: '#fddc68',
  acceptGreen: '#4bd35f',
  rejectRed: '#f7392e'
}
export const darkPallet = {
  extraDarkBlue: '#20222f',
  darkGrey: '#2b2d37',
  darkBlue: '#2b2e41',
  lightBlue: '#384053',
  extraLightBlue: '#63687b',
  greyBlue: '#686e80',
  hotPink: '#ea8380',
  hotOrange:'#ff7f50',
  hotOrangeFaded:'#a6503a',
  brightGreen:'#63d872',
  skyBlue: '#829da8',
  orangeGradient: ['#f86676', '#fbb287'],
  pink: '#DD3180',
  gradients: {
    pink: ['#ff4760', '#f4007f'],
    blue: ['#8400e4', '#7c00d3'],
    purple: ['#b300eb', '#8a00d3'],
    grey: ['#696969', '#9E9E9E']
  }
}

export const bluePallet = {
  background: '#2e244c',
  darkBackground: '#292145',
  content: '#362a5c',
  gradient: ['#292044', '#2d234c']
}

export const getRandomGradient = () => {
  const gradients = Object.keys(darkPallet.gradients);
  const gradientCount = gradients.length;
  const index = Math.floor(Math.random() * gradientCount);
  return darkPallet.gradients[gradients[index]];
}

export const appTheme = {
  darkBackground: darkPallet.extraDarkBlue,
  background: darkPallet.darkBlue,
  brightContent: darkPallet.hotOrange,
  brightContentFaded: darkPallet.hotOrangeFaded,
  altBrightContent:darkPallet.brightGreen,
  lightBackground: darkPallet.lightBlue,
  content: darkPallet.extraLightBlue,
  lightContent: darkPallet.skyBlue,
  grey: darkPallet.greyBlue,
  greyC:'#ccc',
  darkGrey: darkPallet.darkGrey,
  gradient: darkPallet.orangeGradient,
  secondaryGradient: darkPallet.gradients.pink,
  tertiaryGradient: darkPallet.gradients.blue,
  quaternaryGradient: darkPallet.gradients.purple,
  disabledGradient: darkPallet.gradients.grey,

  textPrimary:'white',
}

export const bmiColors = {
  blue:'#4da9e7',
  lightBlue:'#00e6cf',
  yellow:'#d0bb1f',
  red:'#e91457'
}

export default colors;