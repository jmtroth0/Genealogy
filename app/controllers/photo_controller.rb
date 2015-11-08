class PhotoController < ApplicationController
  def create
    @photo = current_user.photos.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @photos = current_user.photos
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:id, :title, :image)
  end
end
