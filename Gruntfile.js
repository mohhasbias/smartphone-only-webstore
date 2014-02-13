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
//			sass: {
//				files: 'sass/**/*.scss',
//				tasks: ['sass']
//			},
			js: {
				files: 'source/static/js/**/*.js',
				options: {
					livereload: true
				}
			},
			grunt: {
				files: ['Gruntfile.js']
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
					'/home/rumaisyah/.rvm/gems/ruby-1.9.3-p429@mg2mobile/gems/zurb-foundation-3.2.5/scss/',
					'/home/rumaisyah/.rvm/gems/ruby-1.9.3-p429@mg2mobile/gems/compass-0.12.2/frameworks/compass/stylesheets/',
					'/home/rumaisyah/.rvm/gems/ruby-1.9.3-p429@mg2mobile/gems/modular-scale-1.0.6/stylesheets/',
					'source/static/bower_components/font-awesome/scss']
			},
			dist: {
				options: {
					outputStyle: 'compact'
				},
				files: {
					'source/static/css/app.css': 'sass/app.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');

//	grunt.registerTask('default',['sass', 'browser_sync', 'watch']);
	grunt.registerTask('default',['browser_sync', 'watch']);
};
