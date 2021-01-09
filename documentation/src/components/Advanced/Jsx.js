import React from 'react'
import JsxDetails from "./JsxDetails"

const components = {
    text: JsxDetails
}

export default class HtmlBlock extends React.Component {
    render() {
        const type      = this.props.type
        const TextBlock = components[type]
        return (
            <div>
                <TextBlock text={type} />
            </div>
        )
    }
}