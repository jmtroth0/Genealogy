module Api
  class SessionsController < ApiController
    def destroy
      sign_out
      render json: "Logged Out", { status: 200 }
    end
  end
end
