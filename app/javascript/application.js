// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import $ from "jquery"
window.$ = $
window.jQuery = $
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap
import "./scripts"