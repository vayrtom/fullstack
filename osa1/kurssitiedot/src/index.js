import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.pts[0].name} count={props.pts[0].excercises} />
      <Part name={props.pts[1].name} count={props.pts[1].excercises} />
      <Part name={props.pts[2].name} count={props.pts[2].excercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}

const Total = (props) => {
    let sum = 0
    props.pts.forEach(item => {
      sum += item.exercises
    }) 
    return (
      <div>
        <p>yhteensä {sum} tehtävää</p>
      </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content pts={course.parts}/>
      <Total pts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
