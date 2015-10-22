Rails.application.routes.draw do

  resources :users, only: [:new, :create, :edit, :show, :index]
  resource :session, only: [:new, :create, :destroy]
end
