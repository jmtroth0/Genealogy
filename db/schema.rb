# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151116051054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "documents", force: :cascade do |t|
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.string   "title"
    t.integer  "uploader_id",       null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "documents", ["uploader_id"], name: "index_documents_on_uploader_id", using: :btree

  create_table "family_members", force: :cascade do |t|
    t.string   "fname",       null: false
    t.string   "lname",       null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "parent_a_id"
    t.integer  "parent_b_id"
    t.integer  "generation"
  end

  add_index "family_members", ["user_id"], name: "index_family_members_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "title"
    t.integer  "uploader_id",        null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.text     "description"
  end

  add_index "photos", ["uploader_id"], name: "index_photos_on_uploader_id", using: :btree

  create_table "sections", force: :cascade do |t|
    t.integer  "year",       null: false
    t.string   "name"
    t.integer  "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sections", ["name"], name: "index_sections_on_name", unique: true, using: :btree
  add_index "sections", ["teacher_id"], name: "index_sections_on_teacher_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "family_member_id", null: false
    t.string   "taggable_type"
    t.integer  "taggable_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "taggings", ["family_member_id"], name: "index_taggings_on_family_member_id", using: :btree
  add_index "taggings", ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id", using: :btree

  create_table "units", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.integer  "section_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "units", ["section_id"], name: "index_units_on_section_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                               null: false
    t.string   "password_digest",                     null: false
    t.string   "session_token",                       null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "fname",           default: "Joe"
    t.string   "lname",           default: "Schmoe"
    t.string   "type",            default: "Student"
    t.integer  "section_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
