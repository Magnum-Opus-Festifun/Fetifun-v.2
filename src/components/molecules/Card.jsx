  import PropTypes from 'prop-types';

  function CardComponent(props) {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(props.price || 0);
  
    return (
      <div className="card" onClick={props.onClick}>
        <img src={props.image || 'placeholder-image-url'} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title || 'Default Title'}</h5>
          <p><span>{formattedPrice || 'Default Price'}</span></p>
        </div>
      </div>
    );
  }
  
  CardComponent.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func, // Menambahkan prop onClick sebagai fungsi
  };
  
  export default CardComponent;
  
  
