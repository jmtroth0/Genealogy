json.extract! submission, :title, :description

json.uploads do
  json.array! submission.uploads do |upload|
    if upload.instance_of? Photo
      json.partial! 'api/photos/photo', photo: upload
    elsif upload.instance_of? Document
      json.partial! 'api/documents/document', document: upload
    end
  end
end
