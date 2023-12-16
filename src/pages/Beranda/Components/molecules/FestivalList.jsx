import { BangunJowo, Ceremony, FBudaya, amikom } from "../../../../assets/main"
import CardComponent from "../../../../components/molecules/Card"
function FestivalList() {
  return (
    <div className="card-container">
     <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
      <CardComponent image={Ceremony} title="CLOSING CEREMONY - CONTINUE THE CHAPTER TO BECOME STONGER" price='50.000'/>
      <CardComponent image={FBudaya} title="FESTIVAL BUDAYA LERENG MERAPI PAKEM SLEMAN" price='50.000'/>
      <CardComponent image={BangunJowo} title="BANGUNJUWO FESTIFAL #2 SEKAR MATARAM" price='50.000'/>
    </div>
  )
}

export default FestivalList