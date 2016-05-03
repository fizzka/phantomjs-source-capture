# ABOUT #

Package to fetch js-generated web pages

## REQUIREMENTS ##

[Docker](https://www.docker.com/) installed

## ATTENTION ##

Package runs not so fast, so do not use it as default to parse billion pages ;)

## USAGE ##

```
composer install
./bin/phantomjs-source-capture <URL>
```

or

```
composer require fizzka/docker-phantomjs
./vendor/bin/phantomjs-source-capture <URL>
```