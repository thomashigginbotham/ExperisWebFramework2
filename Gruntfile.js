module.exports = function(grunt) {
	// Load dependencies
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'app/stylesheets',
					cssDir: 'dist/stylesheets',
					outputStyle: 'compressed'
				}
			},
			dev: {
				options: {
					sassDir: 'app/stylesheets',
					cssDir: '.tmp/stylesheets',
					outputStyle: 'expanded'
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'app/javascripts',
					mainConfigFile: 'app/javascripts/main.js',
					name: 'main',
					out: 'dist/javascripts/app-built.js',
					include: ['lib/requirejs/require'],
					findNestedDependencies: true,
					optimize: 'uglify2',
					generateSourceMaps: true,
					preserveLicenseComments: false
				}
			}
		},

		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ['app/*'], dest: 'dist/', filter: 'isFile'}
				]
			}
		},

		watch: {
			html: {
				files: ['app/**/*.html'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['app/stylesheets/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					spawn: true,
					atBegin: true,
					livereload: true
				}
			},
			js: {
				files: ['app/javascripts/**/*.js'],
				options: {
					livereload: true
				}
			}
		},

		express: {
			all: {
				options: {
					port: 9090,
					hostname: '0.0.0.0',
					bases: ['app', '.tmp'],
					open: true,
					livereload: true
				}
			}
		}
	});

	// Tasks
	grunt.registerTask('default', ['compass:dev']);
	grunt.registerTask('serve', ['compass:dev', 'express', 'watch']);
	grunt.registerTask('dist', ['compass:dist', 'requirejs', 'copy']);
};