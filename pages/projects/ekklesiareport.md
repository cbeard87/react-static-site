---
title: Ekklesia Report
tagline: Ekklēsia Report Content Platform
type: Everything
platform: Web
status: released
technologies:
  - EmberJS
  - NodeJS
  - MySQL
  - CDN
  - Less
header_image_small: url(./assets/projects/ekklesiareport-project.png)
header_image_big: url(./assets/projects/ekklesiareport-project.png)
header_background_color: '#222222'
header_background_size: cover
---

-------
The Ekklēsia Report Content Platform was primarily developed using __EmberJS__, __NodeJS__, __Less__, and __MySQL__.

Initially built on Wordpress, the Ekklēsia Report site's loading times eventually crawled to a halt due to the copious amounts of plugins required to achieve the team's needed functionality. In addition, many of their contributors felt that managing content in Wordpress was unnecessarily tedious, and desired a platform that would make publishing content fast and user friendly.


## Administration Interface
As I began designing the UI, I focused on creating an admin experience that would make publishing content feel like second nature to contributors. The goal was to make sure that the team's most frequently used tools were always readily available during the editing process, and to do away with the tedium of searching through countless menus to make trivial configuration setting changes. Afterwards, several discussions with the Ekklesia Report team took place in order to decide what framework to use to drive the admin UI, with the main options being Angular 2, React, and Ember.

After some deliberation, the choice to use Ember.js was made. The Ekklesia Report team has several members with who are responsible for basic code maintenance and adding integrations, and Ember's "Framework in a Box" approach and emphasis on convention over configuration allowed them to start contributing right away. While I love React and continue to use it in the majority of my projects, I'll admit that the choice to go with Ember saved me hours of time spent determining project structure and tooling.

## User Interface
Next, the focus shifted to presenting the content in a way that was both functional and appealing. After several design iterations, a layout that promoted user engagement and content consumption was decided upon. Using the CSS Preprocessor Less made implementing media queries for a wide variety of screen sizes quick and painless. As seen below, the site is fully responsive and looks great on any device.

<img src='assets/projects/ekklesiareport-1280.png' class='media-element center' style='padding-left:20px; padding-right:20px' />

<img src='assets/projects/ekklesiareport-320.png' class='media-element center' style='padding-left:20px; padding-right:20px' />

## Server-side
One of the biggest challenges in building a content and media heavy platform is scalability and preventing interruptions during usage peaks.

### API
The API is the heart of the system. It has been implemented using __NodeJS__, __MySQL__ and __Amazon AWS__.

### Content Delivery network
In order to be highly performant, the API doesn’t handle any static content.
Static files are delivered by a specialized CDN.
