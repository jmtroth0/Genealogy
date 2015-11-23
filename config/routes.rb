Rails.application.routes.draw do
  resources :units
  resources :sections
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :students, only: [:show]
    resources :teachers, only: [:show]
    get 'current_user', to: 'users#current'
    resource :session, only: [:destroy]

    resources :family_members, except: [:new, :edit]
    resources :photos, except: [:new, :edit]
    resources :documents, except: [:new, :edit]

    resources :sections, only: [:show, :update, :create, :destroy]
    resources :units, only: [:show, :update, :create, :destroy] do
      resources :submissions, except: [:edit, :new]
    end
  end
end
