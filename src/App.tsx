import CardPost from "./components/CardPost/cardPost";
import Header from "./components/Header/Header";
import PersonalCard from "./components/PersonalCard/PersonalCard";

export default function App() {
  return (
    <div>
      <Header/>
      <div style={{display:'flex', flexDirection:'row'}}>
        <PersonalCard/>
        <div style={{ flex: '1',display: 'flex', flexDirection: 'column'}}>
          <CardPost name="Thaís Gomes" post="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!" timePosted={new Date()} profession="Designer"  picture="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/01/09/558908348-roridjmxknaunhygnl6mg2uo5m.jpg"/>

          <CardPost name="Ricardo Siqueira" post="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!" timePosted={new Date()} profession="Dev Back-end" picture="https://thumbs.dreamstime.com/b/imagem-do-perfil-trabalhador-masculino-caucasiano-que-se-posiciona-no-escrit%C3%B3rio-jovem-feliz-olha-para-c%C3%A2mera-coloca-local-de-190186649.jpg"/>
        </div>
      </div>
    </div>
  )
}

