import './Pagination.css';

export default function Pagination() {

    return (
        <div>
            <ul className="pagination">
                <li><a href="#0">&lt;</a></li>
                <li><a className="active" href="#0">1</a></li>
                <li><a href="#0">2</a></li>
                <li><a href="#0">3</a></li>
                <li><a href="#0">&gt;</a></li>
            </ul>
        </div>
    );
}
