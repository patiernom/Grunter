![Logo](./assets/barred-grunter.jpg?raw=true "Grunter")

# Grunter
Gruntfile ready for every task ... everywhere!

## Installation
The easiest way is to keep `grunter` as a copy and past of Grunfile or clone this repository.

## Dependencies
Grunt

For more information on Grunt see the [homepage].
[homepage]: http://gruntjs.com/

## Usage

You just copy Gruntfile.js in your root dir project and specify the location of your task
```js
// Gruntfile.js
// Load tasks from the tasks folder
grunt.loadTasks('./tasks');
// Load all the tasks options in tasks/options base on the name:
grunt.config.merge('./tasks/options');
```


You can add some plugin for :
```json
{
  "devDependencies": {
    "grunt": "~0.10",
    "grunter-projects": "0.0.1"
    "grunter-helpers": "0.0.1"
  },
  "projectsConfig": "./config/projects.json"
}
```

Now you can specify the location of your task from simple helpers module
```js
// Gruntfile.js
grunt.loadTasks(grunt.config('projects').getProjectTasks());
grunt.config.merge(grunt.config('projects').getProjectTaskOptions());
```

And use it into tasks
```js
// customGruntTask.js
var libs = grunt.config('helpers').getLibrary("config").css
doSomething(libs.sample.samplelessvariables.srcfiles);
```


----
    
## License
MIT    