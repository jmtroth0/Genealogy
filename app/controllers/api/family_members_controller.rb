module Api
  class FamilyMembersController < ApiController
    def index
      @family_members = current_user.family_members
    end

    def show
      @family_member = FamilyMember.includes(:taggables).find(params[:id])
    end

    def create
      @family_member = current_user.family_members.new(family_member_params)

      if @family_member.save
        render :show
      else
        render json: @family_member.errors.full_messages.join(", "), status: 422
      end
    end

    def update
      @family_member = FamilyMember.find(params[:id])

      if @family_member.update(family_member_params)
        render :show
      else
        render json: @family_member.errors.full_messages.join(", "), status: 422
      end
    end

    def destroy
      @family_member = FamilyMember.find(params[:id])
      @family_member.destroy!
      render :show
    end

    private

    def family_member_params
      params.require(:family_member).permit(:fname, :lname, :parentA, :parentB, :generation)
    end
  end
end
