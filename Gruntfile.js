module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: [
					'source/*.html',
					'source/partial/*.html'
				]
			},
			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
			options: {
				livereload: true
			}
		},
		browser_sync: {
			bsFiles: {
				src: 'source/static/css/app.css'
			},
			options: {
				watchTask: true
			}
		},
		sass: {
			options: {
				includePaths: ['source/static/bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'source/static/css/app.css': 'source/static/scss/app.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default',['sass', 'browser_sync', 'watch']);
};
