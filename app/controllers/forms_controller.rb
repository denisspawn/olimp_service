class FormsController < ApplicationController

  def index
  end

  def form_send
    @user_phone = params[:user_phone]
    @user_name = params[:user_name]
    # ...либо просто отобразить какой-то текст
    render :plain => 'OK'
    # Функция отравки почты с передачей параметров в хэше
    OrdersMailer.send_mail(params).deliver
    #render :text => "Cпасибо за заявку #{@user_name.capitalize}! Мы вскоре вам презвоним."
  end

  private

  def form_data
    params.require(:form).permit(:user_phone, :user_name)
  end

end
