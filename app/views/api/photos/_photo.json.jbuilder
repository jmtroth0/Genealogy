json.image_url asset_path(photo.image.url(:original))
json.thumb_url asset_path(photo.image.url(:thumbnail))

json.extract! photo, :id, :title
