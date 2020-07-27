//This file is used for app initialization


var {Dimensions, StatusBar, Platform} = require('react-native');

var {width, scale, height, fontScale} = Dimensions.get('window');

module.exports = {
  get: Dimensions.get,
  screenWidth: width,
  screenHeight: height,
  screenScale: scale,
  width: width,
  height: height,
  scale: scale,
};
