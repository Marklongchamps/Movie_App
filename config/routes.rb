Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/movies", to: 'homes#index'


  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show, :create, :edit, :destroy, :update] 
    end
  end
end
