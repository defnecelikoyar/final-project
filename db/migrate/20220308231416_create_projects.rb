class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :github
      t.string :demo
      t.string :image

      t.timestamps
    end
  end
end
