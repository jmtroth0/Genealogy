module Api
  class Api::SectionsController < ApiController
    def index
      @sections = current_user.sections
    end

    def show
      @section = Section.find(params[:id])
    end

    def create
      @section = current_user.section.new(section_params)
      if @section.save
        render :show
      else
        render json: @section.errors.full_messages.join(", "), status: :unprocessable_entity
      end
    end

    def update
      @section = Section.find(params[:id])
      if @section.update(section_params)
        render :show
      else
        render json: @section.errors.full_messages.join(", "), status: :unprocessable_entity
      end
    end

    def destroy
      @section = Section.find(params[:id])
      @section.destroy!
      render :show
    end

    private
      def section_params
        params.require(:section).permit(:year, :name, :teacher_id)
      end
  end
end
