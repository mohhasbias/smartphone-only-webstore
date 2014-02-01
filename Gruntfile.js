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
		},
		browser_sync: {
			bsFiles: {
				src: 'source/static/css/app.css'
			},
			options: {
				watchTask: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default',['browser_sync', 'watch']);
};
