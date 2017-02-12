Rails.application.routes.draw do

  root 'homes#index'

  get 'form' => 'forms#index', :as => :form
  post 'form' => 'forms#form_send', :as => :form_send

  resources :services, :contacts, :our_works, :about_us


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
