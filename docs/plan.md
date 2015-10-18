# Genealogy

## Minimum Viable Product
Genealogy is a place to store information about your family

- [ ] Create accounts
- [ ] Log in and out
- [ ] Add family members
- [ ] View added family members
- [ ] Auto send info to Family Echo on request
- [ ] View family tree on Family Echo
- [ ] Add text-based family stories
- [ ] Upload photos, PDF files, audio, video using paperclip
- [ ] Pages to view other things

## Design Docs
* [DB schema][schema]

[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
Rails auth using BCrypt and also push to heroku

### Phase 2: Add Family Members using Form (~1 day)
I will add API routes to serve family data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to add family members and see an list of all indented
by relation. I plan to create that list recursively (DFS).

### Phase 3: Using Family Echo (~1 day)
Need to research the familyscript that it uses, but will send that info to
Family Echo and have it create a family tree (persistent for 7 days).

### Phase 4: Add Family Stories (~1 day)
Text stories should be simple, so I'll start there. Remember to leave space on
the page to allow for audio and video stories as well.

### Phase 5: Paperclip (~2 days)
Need to add capability for images, PDFs, and audio and video files. Will take some
futzing around, but not too bad.

### Phase 6: Class Page (~1-2 days)
Build page for teacher to use to post guides. Talk to mom about the form and
quantity of these --> Could end up being set # saved in server.

### Bonus Features (TBD)
- [ ] Create own family tree engine using Google Visualization, Dracula, or equivalent
- [ ] Tag Family Members in Family Stories and Photos
