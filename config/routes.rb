Rails.application.routes.draw do

  devise_for :users
  namespace :api do
    resources :cars
  end

end
