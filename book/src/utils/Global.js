import { Dimensions, Platform, StatusBar } from  'react-native';
import { FontSize } from './FontSize';
import { Px2Dp } from './Tool';

const { width, height } = Dimensions.get('window');
const OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const isIPhoneX = (ios && height == 812 && width == 375);
const statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);
const statusTabBarHeight = (ios ? (isIPhoneX ? 34 : 0) : 0);
const navigationHeight = statusBarHeight + 44;


global.FONT_SIZE = FontSize
global.countcoordinatesX = Px2Dp

global.SCREEN_WIDTH = width,
global.SCREEN_HEIGHT = height,
global.STATUS_BAR_HEIGHT = statusBarHeight
global.STATUS_TABBAR_HEIGHT = statusTabBarHeight
global.NAVIGATION_HEIGHT = navigationHeight


global.iOS = ios,
global.Android = android,
global.IS_IPHONEX = isIPhoneX


global.kColor_BG = 'rgba(250, 250, 250, 1)'
global.kColor_Line_Color = 'rgba(245, 245, 245, 1)'
global.kColor_Text_Black = 'rgba(50, 50, 50, 1)'
global.kColor_Text_Gary = 'rgba(153, 153, 153, 1)'
global.kColor_Main_Color = 'rgba(255, 217, 68, 1)'
global.kColor_Main_Dark_Color = 'rgba(241, 206, 65, 1)'
global.kColor_Red_Color = 'rgba(255, 69, 0, 1)'          
global.kColor_Red_Dark_Color = 'rgba(242, 67, 2, 1)'     