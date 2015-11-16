module Api
  class Api::SectionsController < ApiController
    def index
      # will be for teachers
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

    def update
      @section = Section.find(params[:id])
      if @section.save
        render :show
      else
        render json: @section.errors.full_messages.join(", "), status: :unprocessable_entity
      end
    end

    def destroy
      @section = Section.find(params[:id])
      @section.destroy
      respond_to do |format|
        format.html { redirect_to sections_url, notice: 'Section was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      def section_params
        params.require(:section).permit(:year, :name, :teacher_id)
      end
  end
