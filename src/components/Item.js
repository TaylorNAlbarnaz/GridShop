function Item() {
  return (
    <div className='Items__single__container'>
      <div className='Items__single'>
        <img
          src="https://www.pngmart.com/files/16/Neon-Gaming-Keyboard-PNG-Photos.png"
          alt='Imagem do produto'
          width='80%'
        />

        <div className='Item__info'>
          <p className='Item__price'>R$ 600,00</p>
          <p className='Item__installments'>ou 12x de R$ 50,00 sem juros</p>
        </div>
      </div>
    </div>
  );
}

export default Item;