module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      compile: {
        files: {
          'dist/styles.css': 'css/styles.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less')

  grunt.registerTask('build', ['less'])
  grunt.registerTask('default', ['build'])

};