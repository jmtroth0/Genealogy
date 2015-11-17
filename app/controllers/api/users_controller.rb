module Api
  class UsersController < ApiController
    def current
      @user = User.find_by(session_token: session[:token])
      if @user.instance_of? Teacher
        @sections = @user.sections
        render 'api/teachers/show'
      elsif @user.instance_of? Student
        @section = @user.section
        render 'api/students/show'
      end
    end
  end
end
