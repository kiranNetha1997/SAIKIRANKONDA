
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Movie() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=a33f07e6 `)
            .then(res => res.json())
            .then(value => setData(value.Search))
    };
    return (
        <div className='main'>
            <center >
                <h1 className='h1'>Search here</h1>
                <form onSubmit={submit} className='form'>
                    <input type='text' placeholder='Search Here' className='username' value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
                    <button className="btn btn-primary btn-sm">Submit</button>
                </form>
                <div className='row'>

                    {
                        data.map(each =>
                            <div className='col-md-4'>
                                <div className='card' style={{ "width": "18rem" }}>
                                    <img class="card-img-top" src={each.Poster} alt={each.Title} />
                                    <div class="card-body">
                                        <h4 className='"card-tittle'>{each.Title}</h4>
                                        <a href={each.Poster} className='btn-btn-primary'  >Download</a>
                                    </div>

                                </div>
                            </div>
                        )
                    }



                </div>
            </center>

        </div>
    );
}

export default Movie;
