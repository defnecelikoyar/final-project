Rails.application.routes.draw do
  resources :projects, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      post '/login', to: 'auth#create'
      get '/me', to: 'users#me'
      # get '/auth', to: 'users#show'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
