import React from 'react'

const TitleCard = ({heading, body}) => {
  return (
    <section id='title-card' className="md:hidden bg-primary text-white p-6 bg-opacity-90">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <br />
        <p>{body}</p>
    </section>
  )
}

export default TitleCard
