# PennyMac Jekyll
This is a demo site built with [Jekyll](https://jekyllrb.com/).

You can view it on GitHub Pages at: [https://jackiejohnston.github.io/test-jekyll/](https://jackiejohnston.github.io/test-jekyll/)

## Requirements

 - [Ruby v1.9.3 or above](https://www.ruby-lang.org/en/downloads/)
 - [RubyGems](https://rubygems.org/pages/download)
 - Linux, Unix, or Mac OS X

## Usage

Run the following commands in your console:
```
$  git clone git@github.com:pennymac/test-jekyll.git
$  cd test-jekyll
$  bundle install
```

For development, run:
```
$  jekyll liveserve --config _config.yml,_config-dev.yml
```

then navigate to `http://localhost:4000/` in your browser.

To create a build for production, run:
```
$  JEKYLL_ENV=production jekyll build
```
Then upload the contents of the `_site` directory to your webhost.

The command to do this on GitHub pages is:
```
$  git subtree push --prefix _site origin gh-pages
```