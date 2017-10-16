var apos = require('apostrophe')({
  shortName: 'first-test',
  title: 'first-test',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // This configures our default page template
	'apostrophe-assets': {
		stylesheets: [
			{
			  name: 'site'
			}
		]
	},
  
    'apostrophe-pages': {
      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
      ]
    }

  }
});
