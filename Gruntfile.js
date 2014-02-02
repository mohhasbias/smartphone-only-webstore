module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: [
					'source/*.html',
					'source/partial/*.html'
				],
				options: {
					livereload: true
				}
			},
			sass: {
				files: 'source/static/scss/**/*.scss',
				tasks: ['sass']
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
				includePaths: [
					'source/static/bower_components/foundation/scss',
					'source/static/bower_components/font-awesome/scss']
			},
			dist: {
				options: {
					outputStyle: 'compact'
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
