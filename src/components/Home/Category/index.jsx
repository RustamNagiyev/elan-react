import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../../categoryActions';
import "./index.css"

const Category = ({ selectCategory }) => {
  const handleCategoryClick = (category) => {
    selectCategory(category);
  };
  return (
    <section className='categories'>
         <h2 className="h2-categories">Kateqoriya seçin</h2>
      <div className="container3">
        <div className="card">
        <div className='category' onClick={() => handleCategoryClick('Daşınmaz əmlak')}>
        <img src={require('../../../images/home/bina.svg').default} alt="category" />
        <h3>Daşınmaz əmlak</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('neqliyyat')}>
        <img src={require('../../../images/home/masin.svg').default} alt="category" />
        <h3>Nəqliyyat</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Ev və bağ')}>
        <img src={require('../../../images/home/gul.svg').default} alt="category" />
        <h3>Ev və bağ üçün</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Digər xidmətlər')}>
        <img src={require('../../../images/home/xidmet.svg').default} alt="category" />
        <h3>Xidmətlər</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Şəxsi əşyalar')}>
        <img src={require('../../../images/home/moda.svg').default} alt="category" />
        <h3>Moda və stil</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Uşaq aləmi')}>
        <img src={require('../../../images/home/usaq.svg').default} alt="category" />
        <h3>Uşaq aləmi</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Elektronika və texnika')}>
        <img src={require('../../../images/home/elektronika.svg').default} alt="category" />
        <h3>Elektronika və texnika</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Heyvan')}>
        <img src={require('../../../images/home/pets.svg').default} alt="category" />
        <h3>Heyvan</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Hobbi')}>
        <img src={require('../../../images/home/hobby.svg').default} alt="category" />
        <h3>Hobbi,idman,asudə</h3>
        </div>
        <div className='category' onClick={() => handleCategoryClick('Vakansiyalar')}>
        <img src={require('../../../images/home/vakansiyalar.svg').default} alt="category" />
        <h3>Vakansiyalar</h3>
        </div>
        </div>
      </div>
    </section>
  )
}

export default connect(null, { selectCategory })(Category);
