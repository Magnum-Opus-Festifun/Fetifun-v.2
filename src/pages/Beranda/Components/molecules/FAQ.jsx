import LFAQ from "./LFAQ"
import RFAQ from "./RFAQ"

function FAQ() {
  return (
    <div className="faq-main-container">
      <h1>Frequently <span>Asked Question</span> </h1>
      <div className="faq-merge">
        <div className="faq-lnr">

          <LFAQ />

          <RFAQ />

        </div>
      </div>
    </div>
  )
}

export default FAQ