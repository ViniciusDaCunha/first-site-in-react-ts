import "./ButtonCustom.css"

type ButtonParams = {
    title: string;
}

function ButtonCustom(params: ButtonParams) {
    return <button className="ButtonCustom">{params.title}</button>
}

export default ButtonCustom;