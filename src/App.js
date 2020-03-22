import React from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
class App extends React.Component{
    state ={
        insult :''
    };
    componentDidMount(){
        this.fetchInsult();
    }
    fetchInsult= () => {
        axios.get("https://cors-anywhere.herokuapp.com/https://insult.mattbas.org/api/insult.json")
        .then((response)=>{
            const insult = response.data.insult;
            this.setState({insult});
        })
        .catch((error)=>{
           console.log(error); 
        });
    }
    render(){
        const {insult}= this.state;
        return(
            
            <div className="app">
                <h1> Insult Generator </h1>
                <h1 className="head">{insult} </h1>
                <Button variant="contained" onClick={this.fetchInsult}>New Insult</Button>
                </div>
        );
    }
}
export default App;