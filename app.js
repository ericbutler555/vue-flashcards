const cards = [
  {
    front: 'The "First Computer Programmer"',
    back: 'Ada Lovelace',
    flipped: false
  },
  {
    front: 'Invented the Clarke calculator',
    back: 'Edith Clarke',
    flipped: false
  },
  {
    front: 'Famous World War II Enigma code breaker',
    back: 'Alan Turing',
    flipped: false
  },
  {
    front: 'Created satellite orbit analyzation software for NASA',
    back: 'Dr. Evelyn Boyd Granville',
    flipped: false
  }
];

// tasks:
// display our data
// flip the cards back and forth on click
// get info for new cards from the user
// add new card when user clicks button
  // create properties for front and back of card
  // bind properties to form inputs using v-model
// delete cards
// animate card flip
// display error message if fields are blank

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false
  },
  methods: {
    flipCard: function(card){
      card.flipped = !card.flipped;
    },
    addNewCard: function(e){
      e.preventDefault();
      if(!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});
