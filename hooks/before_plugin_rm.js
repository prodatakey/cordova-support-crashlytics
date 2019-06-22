
var androidHelper = require('./lib/android-helper');
var iosHelper = require("./lib/ios-helper");
var utilities = require("./lib/utilities");

module.exports = function(context) {

    var platforms = context.opts.cordova.platforms;

    // Remove the Gradle modifications that were added by the plugin
    if (platforms.indexOf("android") !== -1) {
        console.log('Ensuring removal of Crashlytics plugin from gradle config')
        androidHelper.removeFabricBuildToolsFromGradle();
    }

    // Remove the build script that was added by the plugin
    if (platforms.indexOf("ios") !== -1) {
        console.log('Ensuring removal of Crashlytics build phase from xcode project')
        var xcodeProjectPath = utilities.getXcodeProjectPath(context);
        iosHelper.removeShellScriptBuildPhase(context, xcodeProjectPath);
    }
};
