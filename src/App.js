import React from 'react'
import './App.css'

export default class App extends React.Component {
	state = {
		loadind: true,
		person: null
	}

	async componentDidMount() {
		const url = 'https://api.randomuser.me/'

		const response = await fetch(url)
		const data = await response.json()
		this.setState({ person: data.results[0], loadind: false })
		console.log('data', data.results[0])
	}

	render() {
		return (
			<div className="App">
				<h1>Fetch data with ReactJs</h1>
				{this.state.loadind || !this.state.person ? (
					<div>loading...</div>
				) : (
					<div>
						<div>{this.state.person.name.first}</div>
						<div>{this.state.person.name.last}</div>
						<img src={this.state.person.picture.large} alt="" />
					</div>
				)}
			</div>
		)
	}
}
