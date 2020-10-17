import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import './style.css'
import Api from './service/api'

class App extends React.Component{
	api=new Api();

	componentDidMount(){
		this.api.getRocket().then(data=>console.log(data))
	}

	updateRockets=()=>{
		
	}

	render(){
		return (
			<React.Fragment>
				<Header/>
				<Main/>
				<Features/>
				<Footer/>
			</React.Fragment>
		  );
	}
}

export default App;
