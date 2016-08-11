class UserSkillPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def create?
    owned?
  end

  def update?
    owned?
  end

  private

  def owned?
    @record.user_id == @user.id
  end
end
