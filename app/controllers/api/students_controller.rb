module Api
  class StudentsController < ApiController
    def show
      @user = User.find(params[:id])
    end
  end
end
