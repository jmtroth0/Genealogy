module Api
  class UsersController < ApiController
    def index
      @users = User.all
    end

    def show
      @user = User.find(params[:id])
    end

    def current
      @user = User.includes(:family_members).find_by(session_token: session[:token])
      @family = @user.family_members
      render :show
    end
  end
end
