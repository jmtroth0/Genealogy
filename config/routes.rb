Rails.application.routes.draw do

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :users, only: [:show, :index]
    resources :family_members
  end
end
