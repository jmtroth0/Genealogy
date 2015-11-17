class UnitsController < ApplicationController

  def index
    @units = Unit.all
  end

  def show
    @unit = Unit.find(params[:id])
  end

  def new
    @unit = Unit.new
  end

  def edit
    @unit = Unit.find(params[:id])
  end

  def create
    @unit = Unit.new(unit_params)

    if @unit.save
      render :show
    else
      render json: @unit.errors.full_messages.join(", "), status: :unprocessable_entity
    end
  end

  def update
    @unit = Unit.find(params[:id])
    if @unit.update(unit_params)
      render :show
    else
      render json: @unit.errors.full_messages.join(", "), status: :unprocessable_entity
    end
  end

  def destroy
    @unit = Unit.find(params[:id])
    @unit.destroy!
    render :show
  end

  private
    def unit_params
      params.require(:unit).permit(:section_id, :name, :description)
    end
end
