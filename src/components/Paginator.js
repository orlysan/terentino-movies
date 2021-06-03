import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Paginator.css';

class Paginator extends React.Component {
    constructor(props) {
        super(props);

    }

    choosePage = (num) => {
        this.props.choosePage(num)
    }

    firstPage = () => {
        this.props.choosePage(1)
    }

    prevPage = () => {
        const current = this.props.currentPage;
        if (current <= 1) {
            return
        }
        else {
            this.props.choosePage(parseInt(current - 1))
        }
    }

    nextPage = () => {
        const current = this.props.currentPage;
        if (current >= this.props.numOfPages) {
            return
        }
        else {
            this.props.choosePage(parseInt(current + 1))
        }
    }

    lastPage = () => {
        this.props.choosePage(this.props.numOfPages)
    }


    render() {
        const firstEl = this.props.currentPage > 2 ? <Pagination.First firstLabel="" onClick={this.firstPage} /> : null;
        const prevEl = this.props.currentPage > 1 ? <Pagination.Prev onClick={this.prevPage} /> : null;
        const nextEl = this.props.currentPage < this.props.numOfPages ? <Pagination.Next onClick={this.nextPage} /> : null;
        const lastEl = this.props.currentPage < this.props.numOfPages - 1 ? <Pagination.Last onClick={this.lastPage} /> : null;


        const pages = [];
        const currentPage = this.props.currentPage;
        const numOfPages = this.props.numOfPages;
      
        //create the paginator
    
        let count = 0;
        let pageToSet = currentPage == numOfPages ? currentPage-2 : currentPage-1;
        while(count < 3 && pageToSet <= numOfPages){
            if(pageToSet > 0){
                count++;
                pages.push(pageToSet);
            }
            pageToSet++
        }
        console.log(pages )
     

        return (
            <div className="paginator-container">
                <Pagination>
                    {firstEl}
                    {prevEl}
                    {pages.map(number => (
                        <Pagination.Item
                            key={number}
                            activeLabel=""
                            active={number === this.props.currentPage}
                            onClick={() => this.choosePage(number)}>
                            {number}
                        </Pagination.Item>
                    ))}
                    {nextEl}
                    {lastEl}
                </Pagination>
            </div>
        )
    }
}

export default Paginator