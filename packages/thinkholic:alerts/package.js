Package.describe({
  name: "thinkholic:alerts",
  version: "0.0.2",
  summary: "Bootstrap Alerts. Before use this package, you need to add meteor add twbs:bootstrap package first.",
  git: "https://github.com/thinkholic/meteor-bootstrap-alerts",
  documentation: ""
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.2");
  api.use("templating", "client");
  api.addFiles("view.html", "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('thinkholic:alerts');
  api.addFiles('alerts-tests.js');
});