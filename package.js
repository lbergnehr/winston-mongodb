Package.describe({
  name: 'leo:winston-mongodb',
  summary: 'Meteor wrapper for the winston-mongodb npm package.',
  version: '0.0.1'
  git: 'https://github.com/lbergnehr/winston-mongodb.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('MongoDB', 'server');
  api.addFiles('winston-mongodb.js');
});

Npm.depends({
  "winston": "0.7.3",
  "winston-mongodb": "0.5.2"
});
