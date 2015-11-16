module Api
  class TeachersController < ApiController
    def show
      @user = User.find(params[:id])
    end
  end
end
