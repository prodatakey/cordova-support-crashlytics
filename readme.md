# Crashlytics Support Plugin for Cordova

This pretty simply automates uploading of debug symbols for built apps and installs dependencies for Crashlytics for iOS and Android apps.

Installing this plugin is all that's necessary to start catching any crash-to-home while also getting fully instrumented stack traces in the Firebase console.

## Installation

    cordova plugin add cordova-support-crashlytics

You also need to download `google-services.json` on Android and `GoogleService-Info.plist` on iOS from Firebase console and put them into the cordova project root folder. Then use [`<resource-file>`](http://cordova.apache.org/docs/en/latest/config_ref/index.html#resource-file) to copy those files into appropriate folders:

```xml
<platform name="android">
    <resource-file src="google-services.json" target="app/google-services.json" />
    ...
</platform>
<platform name="ios">
    <resource-file src="GoogleService-Info.plist" />
    ...
</platform>
```

Note: if you use cordova-android below version 7 specify `target="google-services.json"` instead.
