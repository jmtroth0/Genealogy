module Api
  class SubmissionsController < ApiController
    def index
      @submissions = Submission.includes(:photos, :documents).where({
        unit_id: params[:unit_id],
        user_id: current_user.id
      })
    end

    def show
      @submission = Submission.includes(:photos, :documents).find(params[:id])
    end

    def create  # TODO: attempt to handle file uploads in a single transaction
      @submission = current_user.submissions.new(submission_params)
      @submission.unit_id = params[:unit_id]

      if @submission.save
        render :show
      else
        render json: @submission.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @submission = Submission.includes(:photos, :documents).find(params[:id])

      if @submission.update(submission_params)
        render :show
      else
        render json: @submission.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @submission = Submission.find(params[:id])
      @submission.destroy!
      render json: "Destroyed"
    end

    private
    def submission_params
      params.require(:submission).permit(:title, :description)
    end
  end
end
