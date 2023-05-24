import "../sass/style.scss"
import portfolioMoc from "../img/portfolio-moc.png"
import iberiMoc from "../img/いべりー.png"
import myflagranceoMoc from "../img/myfla-moc.png"
import maturiruMoc from "../img/まつりる-moc.png"
import rorinMoc from "../img/rorin-moc.png"
import CARDMoc from "../img/card-mac.png"
import nosQMoc from "../img/nosQ-moc.png"
import cafeMoc from "../img/mac-spiare.png"

const mocs = [portfolioMoc,iberiMoc,myflagranceoMoc,maturiruMoc,rorinMoc,CARDMoc,nosQMoc,cafeMoc]

const production = [
    {title:"portfolio",subTitle:"僕のポートフォリオを作成しました。",period:"2022.09~2023.02",peopleNumber:"1人",schoolYear:2,responsiblePerson:"エンジニア",language:"html css scss javascript React",LP:"",app:"",images:portfolioMoc},
    {title:"いべりー",subTitle:"「家族みんなでを手軽に季節行事を疑似体験できる」アプリです。",period:"2022.09~2023.02",peopleNumber:"5人",schoolYear:2,responsiblePerson:"エンジニア",language:"html css scss javascript",LP:"",app:"http://click.ecc.ac.jp/ecc/rfujie/works/iberi-/startindex.html",images:iberiMoc},
    {title:"myflagrance",subTitle:"香水のサブスクであなたにあった香水が見つけられます。",period:"2022.04~2022.08",peopleNumber:"1人",schoolYear:2,responsiblePerson:"エンジニア",language:"html css scss javascript",LP:"http://click.ecc.ac.jp/ecc/rfujie/works/my_flagrance/LP/",app:"http://click.ecc.ac.jp/ecc/rfujie/works/my_flagrance/",images:myflagranceoMoc},
    {title:"まつりる",subTitle:"屋台を出したい人とお祭りを開催している団体のマッチングサービスです",period:"2022.04~2022.08",peopleNumber:"5人",schoolYear:2,responsiblePerson:"エンジニア",language:"html css scss javascript",LP:"http://click.ecc.ac.jp/ecc/rfujie/works/%e3%81%be%e3%81%a4%e3%82%8a%e3%82%8b/",app:"",images:maturiruMoc},
    {title:"ローリン",subTitle:"ロールモデルを取り入れたアバターSNS",period:"約2週間",peopleNumber:"5人",schoolYear:2,responsiblePerson:"エンジニア",language:"html css javascript",LP:"",app:"http://click.ecc.ac.jp/ecc/rfujie/works/ro-rin/top.html",images:rorinMoc},
    {title:"CARD",subTitle:"AR年賀状を作れるサイトです",period:"2021.09~2022.02",peopleNumber:"5人",schoolYear:1,responsiblePerson:"エンジニア",language:"html css scss javascript",LP:"",app:"http://click.ecc.ac.jp/ecc/rfujie/works/card/",images:CARDMoc},
    {title:"ノスタルジっQめもりぃ〜",subTitle:"昔はやったものをクイズで遊べるゲームアプリ",period:"2021.09~2022.02",peopleNumber:"4人",schoolYear:1,responsiblePerson:"エンジニア",language:"html css scss javascript",LP:"http://click.ecc.ac.jp/ecc/rfujie/works/nostalgicQ/landingPage/",app:"http://click.ecc.ac.jp/ecc/rfujie/works/nostalgicQ/app/",images:nosQMoc},
    {title:"spiare cafe",subTitle:"スパイをコンセプトにしたカフェのサイトです。最初の作品です",period:"2021.04~2021.08",peopleNumber:"1人",schoolYear:1,responsiblePerson:"エンジニア",language:"html css",LP:"http://click.ecc.ac.jp/ecc/rfujie/works/spiare_cafe/",app:"",images:cafeMoc},
]

const ProductionList = () =>{
    console.log(production);
    return(
        <div className="productionWrap">
            {production.map((val) => (
                <div className="productionFlexWrap">
                    <div className="productionTxtWrap">
                        <h3 className="productionTitle">{val.title}</h3>
                        <p>{val.subTitle}</p>
                        <p>制作期間　{val.period}</p>
                        <p>制作人数　{val.peopleNumber}</p>
                        <p>担当　　　{val.responsiblePerson}</p>
                        <p>使用言語　{val.language}</p>
                        <p><a href={val.LP} target="_blank">LP：{val.LP}</a></p>
                        <p><a href={val.app} target="_blank">app：{val.app}</a></p>
                    </div>
                    <div className="productionImgWrap">
                        <img src={val.images} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductionList