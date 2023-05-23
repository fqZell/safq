const Form = () => {
    return (
        <>
            <div className="form-container">
                <div className="form">

                    <h2>подпишитесь на нас</h2>

                    <p>*получайте специальные предложения и новости!</p>

                    <form>
                        <input type="email" placeholder="Ваша почта..." />
                        <button>Подписаться</button>
                    </form>

                    <h6>*нажимая на кнопку, вы даете на обработку персональных данных и<br></br>соглашаетесь с политикой конфидициальности</h6>

                </div>
            </div>
        </>
    )
}

export default Form;