module Api
  class DocumentsController < ApiController
    wrap_parameters false

    def create
      @document = current_user.documents.new(document_params)
      if @document.title == ""
        @document.title = @document.file_file_name
      end
      if @document.save
        render :show
      else
        render json: @document.errors.full_messages.join(', '), status: :unprocessable_entity
      end
    end

    def index
      @documents = current_user.documents
    end

    def update
      @document = Document.find(params[:id])
      if @document.update(document_params)
        render :show
      else
        render json: @document.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @document = Document.find(params[:id])
      @document.destroy!
      render :show
    end

    private

    def document_params
      params.require(:document).permit(:id, :title, :file)
    end
  end
end
