module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: ['source/*.html']
			},
			options: {
				livereload: true
			}
		},
		browser_sync: {
			dev: {
				bsFiles: {
					src: 'source/static/styles/*.css'
				},
				options: {
					watchTask: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default',['browser_sync', 'watch']);
};
