Rails.application.routes.draw do

  root 'homes#index'

  resources :services, :contacts, :our_works, :about_us


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
