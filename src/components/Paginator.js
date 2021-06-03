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
        if (current === 1) {
            return
        }
        else {
            this.props.choosePage(parseInt(current - 1))
        }
    }

    nextPage = () => {
        const current = this.props.currentPage;
        if (current === this.props.numOfPages) {
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


        let pages = [];
        let currentPage = this.props.currentPage;
        let numOfPages = this.props.numOfPages;
        console.log("pages", pages)
        console.log("currentPage", currentPage)
        console.log("numOfPages", numOfPages)

        if (currentPage === numOfPages) {
            console.log("currentPage === numOfPages")
            for (let i = currentPage - 2; i <= numOfPages; i++) {
                pages.push(i);
            }
        }

        else if (currentPage <= 2) {
            for (let i = 1; i <= 3; i++) {
                pages.push(i);
            }
        }

        else if (currentPage >= 3) {
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
        }


        else {
            for (let i = currentPage - 2; i = numOfPages + 1; i++) {
                pages.push(i);
            }
        }


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