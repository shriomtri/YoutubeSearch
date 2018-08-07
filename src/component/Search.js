import React from 'react';
import '../css/search.css'

const Search = (props) =>{
    return(
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div id="custom-search-input">

                    <div className="input-group">
                        <input type="text" className="form-control input-md" placeholder="Search Youtube" onChange={props.onChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-info btn-md" type="button">
                                <i className="glyphicon glyphicon-search"/>
                            </button>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Search;