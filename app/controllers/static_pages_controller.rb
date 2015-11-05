class StaticPagesController < ApplicationController
  def root
    if signed_in?
      render '_root'
    else
      redirect_to new_user_url
    end
  end
end
