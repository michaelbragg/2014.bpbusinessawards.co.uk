# Birmingham Post Business Awards 2014
[http://bpbusinessawards.co.uk/2014/](http://www.bpbusinessawards.co.uk/2014/)

## Description
Website to support the 2014 Birmingham Post Business Awards

## Dependencies

- NodeJS
  - Grunt
  - LESS CSS
  - Bower
- Ruby
  - Jekyll

## Instructions

### Setup Development Area

```
bundle install
npm install
npm install bower
bower install
```

### Run Development Server

```
grunt
```

Visit the url [localhost:3000](http://localhost:3000/) to view the site.

### Deploy Build

#### Staging

For testing and proofing we deploy to a staging server before deploying to production.

```
grunt stage
```

This opens the `./beta` folder ready for uploading.

#### Production

To build the site for deployment:

```
grunt deploy
```

This will produce a `./2014` folder that can be uploaded to the server.

## Documentation

During the Alpha/Beta stages, due to constant changes, documentation will be mainly written in-line. With a dedicated section being created at the first major release.

### File Structure

```
|- _scripts              –  contains useful scripts to help with
|                           development of this project
|- _site                 –  compiled development files (not committed)
|- src
|  |- _includes          –  partial snippets of code to be used
|  |                        in layouts
|  |- _layouts           –  page layouts
|  |- _posts             -  markdown files of news posts
|  |- media              -
|  |- static             -
|  |- {**/*.txt,html,md} -  files for website
|- _config.yml           -  Jekyll config file
|- gruntfile.js
|- package.json
|- readme.md
```

## Report Issues

If you spot any issues please create a ticket via GitHub's Issue Tracker. If the issue is security related please use the contact information below.

## Contribute

In lieu of a formal style guide, take care to maintain the existing coding style.

## Contact

[tmcreative@trinitymirror.com](mailto:tmcreative@trinitymirror.com)

## License

The source is opened for educational purposes. No rights are assigned to any downloads or forks.

## Copyright

Unless otherwise stated all code and content remain copyright &copy; Trinity Mirror. All rights reserved.
