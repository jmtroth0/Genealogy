class FamilyMembersController < ApplicationController
  def index
    @family_members = current_user.family_members
  end

  def show
    @family_member = FamilyMember.find(params[:id])
    if @family_member.user_id == current_user.user_id
      render :show
    else
      flash[:errors] = ["Can't view unless they are your family member"]
      redirect_to new_user_url
    end
  end

  def new
    @family_member = FamilyMember.new
  end

  def create
    @family_member = FamilyMember.new(family_member_params)

    if @family_member.save
      render :show
    else
      flash.now[:errors] = @family_member.errors.full_messages
      render :new
    end
  end

  def edit
    @family_member = FamilyMember.find(params[:id])
  end

  def update
    @family_member = FamilyMember.find(params[:id])

    if @family_member.update(family_member_params)
      render :show
    else
      flash.now[:errors] = @family_member.errors.full_messages
      render :edit
    end
  end

  private

  def family_member_params
    params.require(:family_member).permit(:fname, :lname, :gender)
  end

end
