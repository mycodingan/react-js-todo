import React from 'react';
import "./Belajar.css";
import Tombol from './tombol.js';

 
class Belajar extends React.Component {
     constructor(props) {
     super(props);
     this.state = {judul: "React" };
     }
    
        componentDidMount() {
        console.log("Judul diubah menjadi:", this.state.judul)
        }
    
        componentDidUpdate() {
        console.log("Judul diubah menjadi:", this.state.judul)
        }
    
     handleTombolclick = (judul) => {
     this.setState({ judul: judul });
    
    
     }
    
     render() {
     return (
        <>
        <div>
            <h1 className={StyleSheet.judul}>Belajar {this.state.judul}</h1>
            <Tombol onTombolClick={this.handleTombolclick}>react</Tombol>
            <Tombol onTombolClick={this.handleTombolclick}>JavaScript</Tombol>
        </div>
        </>
        )
      }
     }
    
     export default Belajar;