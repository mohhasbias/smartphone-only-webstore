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
			options: {
				livereload: true
			}
		},
		browser_sync: {
			dev: {
				bsFiles: {
					src: 'source/static/css/*.css'
				},
				options: {
					watchTask: true,
					host: "192.168.150.1"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default',['browser_sync', 'watch']);
};
