module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			html: {
				files: [
					'source/*.html',
					'source/partial/*.html'
				],
				//tasks: ['shell:clayBuild'],
				options: {
					livereload: true
				}
			},
		},
		shell: {
			clayBuild: {
				command: 'clay build'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default',['watch']);
};
