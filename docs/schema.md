# Schema Information

## Users

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
email             | string    | not null
fname             | string    |
lname             | string    |
password_digest   | string    | not null
session_token     | string    | not null
family_tree       | string    | will be a url referencing Family Echo or possibly a pdf file
class_id          | integer   | not null, foreign key, (references classes)

## Sections

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
year          | integer   | not null
name          | string    |
teacher_id    | integer   | not null

## Units
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
section_id    | integer   | not null, (references section)
name          | string    | not null
description   | text      |

## Family Members
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, (references users)
fname          | string    | not null
lname          | string    | not null
mother_id      | integer   | foreign key, (self referencing)
father_id      | integer   | foreign key, (self referencing)
partner_id     | integer   | foreign key, (self referencing)
birth_date     | date      |
death_date     | date      |
maiden name    | string    |
gender         | string    |

## Submission
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null
section_unit_id | integer   | not null
title           | string    |
description     | text      |

## Submission Uploads
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
submission_id | integer   | not null
upload        | reference | polymorphic, not null

## Photos
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    |
description    | text      |
uploader_id    | integer   | not null
paperclip stuff|           |

## Documents
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    |
description    | text      |
uploader_id    | integer   | not null
paperclip stuff|           |

## Audio Files
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    |
description    | text      |
uploader_id    | integer   | not null
paperclip stuff|           |

## Family Member Stuff Taggings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
family_member_id  | integer   | not null, foreign key (references family members)
taggable_type     | string    | not null
taggable_id       | integer   | not null, foreign key
