# Rails 8 Theme Integration: Stylish Portfolio
This repository contains a Rails 8 application integrating the [Stylish Portfolio](https://startbootstrap.com/theme/stylish-portfolio) theme using `esbuild` and `Propshaft`.

## 🛠 Setup & Installation
### 1. Create the ProjectGenerate the Rails app with Bootstrap and JavaScript bundling:
```bash
rails new theme_integration --css=bootstrap --javascript=esbuild
cd theme_integration
bundle install
```

## 2. Download the Theme
Download the source files from Start Bootstrap [Stylish Portfolio](https://startbootstrap.com/theme/stylish-portfolio) theme and extract them.
## 3. Asset Migration
Move the theme assets into the Rails 8 directory structure:

* CSS: Move files to app/assets/stylesheets/
* JS: Move files to app/javascript/
* Images: Move files to app/assets/images/

## 4. jQuery Integration
Install jQuery via yarn:

yarn add jquery

Register jQuery globally in app/javascript/application.js:
```bash
import $ from "jquery"
window.$ = $
window.jQuery = $
```
------------------------------
## 🏗 Development Guide## Image Tag Conversion
Replace standard HTML <img> tags with Rails image_tag helpers:
HTML:

```<img class="img-fluid" src="assets/img/portfolio-1.jpg" alt="Portfolio Image" />```

Rails ERB:

```<%= image_tag "portfolio-1.jpg", class: "img-fluid", alt: "Portfolio Image" %>```

## Partial Refactoring
Organize the main view by dividing the theme into reusable partials in app/views/shared/:
```
<%# app/views/home/index.html.erb %>
<%= render "shared/navigation" %>
<%= render "shared/header" %>
<%= render "shared/about" %>
<%= render "shared/services" %>
<%= render "shared/portfolio" %>
<%= render "shared/footer" %>
```
------------------------------
## 🚀 Running the Application
To start the development server and the asset watcher, run:

```./bin/dev```
