json.array!(@sections) do |section|
  json.extract! section, :id, :year, :name, :teacher_id
  json.url section_url(section, format: :json)
end
