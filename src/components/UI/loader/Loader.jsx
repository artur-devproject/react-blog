import style from './Loader.module.css'

const Loader = () => {
    const loading = "loading"
    const children = loading.toUpperCase().split('')

    return (
        <div className={style.loader__box}>
            {children.map((elem, index) => 
                <div className={style.loader__element} key={index}>{elem}</div>)}
        </div>
    )
}

export default Loader