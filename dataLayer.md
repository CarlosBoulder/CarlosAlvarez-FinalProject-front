# BoulderLab

## Data layer

### Data

- Collection of boulders
  - boulder:
    -img:string,
    -name: string,
    -description: string,
    -crag: string,
    -spot: string,
    -country: string,
    -grade: string

### Modifications

- createBoulder(character)
- deleteBoulder(id)
- loadBoulders(api)
- editBoulder()

## Components

### Store

#### State

- Collection of Boulder

#### bouldersReducer

- createBoulder(character)
- deleteBoulder(id)
- loadBoulder(api)
- editBoulder()

### App

- Receives a collection of boulders
- Receives dispatch()
- Shows the header with a logo
- Shows the navbar
- Renders a loginForm
- Renders a boulderForm
- Renders a bouldersList component
- Renders a notFound page

### boulderForm

- State:
  - boulders
- handleSubmit()
- Receives dispatch()
- Receives a boulder to update
- Shows an input text for the name of the boulder
- Shows an input text for the image of the boulder
- Shows an input text for the description of the boulder
- Shows an input text for the crag of the boulder
- Shows an input text for the spot of the boulder
- Shows an input text for the country of the boulder
- Shows an input text for the grade of the boulder
- Renders a Button component
  - text: "create" / "edit"
  - actionOnClick: handleSubmit

-create a new boulder:

- Shows an input text for the name of the boulder
- Shows an input text for the image of the boulder
- Shows an input text for the description of the boulder
- Shows an input text for the crag of the boulder
- Shows an input text for the spot of the boulder
- Shows an input text for the country of the boulder
- Shows an input text for the grade of the boulder
- Renders a Button component
  - text: "create" / "edit"
  - actionOnClick: handleSubmit

### bouldersList

- Receives a collection of boulders
- Renders as many boulderCard as boulders are in the collection

### boulderCard

- Receives a boulder
- Receives dispatch()
- handleClick()
- Shows the boulder details
- Shows editButton

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked
