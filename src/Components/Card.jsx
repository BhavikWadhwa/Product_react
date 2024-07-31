import React, { useState, useEffect } from 'react';
import shoe1 from '../assets/nike-shoe-1.png';
import shoe2 from '../assets/nike-shoe-2.png';
import shoe3 from '../assets/nike-shoe-3.png';
import shoe4 from '../assets/nike-shoe-4.png';
import styles from "./Card.module.css";


function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
}

function Card() {
  const [mainimage, setmainimage] = useState(shoe1);
  const [style, setStyle] = useState(styles.unselectedbutt);
  const isDesktop = useWindowSize();

  const handleMouseEnter = (image) => {
    setmainimage(image);
  };

  const renderImages = () => {
    if (isDesktop) {
      return (
        <>
          <div className={styles.extraimages}>
            <img src={shoe1} alt='nike shoe' className={styles.extrashoe} onMouseEnter={() => handleMouseEnter(shoe1)} />
            <img src={shoe2} alt='nike shoe' className={styles.extrashoe} onMouseEnter={() => handleMouseEnter(shoe2)} />
            <img src={shoe3} alt='nike shoe' className={styles.extrashoe} onMouseEnter={() => handleMouseEnter(shoe3)} />
            <img src={shoe4} alt='nike shoe' className={styles.extrashoe} onMouseEnter={() => handleMouseEnter(shoe4)} />
          </div>
          <div className='main-image'>
            <img src={mainimage} alt='nike shoe' className={styles.displayshoe} />
          </div>
        </>
      );
    } else {
      return (
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={shoe1} class="d-block w-100 img-fluid" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={shoe2} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={shoe3} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={shoe4} class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon dark" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      );
    }
  };

  return (
    <div className={styles.card}>
      {renderImages()}
      <div className={styles.textarea}>
        <div className={styles.heading}>
          <h4>Nike Vaporfly 3 Electric</h4>
          <h6>Road Racing Shoes</h6>
        </div>
        <div className='price'>
          <h6>MRP : ₹ 21 395.00</h6>
          <p>incl. of taxes<br />
            Also includes all applicable duties</p>
        </div>
        <div className='size'>
          <div className={styles.sizetext}>
            <h6>Select Size</h6>
            <p>Size Guide</p>
          </div>
          <div className={styles.sizebuttons}>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 6</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 6.5</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 7</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 7.5</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 8</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 8.5</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 9</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 9.5</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>UK 10</button>
            <button className={`btn btn-outline-dark ${styles.buttswithsize}`}>Big Foot</button>
          </div>
          <div className={`d-flex flex-column col-12 ${styles.finalbuttons}`}>
            <button type="button" className={`btn btn-dark p-2 ${styles.bagbutt}`}>Add to Bag</button>
            <br />
            <button type="button" className={`btn btn-outline-dark p-2 ${styles.favbutt}`}>Favvv</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;