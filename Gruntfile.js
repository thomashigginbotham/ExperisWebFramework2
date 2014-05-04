module.exports = function(grunt) {
	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'stylesheets',
					cssDir: 'dist/stylesheets',
					outputStyle: 'compressed'
				}
			},
			dev: {
				options: {
					sassDir: 'stylesheets',
					cssDir: 'dist/stylesheets',
					outputStyle: 'expanded'
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'javascripts',
					mainConfigFile: 'javascripts/main.js',
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

		watch: {
			html: {
				files: ['*.htm'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['stylesheets/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					spawn: true,
					atBegin: true,
					livereload: true
				}
			},
			js: {
				files: ['javascripts/**/*.js'],
				options: {
					livereload: true
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: './'
				}
			}
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

 	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('dist', ['compass:dist', 'requirejs']);
};