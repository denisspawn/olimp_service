Rails.application.routes.draw do

  root 'homes#index'

  get 'form' => 'forms#index', :as => :form
  post 'form' => 'forms#form_send', :as => :form_send

  resources :services,  only: :index
  resources :contacts,  only: :index
  resources :our_works, only: :index
  resources :about_us,  only: :index


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
