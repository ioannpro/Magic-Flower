import style from './cartCard.module.scss';
import { hind } from '../fonts';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeItem, subtractItem, incItem } from '@/store/itemSlice';


export default function CartCard({id} : any) {
    const item = useSelector((state:any) => state.cart.value.items.find((item: any) => item.id === id))
    const dispatch = useDispatch()
    
    const delItem = () => dispatch(removeItem({id}));
    const subtract = () => dispatch(subtractItem({id}));
    const increase = () => dispatch(incItem({id}));
    
    return (
            <div className={`${style.card} ${hind.className}`}>
                <div className={style.card__product}>
                    <div className={style.card__img}>
                        <Image
                            src = { item.image } 
                            alt = { item.name }
                            fill = { true }
                        />
                    </div>
                    <div className={style.card__recipe}>
                        <div className={style.card__title}>{ item.name }</div>
                    </div>
                </div>
                <div className={style.card__price}>{ item.price }</div>
                <div className={style.card__quantity}>
                    <div className={style.card__quantity__inner}>
                        <div className={style.card__quantity__btn} onClick={subtract}>–</div>
                        <div>{item.quantity}</div>
                        <div className={style.card__quantity__btn} onClick={increase}>+</div>
                    </div>
                </div>
                <div className={style.card__total}>{ item.priceQuantity }</div>
                <div className={style.card__remove} onClick={delItem}>
                    <svg className={style.card__remove__icon} viewBox="0 0 24 24">
	                    <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/>
                    </svg>
                </div>
            </div>
        )
}