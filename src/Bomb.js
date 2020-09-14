import React from 'react'

export default class Bomb extends React.Component {

    constructor(currentSlideIndex) {
        super()
        this.state = {
            secondsLeft: currentSlideIndex.initialCount
        }
    }

    // timer = () => {
    //     if (this.state.secondsLeft === 0) {
    //         'Boom!'
    //     } else {
    //         `${this.state.secondsLeft} seconds left before I go boom!`
    //     }
    // }
    
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <h2>{message}</h2>
        )
    }

}
