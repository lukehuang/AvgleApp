api doc
https://avgle.github.io/doc/

offline pack
react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle

react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output ./android/bundle/index.android.jsbundle --assets-dest ./ios/bundle


//AppDelegate.m


//jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];

polipo socksParentProxy=localhost:1080