module Api
  class SessionsController < ApiController
    def destroy
      sign_out
      render json: "Logged Out"
    end
  end
end
