'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.mysql = {
	enable : true ,
	package :'egg-mysql'
}

exports.security = {
  xframe: {
    enable: false,
  },
}

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

exports.oss = {
  enable: true,
  package: 'egg-oss',
};


