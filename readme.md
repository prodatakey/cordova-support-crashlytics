# Crashlytics Support Plugin for Cordova

This pretty simply automates uploading of debug symbols for built apps and installs dependencies for Crashlytics for iOS and Android apps.

Installing this plugin is all that's necessary to start catching any crash-to-home while also getting fully instrumented stack traces in the Firebase console.

The only necessary configuration is to add the `google-services.json` and `GoogleServices-Info.plist` generated from the Firebase console next to `config.xml` in the Cordova project root directory.
