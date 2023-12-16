import Title from "../../../components/atoms/Title"
import FestivalList from "./molecules/FestivalList"
import KonserMusikList from "./molecules/KonserMusikList"
import RekomendasiList from "./molecules/RekomendasiList"
import SegeraHadirList from "./molecules/SegeraHadirList"
import Line from "./atoms/Line"

function RekomendasiBeranda() {
  return (
    <div>
      <div className="home-rec">
        <Title title='Segera Hadir' />
        <Line />
        <SegeraHadirList />
      </div>

      <div className="home-rec">
        <Title title='Rekomendasi Terbaik' />
        <Line />
        <RekomendasiList />
      </div>

      <div className="home-rec">
        <Title title='Konser Musik' />
        <Line />
        <KonserMusikList />
      </div>

      <div className="home-rec">
        <Title title='Festival' />
        <Line />
        <FestivalList />
      </div>
    </div>
  )
}

export default RekomendasiBeranda
