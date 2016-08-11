Rails.application.routes.draw do

  root to: "frontpage#index"

  mount ActionCable.server => '/cable'

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :users
      resources :skills
    end
  end
end
