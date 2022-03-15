class User < ApplicationRecord
    include ActiveModel::Serialization
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
end
