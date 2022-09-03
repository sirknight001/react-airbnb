import './components/styles.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import data from './data'

function App() {
  const cards = data.map(item => {
    return <Card
      key={item.id}
      img={item.img}
      rating={item.rating}
      reviewCount={item.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  })
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <section className='cards-list'>
    {cards}
    </section>
    </div>
  );
}

export default App;











// .map() Tutorial

// const num = [
//   "alice",
//   "bob",
//   "charlie",
//   "danielle"
// ]
// const squared = num.map(function(myItems) {
//     return myItems[0].toUpperCase() + myItems.slice(1)
// })

// console.log(squared)

/* Result in the console:
['Alice, 'Bob, 'Charlie, 'Danielle']
*/

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// const elements = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(elements)

/* Result in the console:
['<p>Bulbasaur</p>','<p>Charmander</p>','<p>Squirtle</p>']
*/