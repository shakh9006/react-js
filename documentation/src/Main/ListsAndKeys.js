import React from 'react'
// 1. Rendering Multiple Components
// ***************************************
function Lists(props) {
    const converted = props.numbers.map((n) => <li key={n.toString()}>{n}</li>)
    return <ul>{converted}</ul>
}

export default Lists
// ***************************************