json.extract! submission, :id, :title, :description

json.uploads do
  json.photos do
    json.array! submission.photos do |photo|
      json.partial! 'api/photos/photo', photo: photo
    end
  end

  json.documents do
    json.array! submission.documents do |document|
      json.partial! 'api/documents/document', document: upload
    end
  end
end
