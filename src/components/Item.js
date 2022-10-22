import { useEffect, useState } from "react";

function Item(props) {
  const [installment, setInstallment] = useState(0);

  useEffect(()=> {
    let installment_price = parseFloat(props.price) / 12;
    setInstallment(installment_price.toFixed(2));
  }, [props.price])

  return (
    <div className='Items__single__container'>
      <div className='Items__single'>
        <img
          src={props.img}
          alt='Imagem do produto'
          width='80%'
        />

        <div className='Item__info'>
          <p className='Item__price'>R$ {props.price}</p>
          <p className='Item__installments'>ou 12x de R$ {installment} sem juros</p>
        </div>
      </div>
    </div>
  );
}

export default Item;