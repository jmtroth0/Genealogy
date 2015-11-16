class UsersController < ApplicationController
  def new
    @user = User.new
    @sections = Section.all
  end

  def edit
    @user = User.find(params[:id])
    @sections = Section.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      @sections = Section.all
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    debugger
    if @user.update(user_params)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      @sections = Section.all
      render :edit
    end
  end

  def destroy
    @user = user.find(params[:id])
    @user.destroy
    redirect_to users_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :type, :section_id)
  end
end
