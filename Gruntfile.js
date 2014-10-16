module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        compass: {                  
            dist: {                  
              options: {              
                sassDir: './',
                cssDir: './',
                environment: 'development'
              }
            }
        },

        watch: {
             default: {
                 files: ['*.scss'],
                 tasks: ['compass']
             }
        }
 
    });
 
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
 
};