require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Diceroll
  class Application < Rails::Application
    config.browserify_rails.commandline_options = %{-t [babelify --presets [react es2015 stage-0] ] --extension es6}

    config.active_record.raise_in_transactional_callbacks = true
  end
end
