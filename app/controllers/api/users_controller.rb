module Api
  class UsersController < ApiController
    def current
      @user = User.find_by(session_token: session[:token])
      render :show
    end
  end
end
