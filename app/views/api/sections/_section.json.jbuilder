json.extract! @section, :id, :year, :name, :teacher_id

json.units do
  json.array! @section.units do |unit|
    json.partial! 'api/units/unit', unit: unit
  end
end
