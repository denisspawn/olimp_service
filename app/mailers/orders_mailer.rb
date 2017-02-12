class OrdersMailer < ApplicationMailer
  default from: "olimp@mail.ru"

  def send_mail(inputs={})
    @user_name = inputs[:user_name]
    @user_phone = inputs[:user_phone]

    mail to: 'denisgaiciuk@mail.ru',
         subject: 'Заказ с сайта'
  end
end
