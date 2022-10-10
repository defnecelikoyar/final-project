Rails.application.routes.draw do
  # match '/contacts',    to: 'contacts#new'
  # resources :contacts, only: [:new, :create]
  
  namespace :api do
    resources :projects, only: [:index, :show]
      get '/projects', to:'projects#index'
    namespace :v1 do
      resources :users, only: [:create, :index]
      post '/login', to: 'auth#create'
      get '/me', to: 'users#me'
      # get '/auth', to: 'users#show'
    end
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
