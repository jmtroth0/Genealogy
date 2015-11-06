# Schema Information

## Users

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null
fname             | string    |
lname             | string    |
password_digest   | string    | not null
session_token     | string    | not null
family_tree       | string    | will be a url referencing Family Echo
tree_expiration   | date      | Family Echo dumps after 7 days
class_id          | integer   | not null, foreign key, (references classes)

## Classes

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
year          | string    | not null
name          | string    |


## Devices -- implement later

column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key, (references users)
session_token  | string    | not null


## Family Members
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, (references users)
fname          | string    | not null
lname          | string    | not null
mother_id      | integer   | foreign key, (self referencing)
father_id      | integer   | foreign key, (self referencing)
birth_date     | date      |
death_date     | date      |
maiden name    | string    |
gender         | string    |

## Partnership Info
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
partner1_id    | integer   | not null, foreign key, (self referencing)
partner2_id    | integer   | not null, foreign key, (self referencing)
wedding_date   | date      |
end_date       | date      |

## Family Photos
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
paperclip stuff| varies    |

-- make these two a polymorphic table? Need to check out paperclip a bit more for that.

## Family Documents
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
paperclip stuff| varies    |

## Family Stories
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
content        | text      |

## Family Member Stuff Taggings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
family_member_id  | integer   | not null, foreign key (references family members)
taggable_type     | string    | not null
taggable_id       | integer   | not null, foreign key
