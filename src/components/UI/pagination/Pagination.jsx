import { getPagesArray } from '../../../utils/pages'
import style from './Pagination.module.css'

const Pagination = ({ page, changePage, totalPages }) => {
    const regularBtn = style.pages__btn
    const currentBtn = [style.pages__btn, style.pages__btn_current].join(" ")
    const pagesArray = getPagesArray(totalPages)

    return (
        <div className={style.pages__box}>
            {pagesArray.map(p => 
            <button 
                onClick={() => changePage(p)}
                className={page === p ? currentBtn : regularBtn} 
                key={p}
                >{p}</button>
            )}
      </div>
    )
}

export default Pagination