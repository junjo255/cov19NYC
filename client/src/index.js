import React from 'react';
import { render } from 'react-dom';
const axios = require('axios');
import Header from './components/header.js';
import CaseContainer from './components/caseContainer.js';
import FilterForm from './components/filterForm.js';
import Pagination from './components/pagination.js';
import Footer from './components/footer.js'
import Map from './components/map.js';
import './styles.css';

class App extends React.Component {
     constructor(props){
     		super(props);

     		this.state = {
     			covidData: [],
                    covidDataPos: [],
                    sort: "zip",
                    showPerPage: 20,
                    currentPage: 1,
                    currentTab: "table-tab"
     		}
               this.handleChange = this.handleChange.bind(this);
               this.handlePagination = this.handlePagination.bind(this);
               this.handleToggle = this.handleToggle.bind(this);
     }

     componentDidMount() {
     	axios.get('api/covid')
     		.then(res => {
     			this.setState({covidData: res.data})
     		});
     }

     handleChange(sortBy) {
          this.setState({
               sort: sortBy,
               currentPage: 1
          });
     }

     handlePagination(page) {
          this.setState({
               currentPage: page
          });
     }

     handleToggle(tab) {
          this.setState({
               currentTab: tab
          });
     }

     render(){
          let sorted;
          let data;
          const {showPerPage, currentPage} = this.state;

          if(this.state.sort === "zip"){
               sorted = this.state.covidData;
          } else {
               sorted = this.state.covidData.slice().sort((a,b) => {
                    return b.positive - a.positive;
               });
          }

          data = sorted.slice(showPerPage * currentPage - showPerPage, showPerPage * currentPage)

          let main;
          if(this.state.currentTab === "table-tab"){
               main = <main>
                         <FilterForm onDropDownChange={this.handleChange} sort={this.state.sort} />
                         <CaseContainer cases={data} showPerPage={showPerPage} currentPage={currentPage} />
                         <Pagination onPageChange={this.handlePagination} showPerPage={showPerPage} dataLength={this.state.covidData.length} />
                      </main>
          } else {
               main = <main>
                         <Map />
                      </main>
          }

          return (
               <div>
                    <Header handleToggle={this.handleToggle}/>
                         {main}
                    <Footer />
               </div>
               )
     }

}

render(<App />, document.getElementById('app'));
