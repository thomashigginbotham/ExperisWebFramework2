module.exports = function(grunt) {
	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'stylesheets',
					cssDir: 'stylesheets',
					outputStyle: 'compressed'
				}
			},
			dev: {
				options: {
					sassDir: 'stylesheets',
					cssDir: 'stylesheets',
					outputStyle: 'expanded'
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'javascripts',
					mainConfigFile: 'javascripts/app.js',
					name: 'app',
					out: 'javascripts/dist/main.js',
					include: ['lib/require'],
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
				files: ['javascripts/app/*.js', 'javascripts/lib/*.js'],
				tasks: ['requirejs'],
				options: {
					spawn: false,
					atBegin: true,
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

	grunt.registerTask('default', ['compass:dev', 'requirejs']);
	grunt.registerTask('prod', ['compass:dist', 'requirejs']);
	grunt.registerTask('server', ['connect', 'watch']);
};