Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
    resource :session, only: [:destroy]
    get 'current_user', to: 'users#current'
    resources :family_members, except: [:new, :edit]
    resources :photos, except: [:new, :edit]
    resources :documents, except: [:new, :edit]
  end
end
