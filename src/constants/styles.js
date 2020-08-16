import {appTheme} from "./colors";
import fontSizes from "./fontSizes";
import fonts from "./fonts";
import React from "react";

export const drawerLabelStyle = {
  color: appTheme.textPrimary,
  fontSize: fontSizes.h3,
  fontFamily: fonts.MontserratMedium,
}
export const defaultHeaderStyle = {
  headerTintColor: appTheme.brightContent,
  headerStyle: {
    backgroundColor: appTheme.darkBackground,
    height:56,
  },
  headerTitleStyle: {
    fontFamily: fonts.PoppinsRegular,
    marginHorizontal:0
  },
  headerTitleContainerStyle:{
    marginLeft:-20
  },
}
export const hitSlop20 = {top: 20, bottom: 20, left: 20, right: 20};
