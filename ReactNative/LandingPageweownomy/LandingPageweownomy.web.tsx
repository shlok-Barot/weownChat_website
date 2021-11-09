//This an auto generated file for Artboard Name = LandingPageweownomy And Supports ReactNative Ver. = 0.62
import { SafeAreaView, Dimensions, PixelRatio, View, Text, FlatList, SectionList, StyleSheet, Button, TouchableOpacity, CheckBox, Switch, Platform, Image, TextInput, Picker, ActivityIndicator, Alert, ImageBackground} from 'react-native'; 
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import React from 'react'; 
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab'; 
import Radio, { RadioProps } from '@material-ui/core/Radio'; 
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core';

let screenWidth = Dimensions.get('window').width; 
let screenHeight = Dimensions.get('window').height; 
//Artboard Dimension 
let artBoardHeightOrg = 8650; 
let artBoardWidthOrg = 1920; 
//Re calculated Artboard Dimension 
let artBoardWidth =  isSameRatio() ? artBoardWidthOrg : screenWidth; 
let artBoardHeight =  isSameRatio() ? artBoardHeightOrg : screenHeight; 
// To check if Artboard and Device screen has same ratio 
function isSameRatio(): boolean {
    return artBoardWidthOrg / artBoardHeightOrg < 1 && screenWidth / screenHeight < 1 
}
 
//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch 
let extraSpace = 0; 

function deviceBasedDynamicDimension(originalDimen: number, compareWithWidth: boolean, resizeFactor: number): number | undefined 
{ 
	if (originalDimen != null)
	{ 
		if (resizeFactor != null)
		{ 
			originalDimen *= resizeFactor;
		} 
		const compareArtBoardDimenValue = compareWithWidth ? artBoardWidth : artBoardHeight; 
		const artBoardScreenDimenRatio = (originalDimen * 100) / compareArtBoardDimenValue; 
		let compareCurrentScreenDimenValue = compareWithWidth ? screenWidth : screenHeight - extraSpace; 
		if (Platform.OS === 'web') 
		{ 
			return(responsiveWidth(originalDimen/compareCurrentScreenDimenValue)*100); 
		} 
		return PixelRatio.roundToNearestPixel( (artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100,); 
	} 
	return null; 
} 
 
export default class LandingPageweownomy extends React.Component
{
	constructor(props:any)
	{ 
		super(props);
	} 

	state = {
	}

	componentDidMount() 
	{ 
		Dimensions.addEventListener('change', (e) => { 
			const { width,height } = e.window; 
			screenWidth = Dimensions.get('window').width; 
			screenHeight = Dimensions.get('window').height; 
			this.forceUpdate();
		});
	}

	render()
	{
		const styles = StyleSheet.create({
			LandingPageweownomyView:
			{
				backgroundColor: "rgba(255, 255, 255, 1)",
				flex: 1,
				alignItems: "flex-start"
			},

			view_oval:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(758, true, 1),
				height: deviceBasedDynamicDimension(673, false, 1),
				marginLeft: deviceBasedDynamicDimension(-421, true, 1),
				marginTop: deviceBasedDynamicDimension(-384, false, 1),
				opacity: 0.04487537202380952,
				backgroundColor: 'rgba(56, 138, 247, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			image_weowImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(164, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(52, true, 1),
				marginTop: deviceBasedDynamicDimension(53, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			view_rec:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(151, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(1627, true, 1),
				marginTop: deviceBasedDynamicDimension(53, false, 1),
				opacity: 1,
				borderColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(11, true, 1),
				borderWidth: deviceBasedDynamicDimension(2, true, 1),
			},

			textlabel_homeText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(68, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(627, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			attrbuted_textlabel_homeText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(68, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(627, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			textlabel_aboutusText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(103, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(780, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			attrbuted_textlabel_aboutusText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(103, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(780, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			textlabel_ourText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(141, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(968, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			attrbuted_textlabel_ourText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(141, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(968, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			textlabel_responsibilityText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(174, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(1194, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			attrbuted_textlabel_responsibilityText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(174, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(1194, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			textlabel_countryText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(90, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(1453, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			attrbuted_textlabel_countryText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(90, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(1453, true, 1),
				marginTop: deviceBasedDynamicDimension(62, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Regular',
				fontSize: deviceBasedDynamicDimension(24, true, 1),
			},

			textlabel_applyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(53, true, 1),
				height: deviceBasedDynamicDimension(23, false, 1),
				marginLeft: deviceBasedDynamicDimension(1674, true, 1),
				marginTop: deviceBasedDynamicDimension(68, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(80, 80, 80, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(19, true, 1),
			},

			attrbuted_textlabel_applyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(53, true, 1),
				height: deviceBasedDynamicDimension(23, false, 1),
				marginLeft: deviceBasedDynamicDimension(1674, true, 1),
				marginTop: deviceBasedDynamicDimension(68, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(80, 80, 80, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(19, true, 1),
			},

			view_rec2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(60, true, 1),
				height: deviceBasedDynamicDimension(4, false, 1),
				marginLeft: deviceBasedDynamicDimension(631, true, 1),
				marginTop: deviceBasedDynamicDimension(109, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(216, 36, 97, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			image_mobileImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(520, true, 1),
				height: deviceBasedDynamicDimension(728, false, 1),
				marginLeft: deviceBasedDynamicDimension(1170, true, 1),
				marginTop: deviceBasedDynamicDimension(227, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			view_oval2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(758, true, 1),
				height: deviceBasedDynamicDimension(673, false, 1),
				marginLeft: deviceBasedDynamicDimension(1072, true, 1),
				marginTop: deviceBasedDynamicDimension(243, false, 1),
				opacity: 0.04487537202380952,
				backgroundColor: 'rgba(56, 138, 247, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_oval3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(396, true, 1),
				height: deviceBasedDynamicDimension(352, false, 1),
				marginLeft: deviceBasedDynamicDimension(993, true, 1),
				marginTop: deviceBasedDynamicDimension(315, false, 1),
				opacity: 0.2411411830357143,
				backgroundColor: 'rgba(123, 222, 251, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_ownText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(423, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(47, 47, 47, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			attrbuted_textlabel_ownText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(423, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(47, 47, 47, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			attrbuted_textlabel_ownText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(423, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(184, 37, 107, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			attrbuted_textlabel_ownText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(423, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(47, 47, 47, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			textlabel_descriptionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(562, true, 1),
				height: deviceBasedDynamicDimension(38, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(598, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(125, 125, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(22, true, 1),
			},

			attrbuted_textlabel_descriptionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(562, true, 1),
				height: deviceBasedDynamicDimension(38, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(598, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(125, 125, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(22, true, 1),
			},

			view_rec3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(646, true, 1),
				height: deviceBasedDynamicDimension(97, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(701, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_oval4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1373, true, 1),
				height: deviceBasedDynamicDimension(564, false, 1),
				marginLeft: deviceBasedDynamicDimension(960, true, 1),
				marginTop: deviceBasedDynamicDimension(714, false, 1),
				opacity: 0.04906334354235885,
				backgroundColor: 'rgba(113, 124, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_toText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(40, false, 1),
				marginLeft: deviceBasedDynamicDimension(231, true, 1),
				marginTop: deviceBasedDynamicDimension(730, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(28, true, 1),
			},

			attrbuted_textlabel_toText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(493, true, 1),
				height: deviceBasedDynamicDimension(40, false, 1),
				marginLeft: deviceBasedDynamicDimension(231, true, 1),
				marginTop: deviceBasedDynamicDimension(730, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Rubik-Medium',
				fontSize: deviceBasedDynamicDimension(28, true, 1),
			},

			image_arrowImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(25, true, 1),
				height: deviceBasedDynamicDimension(23, false, 1),
				marginLeft: deviceBasedDynamicDimension(774, true, 1),
				marginTop: deviceBasedDynamicDimension(738, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_instaImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(38, true, 1),
				height: deviceBasedDynamicDimension(39, false, 1),
				marginLeft: deviceBasedDynamicDimension(345, true, 1),
				marginTop: deviceBasedDynamicDimension(870, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_fbImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(19, true, 1),
				height: deviceBasedDynamicDimension(36, false, 1),
				marginLeft: deviceBasedDynamicDimension(197, true, 1),
				marginTop: deviceBasedDynamicDimension(872, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_twitterImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(37, true, 1),
				height: deviceBasedDynamicDimension(31, false, 1),
				marginLeft: deviceBasedDynamicDimension(266, true, 1),
				marginTop: deviceBasedDynamicDimension(874, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			view_round:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(19, true, 1),
				height: deviceBasedDynamicDimension(19, false, 1),
				marginLeft: deviceBasedDynamicDimension(889, true, 1),
				marginTop: deviceBasedDynamicDimension(940, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_round2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(13, true, 1),
				height: deviceBasedDynamicDimension(14, false, 1),
				marginLeft: deviceBasedDynamicDimension(936, true, 1),
				marginTop: deviceBasedDynamicDimension(943, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(124, 124, 124, 0.3188374125874126)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_round3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(13, true, 1),
				height: deviceBasedDynamicDimension(14, false, 1),
				marginLeft: deviceBasedDynamicDimension(977, true, 1),
				marginTop: deviceBasedDynamicDimension(943, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(124, 124, 124, 0.3188374125874126)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_round4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(13, true, 1),
				height: deviceBasedDynamicDimension(14, false, 1),
				marginLeft: deviceBasedDynamicDimension(1019, true, 1),
				marginTop: deviceBasedDynamicDimension(943, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(124, 124, 124, 0.3188374125874126)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1920, true, 1),
				height: deviceBasedDynamicDimension(1154, false, 1),
				marginLeft: deviceBasedDynamicDimension(0, true, 1),
				marginTop: deviceBasedDynamicDimension(1032, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_1millionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1203, true, 1),
				height: deviceBasedDynamicDimension(192, false, 1),
				marginLeft: deviceBasedDynamicDimension(710, true, 1),
				marginTop: deviceBasedDynamicDimension(1099, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			attrbuted_textlabel_1millionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1203, true, 1),
				height: deviceBasedDynamicDimension(192, false, 1),
				marginLeft: deviceBasedDynamicDimension(710, true, 1),
				marginTop: deviceBasedDynamicDimension(1099, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			textlabel_weowText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(476, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(71, true, 1),
				marginTop: deviceBasedDynamicDimension(1105, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(216, 216, 216, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(98, true, 1),
			},

			attrbuted_textlabel_weowText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(476, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(71, true, 1),
				marginTop: deviceBasedDynamicDimension(1105, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(244, 248, 248, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(98, true, 1),
			},

			image_cryptoImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(189, true, 1),
				height: deviceBasedDynamicDimension(170, false, 1),
				marginLeft: deviceBasedDynamicDimension(171, true, 1),
				marginTop: deviceBasedDynamicDimension(1470, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_socialImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(190, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(1063, true, 1),
				marginTop: deviceBasedDynamicDimension(1470, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_rewardText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(725, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(172, true, 1),
				marginTop: deviceBasedDynamicDimension(1724, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			attrbuted_textlabel_rewardText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(725, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(172, true, 1),
				marginTop: deviceBasedDynamicDimension(1724, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			textlabel_socialText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(1063, true, 1),
				marginTop: deviceBasedDynamicDimension(1724, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			attrbuted_textlabel_socialText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(1063, true, 1),
				marginTop: deviceBasedDynamicDimension(1724, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			textlabel_decText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(823, true, 1),
				height: deviceBasedDynamicDimension(171, false, 1),
				marginLeft: deviceBasedDynamicDimension(174, true, 1),
				marginTop: deviceBasedDynamicDimension(1920, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			attrbuted_textlabel_decText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(823, true, 1),
				height: deviceBasedDynamicDimension(171, false, 1),
				marginLeft: deviceBasedDynamicDimension(174, true, 1),
				marginTop: deviceBasedDynamicDimension(1920, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			textlabel_decText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(204, false, 1),
				marginLeft: deviceBasedDynamicDimension(1063, true, 1),
				marginTop: deviceBasedDynamicDimension(1920, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			attrbuted_textlabel_decText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(204, false, 1),
				marginLeft: deviceBasedDynamicDimension(1063, true, 1),
				marginTop: deviceBasedDynamicDimension(1920, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			image_picImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1920, true, 1),
				height: deviceBasedDynamicDimension(869, false, 1),
				marginLeft: deviceBasedDynamicDimension(0, true, 1),
				marginTop: deviceBasedDynamicDimension(2218, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			view_rec5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1761, true, 1),
				height: deviceBasedDynamicDimension(690, false, 1),
				marginLeft: deviceBasedDynamicDimension(71, true, 1),
				marginTop: deviceBasedDynamicDimension(2316, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 0.9420891608391608)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(223, false, 1),
				marginLeft: deviceBasedDynamicDimension(127, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(248, 248, 248, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(490, false, 1),
				marginLeft: deviceBasedDynamicDimension(127, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec8:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(223, false, 1),
				marginLeft: deviceBasedDynamicDimension(544, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(248, 248, 248, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec9:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(490, false, 1),
				marginLeft: deviceBasedDynamicDimension(544, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec10:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(397, true, 1),
				height: deviceBasedDynamicDimension(223, false, 1),
				marginLeft: deviceBasedDynamicDimension(962, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(248, 248, 248, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec11:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(490, false, 1),
				marginLeft: deviceBasedDynamicDimension(962, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec12:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(398, true, 1),
				height: deviceBasedDynamicDimension(490, false, 1),
				marginLeft: deviceBasedDynamicDimension(1379, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 255, 255, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_rec13:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(397, true, 1),
				height: deviceBasedDynamicDimension(223, false, 1),
				marginLeft: deviceBasedDynamicDimension(1379, true, 1),
				marginTop: deviceBasedDynamicDimension(2427, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(248, 248, 248, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_howText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(122, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(147, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_howText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(122, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(147, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_onceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(234, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(558, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_onceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(234, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(558, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_onceText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(206, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(977, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_onceText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(206, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(977, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_onceText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(330, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(1394, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_onceText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(330, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(1394, true, 1),
				marginTop: deviceBasedDynamicDimension(2686, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_workspaceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(147, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			attrbuted_textlabel_workspaceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(147, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			textlabel_onceText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(560, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			attrbuted_textlabel_onceText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(560, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			textlabel_onceText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(980, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			attrbuted_textlabel_onceText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(980, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			textlabel_onceText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(1396, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			attrbuted_textlabel_onceText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(140, false, 1),
				marginLeft: deviceBasedDynamicDimension(1396, true, 1),
				marginTop: deviceBasedDynamicDimension(2725, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(111, 111, 112, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(16, true, 1),
			},

			textlabel_voiceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1203, true, 1),
				height: deviceBasedDynamicDimension(192, false, 1),
				marginLeft: deviceBasedDynamicDimension(241, true, 1),
				marginTop: deviceBasedDynamicDimension(3160, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			attrbuted_textlabel_voiceText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1203, true, 1),
				height: deviceBasedDynamicDimension(192, false, 1),
				marginLeft: deviceBasedDynamicDimension(241, true, 1),
				marginTop: deviceBasedDynamicDimension(3160, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(70, true, 1),
			},

			textlabel_weowText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(476, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(1356, true, 1),
				marginTop: deviceBasedDynamicDimension(3215, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(216, 216, 216, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(98, true, 1),
			},

			attrbuted_textlabel_weowText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(476, true, 1),
				height: deviceBasedDynamicDimension(160, false, 1),
				marginLeft: deviceBasedDynamicDimension(1356, true, 1),
				marginTop: deviceBasedDynamicDimension(3215, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(244, 248, 248, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(98, true, 1),
			},

			image_rewardImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(150, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(241, true, 1),
				marginTop: deviceBasedDynamicDimension(3557, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_businessImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(184, true, 1),
				height: deviceBasedDynamicDimension(148, false, 1),
				marginLeft: deviceBasedDynamicDimension(1145, true, 1),
				marginTop: deviceBasedDynamicDimension(3557, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_rewardText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(725, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(241, true, 1),
				marginTop: deviceBasedDynamicDimension(3785, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			attrbuted_textlabel_rewardText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(725, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(241, true, 1),
				marginTop: deviceBasedDynamicDimension(3785, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			textlabel_businessText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(1132, true, 1),
				marginTop: deviceBasedDynamicDimension(3785, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			attrbuted_textlabel_businessText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(150, false, 1),
				marginLeft: deviceBasedDynamicDimension(1132, true, 1),
				marginTop: deviceBasedDynamicDimension(3785, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(55, true, 1),
			},

			textlabel_byText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(823, true, 1),
				height: deviceBasedDynamicDimension(171, false, 1),
				marginLeft: deviceBasedDynamicDimension(243, true, 1),
				marginTop: deviceBasedDynamicDimension(3981, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			attrbuted_textlabel_byText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(823, true, 1),
				height: deviceBasedDynamicDimension(171, false, 1),
				marginLeft: deviceBasedDynamicDimension(243, true, 1),
				marginTop: deviceBasedDynamicDimension(3981, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			textlabel_appText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(204, false, 1),
				marginLeft: deviceBasedDynamicDimension(1132, true, 1),
				marginTop: deviceBasedDynamicDimension(3981, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			attrbuted_textlabel_appText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(753, true, 1),
				height: deviceBasedDynamicDimension(204, false, 1),
				marginLeft: deviceBasedDynamicDimension(1132, true, 1),
				marginTop: deviceBasedDynamicDimension(3981, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(38, true, 1),
			},

			view_bg:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1596, true, 1),
				height: deviceBasedDynamicDimension(972, false, 1),
				marginLeft: deviceBasedDynamicDimension(159, true, 1),
				marginTop: deviceBasedDynamicDimension(4295, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			image_piccImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(928, true, 1),
				height: deviceBasedDynamicDimension(772, false, 1),
				marginLeft: deviceBasedDynamicDimension(992, true, 1),
				marginTop: deviceBasedDynamicDimension(4390, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_decText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(297, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4458, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			attrbuted_textlabel_decText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(297, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4458, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			textlabel_decText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4500, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_decText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(365, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4500, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_decText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(325, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4628, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			attrbuted_textlabel_decText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(325, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4628, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			textlabel_decText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(423, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4670, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_decText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(423, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4670, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_decText7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(554, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4799, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			attrbuted_textlabel_decText7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(554, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4799, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			textlabel_decText8:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(500, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4841, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_decText8:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(500, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4841, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			textlabel_decText9:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(535, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4969, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			attrbuted_textlabel_decText9:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(535, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(4969, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Semibold',
				fontSize: deviceBasedDynamicDimension(26, true, 1),
			},

			textlabel_decText10:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(466, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(5039, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			attrbuted_textlabel_decText10:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(466, true, 1),
				height: deviceBasedDynamicDimension(56, false, 1),
				marginLeft: deviceBasedDynamicDimension(341, true, 1),
				marginTop: deviceBasedDynamicDimension(5039, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(20, true, 1),
			},

			view_rec14:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1920, true, 1),
				height: deviceBasedDynamicDimension(1265, false, 1),
				marginLeft: deviceBasedDynamicDimension(0, true, 1),
				marginTop: deviceBasedDynamicDimension(5331, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(250, 250, 250, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_reward:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1129, true, 1),
				height: deviceBasedDynamicDimension(54, false, 1),
				marginLeft: deviceBasedDynamicDimension(395, true, 1),
				marginTop: deviceBasedDynamicDimension(5404, false, 1),
				opacity: 1,
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_weownomyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1265, true, 1),
				height: deviceBasedDynamicDimension(80, false, 1),
				marginLeft: deviceBasedDynamicDimension(328, true, 1),
				marginTop: deviceBasedDynamicDimension(5513, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(125, 125, 125, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'HelveticaNeue-Medium',
				fontSize: deviceBasedDynamicDimension(32, true, 1),
			},

			attrbuted_textlabel_weownomyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1265, true, 1),
				height: deviceBasedDynamicDimension(80, false, 1),
				marginLeft: deviceBasedDynamicDimension(328, true, 1),
				marginTop: deviceBasedDynamicDimension(5513, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(125, 125, 125, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'HelveticaNeue-Medium',
				fontSize: deviceBasedDynamicDimension(32, true, 1),
			},

			image_twoImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(674, true, 1),
				height: deviceBasedDynamicDimension(684, false, 1),
				marginLeft: deviceBasedDynamicDimension(647, true, 1),
				marginTop: deviceBasedDynamicDimension(5641, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_threeImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(673, true, 1),
				height: deviceBasedDynamicDimension(684, false, 1),
				marginLeft: deviceBasedDynamicDimension(1225, true, 1),
				marginTop: deviceBasedDynamicDimension(5642, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_oneImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(521, true, 1),
				height: deviceBasedDynamicDimension(530, false, 1),
				marginLeft: deviceBasedDynamicDimension(132, true, 1),
				marginTop: deviceBasedDynamicDimension(5703, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_appleImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(400, true, 1),
				height: deviceBasedDynamicDimension(119, false, 1),
				marginLeft: deviceBasedDynamicDimension(1178, true, 1),
				marginTop: deviceBasedDynamicDimension(6333, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_googleImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(400, true, 1),
				height: deviceBasedDynamicDimension(119, false, 1),
				marginLeft: deviceBasedDynamicDimension(732, true, 1),
				marginTop: deviceBasedDynamicDimension(6339, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_downloadText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(427, true, 1),
				height: deviceBasedDynamicDimension(54, false, 1),
				marginLeft: deviceBasedDynamicDimension(152, true, 1),
				marginTop: deviceBasedDynamicDimension(6379, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'HelveticaNeue-Bold',
				fontSize: deviceBasedDynamicDimension(60, true, 1),
			},

			attrbuted_textlabel_downloadText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(427, true, 1),
				height: deviceBasedDynamicDimension(54, false, 1),
				marginLeft: deviceBasedDynamicDimension(152, true, 1),
				marginTop: deviceBasedDynamicDimension(6379, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(55, 55, 55, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'HelveticaNeue-Bold',
				fontSize: deviceBasedDynamicDimension(60, true, 1),
			},

			textlabel_getText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1056, true, 1),
				height: deviceBasedDynamicDimension(274, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(6669, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(100, true, 1),
			},

			attrbuted_textlabel_getText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1056, true, 1),
				height: deviceBasedDynamicDimension(274, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(6669, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Heavy',
				fontSize: deviceBasedDynamicDimension(100, true, 1),
			},

			textlabel_rewardText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(617, true, 1),
				height: deviceBasedDynamicDimension(174, false, 1),
				marginLeft: deviceBasedDynamicDimension(1256, true, 1),
				marginTop: deviceBasedDynamicDimension(6749, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(216, 216, 216, 1)',
				textAlign: 'right',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(128, true, 1),
			},

			attrbuted_textlabel_rewardText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(617, true, 1),
				height: deviceBasedDynamicDimension(174, false, 1),
				marginLeft: deviceBasedDynamicDimension(1256, true, 1),
				marginTop: deviceBasedDynamicDimension(6749, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(244, 248, 248, 1)',
				textAlign: 'right',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Black',
				fontSize: deviceBasedDynamicDimension(128, true, 1),
			},

			textlabel_fiftyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(169, true, 1),
				height: deviceBasedDynamicDimension(89, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(7097, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(75, true, 1),
			},

			attrbuted_textlabel_fiftyText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(169, true, 1),
				height: deviceBasedDynamicDimension(89, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(7097, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(75, true, 1),
			},

			textlabel_fiftyText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(345, true, 1),
				height: deviceBasedDynamicDimension(89, false, 1),
				marginLeft: deviceBasedDynamicDimension(771, true, 1),
				marginTop: deviceBasedDynamicDimension(7097, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(75, true, 1),
			},

			attrbuted_textlabel_fiftyText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(345, true, 1),
				height: deviceBasedDynamicDimension(89, false, 1),
				marginLeft: deviceBasedDynamicDimension(771, true, 1),
				marginTop: deviceBasedDynamicDimension(7097, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(75, true, 1),
			},

			view_line:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(47, true, 1),
				height: deviceBasedDynamicDimension(8, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(7194, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_line2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(47, true, 1),
				height: deviceBasedDynamicDimension(8, false, 1),
				marginLeft: deviceBasedDynamicDimension(771, true, 1),
				marginTop: deviceBasedDynamicDimension(7195, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_fiftyText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(544, true, 1),
				height: deviceBasedDynamicDimension(110, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(7246, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			attrbuted_textlabel_fiftyText3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(544, true, 1),
				height: deviceBasedDynamicDimension(110, false, 1),
				marginLeft: deviceBasedDynamicDimension(81, true, 1),
				marginTop: deviceBasedDynamicDimension(7246, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			textlabel_fiftyText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(544, true, 1),
				height: deviceBasedDynamicDimension(110, false, 1),
				marginLeft: deviceBasedDynamicDimension(771, true, 1),
				marginTop: deviceBasedDynamicDimension(7247, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			attrbuted_textlabel_fiftyText4:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(544, true, 1),
				height: deviceBasedDynamicDimension(110, false, 1),
				marginLeft: deviceBasedDynamicDimension(771, true, 1),
				marginTop: deviceBasedDynamicDimension(7247, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(129, 131, 131, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			view_bg2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1926, true, 1),
				height: deviceBasedDynamicDimension(1196, false, 1),
				marginLeft: deviceBasedDynamicDimension(-3, true, 1),
				marginTop: deviceBasedDynamicDimension(7454, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(130, 42, 125, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_weownomyText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(404, true, 1),
				height: deviceBasedDynamicDimension(60, false, 1),
				marginLeft: deviceBasedDynamicDimension(758, true, 1),
				marginTop: deviceBasedDynamicDimension(7565, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(50, true, 1),
			},

			attrbuted_textlabel_weownomyText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(404, true, 1),
				height: deviceBasedDynamicDimension(60, false, 1),
				marginLeft: deviceBasedDynamicDimension(758, true, 1),
				marginTop: deviceBasedDynamicDimension(7565, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Heavy',
				fontSize: deviceBasedDynamicDimension(50, true, 1),
			},

			textlabel_brickText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1235, true, 1),
				height: deviceBasedDynamicDimension(96, false, 1),
				marginLeft: deviceBasedDynamicDimension(343, true, 1),
				marginTop: deviceBasedDynamicDimension(7670, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			attrbuted_textlabel_brickText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1235, true, 1),
				height: deviceBasedDynamicDimension(96, false, 1),
				marginLeft: deviceBasedDynamicDimension(343, true, 1),
				marginTop: deviceBasedDynamicDimension(7670, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			textlabel_aboutText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(112, true, 1),
				height: deviceBasedDynamicDimension(48, false, 1),
				marginLeft: deviceBasedDynamicDimension(183, true, 1),
				marginTop: deviceBasedDynamicDimension(7912, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Bold',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			attrbuted_textlabel_aboutText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(112, true, 1),
				height: deviceBasedDynamicDimension(48, false, 1),
				marginLeft: deviceBasedDynamicDimension(183, true, 1),
				marginTop: deviceBasedDynamicDimension(7912, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Bold',
				fontSize: deviceBasedDynamicDimension(40, true, 1),
			},

			view_oval5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(189, true, 1),
				height: deviceBasedDynamicDimension(189, false, 1),
				marginLeft: deviceBasedDynamicDimension(1439, true, 1),
				marginTop: deviceBasedDynamicDimension(7924, false, 1),
				opacity: 0.1,
				backgroundColor: 'rgba(255, 72, 156, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_fiftyText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(332, true, 1),
				height: deviceBasedDynamicDimension(270, false, 1),
				marginLeft: deviceBasedDynamicDimension(1020, true, 1),
				marginTop: deviceBasedDynamicDimension(7977, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(30, true, 1),
			},

			attrbuted_textlabel_fiftyText5:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(332, true, 1),
				height: deviceBasedDynamicDimension(270, false, 1),
				marginLeft: deviceBasedDynamicDimension(1020, true, 1),
				marginTop: deviceBasedDynamicDimension(7977, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(30, true, 1),
			},

			view_oval6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(65, true, 1),
				height: deviceBasedDynamicDimension(65, false, 1),
				marginLeft: deviceBasedDynamicDimension(1500, true, 1),
				marginTop: deviceBasedDynamicDimension(7985, false, 1),
				opacity: 0.3,
				backgroundColor: 'rgba(255, 72, 156, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			view_oval7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(28, true, 1),
				height: deviceBasedDynamicDimension(28, false, 1),
				marginLeft: deviceBasedDynamicDimension(1518, true, 1),
				marginTop: deviceBasedDynamicDimension(8004, false, 1),
				opacity: 1,
				backgroundColor: 'rgba(255, 72, 156, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(0, true, 1),
			},

			textlabel_fiftyText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(719, true, 1),
				height: deviceBasedDynamicDimension(410, false, 1),
				marginLeft: deviceBasedDynamicDimension(183, true, 1),
				marginTop: deviceBasedDynamicDimension(8006, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(30, true, 1),
			},

			attrbuted_textlabel_fiftyText6:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(719, true, 1),
				height: deviceBasedDynamicDimension(410, false, 1),
				marginLeft: deviceBasedDynamicDimension(183, true, 1),
				marginTop: deviceBasedDynamicDimension(8006, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Avenir-Roman',
				fontSize: deviceBasedDynamicDimension(30, true, 1),
			},

			image_bgImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(594, true, 1),
				height: deviceBasedDynamicDimension(579, false, 1),
				marginLeft: deviceBasedDynamicDimension(1326, true, 1),
				marginTop: deviceBasedDynamicDimension(8072, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_addText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(219, true, 1),
				height: deviceBasedDynamicDimension(120, false, 1),
				marginLeft: deviceBasedDynamicDimension(1554, true, 1),
				marginTop: deviceBasedDynamicDimension(8196, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			attrbuted_textlabel_addText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(219, true, 1),
				height: deviceBasedDynamicDimension(120, false, 1),
				marginLeft: deviceBasedDynamicDimension(1554, true, 1),
				marginTop: deviceBasedDynamicDimension(8196, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(0, 0, 0, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			image_addressImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(28, true, 1),
				height: deviceBasedDynamicDimension(41, false, 1),
				marginLeft: deviceBasedDynamicDimension(1484, true, 1),
				marginTop: deviceBasedDynamicDimension(8210, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			image_callImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(34, true, 1),
				height: deviceBasedDynamicDimension(41, false, 1),
				marginLeft: deviceBasedDynamicDimension(1480, true, 1),
				marginTop: deviceBasedDynamicDimension(8338, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_callText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(176, true, 1),
				height: deviceBasedDynamicDimension(60, false, 1),
				marginLeft: deviceBasedDynamicDimension(1553, true, 1),
				marginTop: deviceBasedDynamicDimension(8338, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			attrbuted_textlabel_callText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(176, true, 1),
				height: deviceBasedDynamicDimension(60, false, 1),
				marginLeft: deviceBasedDynamicDimension(1553, true, 1),
				marginTop: deviceBasedDynamicDimension(8338, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			image_emailImage:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(38, true, 1),
				height: deviceBasedDynamicDimension(33, false, 1),
				marginLeft: deviceBasedDynamicDimension(1478, true, 1),
				marginTop: deviceBasedDynamicDimension(8426, false, 1),
				opacity: 1,
				resizeMode: 'contain',
			},

			textlabel_officeText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(278, true, 1),
				height: deviceBasedDynamicDimension(30, false, 1),
				marginLeft: deviceBasedDynamicDimension(1553, true, 1),
				marginTop: deviceBasedDynamicDimension(8428, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			attrbuted_textlabel_officeText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(278, true, 1),
				height: deviceBasedDynamicDimension(30, false, 1),
				marginLeft: deviceBasedDynamicDimension(1553, true, 1),
				marginTop: deviceBasedDynamicDimension(8428, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(130, 42, 125, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Medium',
				fontSize: deviceBasedDynamicDimension(25, true, 1),
			},

			textlabel_executionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(444, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(192, true, 1),
				marginTop: deviceBasedDynamicDimension(8476, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(238, 238, 238, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'LucidaGrande-Bold',
				fontSize: deviceBasedDynamicDimension(18, true, 1),
			},

			attrbuted_textlabel_executionText:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(444, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(192, true, 1),
				marginTop: deviceBasedDynamicDimension(8476, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'bold',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(238, 238, 238, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'LucidaGrande-Bold',
				fontSize: deviceBasedDynamicDimension(18, true, 1),
			},

			attrbuted_textlabel_executionText2:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(444, true, 1),
				height: deviceBasedDynamicDimension(32, false, 1),
				marginLeft: deviceBasedDynamicDimension(192, true, 1),
				marginTop: deviceBasedDynamicDimension(8476, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(238, 238, 238, 1)',
				textAlign: 'left',
				textAlignVertical: 'top',
				fontFamily: 'Metropolis-Medium',
				fontSize: deviceBasedDynamicDimension(18, true, 1),
			},

			view_line3:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(1920, true, 1),
				height: deviceBasedDynamicDimension(1, false, 1),
				marginLeft: deviceBasedDynamicDimension(0, true, 1),
				marginTop: deviceBasedDynamicDimension(8538, false, 1),
				opacity: 1,
				borderColor: 'rgba(181, 181, 181, 1)',
				borderRadius: deviceBasedDynamicDimension(0, true, 1),
				borderWidth: deviceBasedDynamicDimension(1, true, 1),
			},

			textlabel_fiftyText7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(636, true, 1),
				height: deviceBasedDynamicDimension(38, false, 1),
				marginLeft: deviceBasedDynamicDimension(642, true, 1),
				marginTop: deviceBasedDynamicDimension(8568, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(32, true, 1),
			},

			attrbuted_textlabel_fiftyText7:
			{
				position: 'absolute',
				width: deviceBasedDynamicDimension(636, true, 1),
				height: deviceBasedDynamicDimension(38, false, 1),
				marginLeft: deviceBasedDynamicDimension(642, true, 1),
				marginTop: deviceBasedDynamicDimension(8568, false, 1),
				opacity: 1,
				backgroundColor: 'transparent',
				fontStyle: 'normal',
				fontWeight: 'normal',
				includeFontPadding: false,
				padding: deviceBasedDynamicDimension(0, true, 1),
				color: 'rgba(255, 255, 255, 1)',
				textAlign: 'center',
				textAlignVertical: 'top',
				fontFamily: 'SFProDisplay-Regular',
				fontSize: deviceBasedDynamicDimension(32, true, 1),
			},

			})
 
 
 	return (

		<SafeAreaView style={{"flex":1}}> 
		<View 
				style={styles.LandingPageweownomyView}>
		<View
		   style={[styles.view_oval, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<Image
		   style={styles.image_weowImage}
		   source={require('./assets/7184defd9a011b7d0fe64d405ca6f58956078765.png')}
		/>
		<View
		   style={[styles.view_rec, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_homeText}>Home
		  </Text>
		  <Text
			   style={styles.textlabel_aboutusText}>About Us
		  </Text>
		  <Text
			   style={styles.textlabel_ourText}>Our Services
		  </Text>
		  <Text
			   style={styles.textlabel_responsibilityText}>Responsibilities
		  </Text>
		  <Text
			   style={styles.textlabel_countryText}>Country
		  </Text>
		  <Text
			   style={styles.textlabel_applyText}>Apply
		  </Text>
		<View
		   style={[styles.view_rec2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<Image
		   style={styles.image_mobileImage}
		   source={require('./assets/764ac60e4c277db618efd9fa862c3d9b2dfa5801.png')}
		/>
		<View
		   style={[styles.view_oval2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_oval3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.attrbuted_textlabel_ownText}>Own your own{'\n'}
		  		  <Text
			   style={styles.attrbuted_textlabel_ownText2}>social
		  </Text>
 
		  		  <Text
			   style={styles.attrbuted_textlabel_ownText3}> network
		  </Text>
 
		  </Text>
		  <Text
			   style={styles.textlabel_descriptionText}>The first global social network that pays you to use it.
		  </Text>
		<View
		   style={[styles.view_rec3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_oval4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_toText}>To Launch an MVP in December 2021
		  </Text>
		<Image
		   style={styles.image_arrowImage}
		   source={require('./assets/65cb2346f9ccfcf65d214f89386f1b92a1dc2346.png')}
		/>
		<Image
		   style={styles.image_instaImage}
		   source={require('./assets/1f1cd9aa2b7c612813e67f6de0a2b13013e8abe0.png')}
		/>
		<Image
		   style={styles.image_fbImage}
		   source={require('./assets/20b1ec5a3dbdd83d90bfe2c3f444f64de88f2144.png')}
		/>
		<Image
		   style={styles.image_twitterImage}
		   source={require('./assets/0bd7d69f5233968ca8cd7ab49b5b01da0ff90f10.png')}
		/>
		<View
		   style={[styles.view_round, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_round2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_round3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_round4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec4, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_1millionText}>1 billion people are about to get WEOWNS with WeownomyChat
		  </Text>
		  <Text
			   style={styles.textlabel_weowText}>WEOWNS
		  </Text>
		<Image
		   style={styles.image_cryptoImage}
		   source={require('./assets/6b44d2b581fd35e051708edf382867a133036814.png')}
		/>
		<Image
		   style={styles.image_socialImage}
		   source={require('./assets/69a1c0def3b438edd4a5fc5e265ec35208e50218.png')}
		/>
		  <Text
			   style={styles.textlabel_rewardText}>Reward Social Media Users with Cryptocurrency
		  </Text>
		  <Text
			   style={styles.textlabel_socialText}>Increase Engagement on Social Media Platforms
		  </Text>
		  <Text
			   style={styles.textlabel_decText}>By incentivizing social media use, we can create a healthier internet culture by rewarding positive behavior rather than punishing negative behavior.
		  </Text>
		  <Text
			   style={styles.textlabel_decText2}>The app has been created in response to the increasing amount of fake accounts and bot activity that is often seen on popular platforms like Facebook, Instagram, Twitter etc.
		  </Text>
		<Image
		   style={styles.image_picImage}
		   source={require('./assets/8c20f03f418c94dc0765ec57044d3877f092d657.png')}
		/>
		<View
		   style={[styles.view_rec5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec6, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec7, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec8, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec9, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec10, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec11, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec12, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_rec13, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_howText}>How It Works.
		  </Text>
		  <Text
			   style={styles.textlabel_onceText}>You create your campaign.
		  </Text>
		  <Text
			   style={styles.textlabel_onceText2}>Users engage with you.
		  </Text>
		  <Text
			   style={styles.textlabel_onceText3}>Collect rewards & grow follower base 
		  </Text>
		  <Text
			   style={styles.textlabel_workspaceText}>Workspace is our craft. From focused offices to personalised headquarters, we bring 10 years of design and operational.
		  </Text>
		  <Text
			   style={styles.textlabel_onceText4}>Set the parameters of your campaign and choose how many tokens you want to award per engagement, then launch it on WeownomyChat or Weownomy Web where all of your followers can join in the fun!
		  </Text>
		  <Text
			   style={styles.textlabel_onceText5}>Your fans will be rewarded with WEOWNS for liking, commenting, following and sharing posts from your page. They'll also earn more tokens by inviting their friends to become part of the movement too!.
		  </Text>
		  <Text
			   style={styles.textlabel_onceText6}>Once they've collected enough points, users can redeem their WEOWNS for products or services that are offered by brands who support WeownomyChat.
		  </Text>
		  <Text
			   style={styles.textlabel_voiceText}>Share your voice and earn WEOWNS.
		  </Text>
		  <Text
			   style={styles.textlabel_weowText2}>WEOWNS
		  </Text>
		<Image
		   style={styles.image_rewardImage}
		   source={require('./assets/8a04125daf638a9a01c6729eae136752195f535a.png')}
		/>
		<Image
		   style={styles.image_businessImage}
		   source={require('./assets/63ac9a315aa1dbc754043e34d17eea1acc5d3143.png')}
		/>
		  <Text
			   style={styles.textlabel_rewardText2}>Reward yourself by sharing{'\n'}your thoughts.
		  </Text>
		  <Text
			   style={styles.textlabel_businessText}>More than just tool - it’s a{'\n'}business tool too!
		  </Text>
		  <Text
			   style={styles.textlabel_byText}>By incentivizing social media use, we can create a healthier internet culture by rewarding positive behavior rather than punishing negative behavior.
		  </Text>
		  <Text
			   style={styles.textlabel_appText}>The app has been created in response to the increasing amount of fake accounts and bot activity that is often seen on popular platforms like Facebook, Instagram, Twitter etc.
		  </Text>
		<View
		   style={[styles.view_bg, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<Image
		   style={styles.image_piccImage}
		   source={require('./assets/f676801ad4ee5320c165b3299b2afafa1085681d.png')}
		/>
		  <Text
			   style={styles.textlabel_decText3}>What is WeownomyChat?
		  </Text>
		  <Text
			   style={styles.textlabel_decText4}>The only social media app that rewards you for engaging with others.
		  </Text>
		  <Text
			   style={styles.textlabel_decText5}>Get rewarded for your posts.
		  </Text>
		  <Text
			   style={styles.textlabel_decText6}>Your post gets a WEOWN when it's liked, shared or commented on by another user.
		  </Text>
		  <Text
			   style={styles.textlabel_decText7}>Use your WEOWNS to get more likes and shares.
		  </Text>
		  <Text
			   style={styles.textlabel_decText8}>You can use your WEOWNS to like and share other people's posts - in turn they'll give you some of their own!
		  </Text>
		  <Text
			   style={styles.textlabel_decText9}>Spend time doing what you love online without {'\n'}having to spend money on ads.
		  </Text>
		  <Text
			   style={styles.textlabel_decText10}>WeownomyChat lets you monetize the time spent interacting with social media - which we all do anyways!
		  </Text>
		<View
		   style={[styles.view_rec14, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_reward, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_weownomyText}>Weownomy Chat is a new way to earn money from posting on {'\n'}social media, the first of its kind.
		  </Text>
		<Image
		   style={styles.image_twoImage}
		   source={require('./assets/f6b2e8e4056a8a53acffbbee2e06fc621790967b.png')}
		/>
		<Image
		   style={styles.image_threeImage}
		   source={require('./assets/0a3e3f8d05ce4819db00342d0ac7e95437af480d.png')}
		/>
		<Image
		   style={styles.image_oneImage}
		   source={require('./assets/286bbe975f3cc94c80421bb3ca94a9ee51e22478.png')}
		/>
		<Image
		   style={styles.image_appleImage}
		   source={require('./assets/5db1fd02524b85a8bc0502913e8421f0b38521b9.png')}
		/>
		<Image
		   style={styles.image_googleImage}
		   source={require('./assets/1a34f06e7de6b2c0b93e642af64207513c6d39fe.png')}
		/>
		  <Text
			   style={styles.textlabel_downloadText}>Download Now
		  </Text>
		  <Text
			   style={styles.textlabel_getText}>Get rewarded for your{'\n'}social media efforts.
		  </Text>
		  <Text
			   style={styles.textlabel_rewardText3}>Rewarded
		  </Text>
		  <Text
			   style={styles.textlabel_fiftyText}>50%
		  </Text>
		  <Text
			   style={styles.textlabel_fiftyText2}>2.2 billion
		  </Text>
		<View
		   style={[styles.view_line, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_line2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_fiftyText3}>Reward system that increases engagement.
		  </Text>
		  <Text
			   style={styles.textlabel_fiftyText4}>Global potential users with WeownomyChat account.
		  </Text>
		<View
		   style={[styles.view_bg2, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_weownomyText2}>Weownomy Chat
		  </Text>
		  <Text
			   style={styles.textlabel_brickText}>Brickshare is an online platform that connects real estate companies with people interested in investing in real estate.
		  </Text>
		  <Text
			   style={styles.textlabel_aboutText}>About
		  </Text>
		<View
		   style={[styles.view_oval5, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_fiftyText5}>F.A.Q{'\n'}Privacy policy {'\n'}Terms & Condition
		  </Text>
		<View
		   style={[styles.view_oval6, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		<View
		   style={[styles.view_oval7, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_fiftyText6}>Weownomy Platform Corporation, Incorporated in the State of Delaware https://www.weownomy.global is launching a subscription based, open and participatory platform. A new redefined social network that facilitates people's participation in the democratic process of defining their own rules for their future, generating an ownership structure where every person has rights to share in the proceeds generated by this new economy and hence true economic equality
		  </Text>
		<Image
		   style={styles.image_bgImage}
		   source={require('./assets/3fdc7aea096bf5a3ea25b17998d7ee12f018b066.png')}
		/>
		  <Text
			   style={styles.textlabel_addText}>256 Chapman Road STE 105-4, Delaware United State of America
		  </Text>
		<Image
		   style={styles.image_addressImage}
		   source={require('./assets/bcd9695c1055c816e9099409297523b23e2aa6e6.png')}
		/>
		<Image
		   style={styles.image_callImage}
		   source={require('./assets/adebcaba66e397ee4a1bf14575364e3e26666cb1.png')}
		/>
		  <Text
			   style={styles.textlabel_callText}>302-565-3849{'\n'}+26656553721
		  </Text>
		<Image
		   style={styles.image_emailImage}
		   source={require('./assets/4af592a2de85a6276ee2e8d189255a7bb226a1a3.png')}
		/>
		  <Text
			   style={styles.textlabel_officeText}>office@weownomy.global
		  </Text>
		  <Text
			   style={styles.attrbuted_textlabel_executionText}>©
		  		  <Text
			   style={styles.attrbuted_textlabel_executionText2}> 2020 Executive Trade International.
		  </Text>
 
		  </Text>
		<View
		   style={[styles.view_line3, { flex: 1 }, { flexWrap: 'nowrap' }, { flexDirection: 'row' } ]}>
		</View>
		  <Text
			   style={styles.textlabel_fiftyText7}>© Copyright 2021 Company. All rights reserved.
		  </Text>
			</View>
			</SafeAreaView>
	
		)
	}

}
