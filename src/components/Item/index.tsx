import PasteldeNata from "../../assets/pastel_nata_80_ref155070 copy 27.png"
import Sumo from "../../assets/Frame 1.png"
import { ContainerImg, ContainerItem, Information } from "./styles"
export const Item = () => {
    return (
        <ContainerItem>
            <div>
                <ContainerImg>
                    <img src={PasteldeNata} alt="" />
                </ContainerImg>
                <Information>
                    <p>PASTEL DE NATA</p>
                    <span>$1,15</span>
                </Information>
            </div>
        </ContainerItem>
    )
}


export const Item2 = () => {
    return (
        <ContainerItem>
            <div>
                <ContainerImg>
                    <img src={Sumo} alt="" />
                </ContainerImg>
                <Information>
                    <p>PASTEL DE NATA</p>
                    <span>$1,15</span>
                </Information>
            </div>
        </ContainerItem>
    )
}

export default Item