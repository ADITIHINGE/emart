import { Button, Link } from '@mui/material';
import React from 'react';
import './Categories.scss';


const Categories = () => {
  return (
    <div className="categories">
<div className='col'>
    <div className='row'>
    <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="cat"/>
    <button>
       <Link className="link" to="../../pages/Products/Products.jsx">
              Sale
        </Link>
    </button>       
    </div>
    <div className="row">
    <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="../../pages/Products/Products.jsx" className="link">
              Women
            </Link>
          </button>
    </div>
</div>
<div className='col'>
    <div className="row">
    {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link to="../../pages/Products/Products.jsx" className="link">
              New Season
            </Link>
          </Button>
    </div>
</div>
<div className='col col-l'>
   <div className='row'>
     <div className='col'>
       <div className='row'>
           <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Button>
                <Link to="../../pages/Products/Products.jsx" className="link">
                  Men
                </Link>
              </Button>
        </div> 
     </div>      
      <div className='col'>
      <div className='row'>
      {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Button>
                <Link to="../../pages/Products/Products.jsx" className="link">
                  Accessories
                </Link>
              </Button>
        </div> 
      </div>
    </div>
    <div className='row'>
    <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Button>
            <Link to="../../pages/Products/Products.jsx" className="link">
              Shoes
            </Link>
            </Button>
    </div> 
</div>
    </div>
  )
}

export default Categories