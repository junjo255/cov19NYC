import React, { useEffect } from 'react';
import { render } from 'react-dom';
const axios = require('axios');
import Header from './components/header.js';
import CaseContainer from './components/caseContainer.js';
import FilterForm from './components/filterForm.js';
import Pagination from './components/pagination.js';
import Footer from './components/footer.js'
import Map from './components/map.js';
import './styles.css';


const App = () => {
     const [covidData, setCovidData] = React.useState([]);
     const [sort, setSort] = React.useState("zip");
     const [showPerPage, setSortPerPage] = React.useState(20);
     const [currentPage, setCurrentPage] = React.useState(1);
     const [currentTab, setCurrentTab] = React.useState("table-tab");

     useEffect(() => {
          axios.get('api/covid')
               .then(res => {
                    setCovidData(res.data)
               });         
     }, []);

     function handleChange(sortBy) {
          setSort(sortBy);
     }

     function handlePagination(page) {
          setCurrentPage(page);
     }

     function handleToggle(tab) {
          setCurrentTab(tab);
     }

     let sorted;
     let data;

     //sort whether data will be shown by zip or positive cases
     if(sort === "zip"){
          sorted = covidData;
     } else {
          sorted = covidData.slice().sort((a,b) => {
               return b.positive - a.positive;
          });
     }


     //determine how the data will be split for each page
     data = sorted.slice(showPerPage * currentPage - showPerPage, showPerPage * currentPage)


     //determine which component to show depending on which tab is clicked
     let main;
     if(currentTab === "table-tab"){
          main = <main>
                    <FilterForm onDropDownChange={handleChange} sort={sort} />
                    <CaseContainer cases={data} showPerPage={showPerPage} currentPage={currentPage} />
                    <Pagination onPageChange={handlePagination} showPerPage={showPerPage} dataLength={covidData.length} />
                 </main>
     } else {
          main = <main>
                    <Map />
                 </main>
     }

     return (
          <div>
               <Header handleToggle={handleToggle}/>
                    {main}
               <Footer />
          </div>
          )

}

render(<App />, document.getElementById('app'));
