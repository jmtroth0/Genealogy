module Api
  class PhotosController < ApiController
    wrap_parameters false

    def create
      @photo = current_user.photos.new(photo_params)
      if @photo.title == ""
        @photo.title = photo_params['image'].original_filename
      end

      if @photo.save
        render :show
      else
        render json: @photo.errors.full_messages.join(', '), status: :unprocessable_entity
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
        render json: @photo.errors.full_messages.join(', '), status: :unprocessable_entity
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
end
