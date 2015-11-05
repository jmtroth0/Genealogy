class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash.now[:notices] = ["Welcome!"]
      sign_in @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.save
      flash[:notices] = ["Changes Saved!"]
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end


  def destroy
    @user = user.find(params[:id])
    @user.destroy
    flash[:notices] = ['User was successfully destroyed.']
    redirect_to users_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :fname, :lname)
  end
end
