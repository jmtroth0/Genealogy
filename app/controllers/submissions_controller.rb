class SubmissionsController < ApplicationController
  def index
    @submissions = Submission.includes(:uploads).find_by({
      unit_id: params[:unit_id],
      user_id: current_user.id
    })
  end

  def show
    @submission = Submission.includes(:uploads).find(params[:id])
  end

  def create  # handle file uploads in a transaction soon too
    @submission = current_user.submissions.new(submission_params)
    @submission.unit_id = params[:unit_id]

    if @submission.save
      render :show
    else
      render json: @submission.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @submission = Submission.find(params[:id])

    if @submission.update(submission_params)
      render :show
    else
      render json: @submission.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @submission = Submission.find(params[:id])
    @submission.destroy!
    render :show
  end

  private
  def submission_params
    params.require(:submission).permit(:title, :description, upload_ids: [])
  end
end
